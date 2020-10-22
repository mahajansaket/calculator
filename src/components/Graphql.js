import { gql } from "apollo-boost";

export const getLogs = gql`
  query {
    logs(limit: 10, order_by: { id: desc }) {
      id
      calculation
      time
    }
  }
`;

export const getSub = gql`
  subscription {
    logs(limit: 10, order_by: { id: desc }) {
      id
      calculation
      time
    }
  }
`;

export const insertLogs = gql`
  mutation insert_logs_one($object: logs_insert_input!) {
    insert_logs_one(object: $object) {
      id
      time
      calculation
    }
  }
`;
