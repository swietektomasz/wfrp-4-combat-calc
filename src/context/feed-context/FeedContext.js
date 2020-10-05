import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

import { useGetMessages } from "src/graphql";

const FeedStateContext = createContext();
const FeedDispatchContext = createContext();

const buildState = (feeds) => {
  return {
    allFeeds: feeds,
  };
};

function feedReducer(state, action) {
  switch (action.type) {
    case "update-state": {
      return buildState(action.feeds);
    }

    case "attack": {
      return "player 1 attacked player 2";
    }

    case "defend": {
      return "player 1 defends against player 2";
    }
  }
}

function FeedProvider({ children }) {
  const { feeds } = useGetMessages();
  const [state, dispatch] = useReducer(feedReducer, buildState(feeds));

  useEffect(() => {
    if (feeds) {
      dispatch({ type: "update-state", feeds });
    }
  }, [feeds]);

  return (
    <FeedStateContext.Provider value={state}>
      <FeedDispatchContext.Provider value={dispatch}>
        {children}
      </FeedDispatchContext.Provider>
    </FeedStateContext.Provider>
  );
}

FeedProvider.propTypes = {
  children: PropTypes.object,
};

function useFeedState() {
  const context = useContext(FeedStateContext);

  if (context === undefined) {
    throw new Error("useFeedState must be used within a FeedProvider");
  }

  return context;
}

function useFeedDispatch() {
  const context = useContext(FeedDispatchContext);

  if (context === undefined) {
    throw new Error("useFeedDispatch must be used within a FeedProvider");
  }

  return context;
}

export { FeedProvider, useFeedState, useFeedDispatch };
