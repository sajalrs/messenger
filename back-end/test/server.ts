import { ApolloServer, gql } from "apollo-server";
import ConnectionPool from "./db";

const PORT = 8080;

const typeDefs = gql`
  type User {
    user_id: ID!
    first_name: String
    last_name: String
  }

  type Query {
    user(user_id: ID!): User
    users: [User]
  }

  type Mutation {
    register(first_name: String!, last_name: String!): User!
  }
`;

const resolvers = {
  Query: {
    user: async (_: any, args: { user_id: String }, __: any) => {
      try {
        const { user_id } = args;
        const user = await ConnectionPool.query(
          "SELECT * FROM users WHERE user_id = $1",
          [user_id]
        );
        return user.rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    users: async () => {
      try {
        const allUsers = await ConnectionPool.query("SELECT * FROM users");
        return allUsers.rows;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    register: async (
      _: any,
      args: { first_name: String; last_name: String },
      __: any
    ) => {
      try {
        const { first_name, last_name } = args;
        const newUser = await ConnectionPool.query(
          "INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *",
          [first_name, last_name]
        );
        return newUser.rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(PORT).then(() => {
  console.log(`GraphQL Server Running`);
});
