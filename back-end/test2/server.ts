import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const PORT = 8080;

const gateway = new ApolloGateway({
  serviceList: [{ name: "users", url: "http://test:8080/" }],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});
server.listen(PORT).then(() => {
  console.log(`GraphQL Server Running`);
});
