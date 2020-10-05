import { useQuery } from "@apollo/client";

import getAllMessagesQuery from "./useGetMessages.query.gql";

export function useGetMessages() {
  const { loading, error, data } = useQuery(getAllMessagesQuery);

  const messages = data?.allMessages ?? [];

  return { messages, error, loading };
}
