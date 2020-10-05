import { useMutation } from "@apollo/client";

import useDeleteMessageMutation from "./useDeleteMessage.mutation.gql";
import useGetMessagesQuery from "../useGetMessages/useGetMessages.query.gql";

export function useDeleteMessage() {
  const [deleteMessage, { loading, error }] = useMutation(
    useDeleteMessageMutation
  );

  const deleteMessageMutation = (_id) => () => {
    deleteMessage({
      variables: { input: { _id } },
      refetchQueries: [{ query: useGetMessagesQuery }],
    });
  };

  return {
    deleteMessageMutation,
    loading,
    error,
  };
}
