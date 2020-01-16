// You will add code in this file
import React, { useState } from "react";
// import the dummy-data and the SearchBar
import PostsContainer from "./PostsContainer";
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import dummyData from '../dummy-data';


const PostsPage = () => {
  // set up state for the data
  const [postData, setPostData] = useState(dummyData);
  console.log("initial state", postData);
  // add the SearchBar and PostsContainer components here
  return (
    <div className="App">
      <SearchBarContainer />
      <PostsContainer postData={postData}/>


    </div>);
};

export default PostsPage;
