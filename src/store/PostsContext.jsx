import React, { createContext, useState } from "react";

export const PostsContext = createContext({
  posts: [],
  addPost: () => {},
  toggleFavorite: () => {},
});

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((prevPosts) => [...prevPosts, { ...postData, isFavorite: false }]);
  };

  const toggleFavoriteHandler = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, isFavorite: !post.isFavorite } : post
      )
    );
  };

  const contextValue = {
    posts: posts,
    addPost: addPostHandler,
    toggleFavorite: toggleFavoriteHandler,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};
