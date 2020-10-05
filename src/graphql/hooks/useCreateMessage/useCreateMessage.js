import { useMutation } from "@apollo/client";

import useCreateMessageMutation from "./useCreateMessage.mutation.gql";
import useGetMessagesQuery from "../useGetMessages/useGetMessages.query.gql";

export function useCreateMessage() {
  const [createMessage, { loading, error }] = useMutation(
    useCreateMessageMutation
  );

  const createMessageMutation = (message) => {
    createMessage({
      variables: { input: { message } },
      refetchQueries: [{ query: useGetMessagesQuery }],
    });
  };

  return {
    createMessageMutation,
    loading,
    error,
  };
}
