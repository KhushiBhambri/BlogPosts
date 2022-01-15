import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header  from "./Components/Header"; 
import {Postpage}  from "./Components/Posts";
import {Pages}  from "./Components/Pages";
import DropBx from './Components/DropBx' 
function App() {

const [Posts,setPosts]=useState([]);
const [PageNo,setPageNo]=useState(1);
const [Loading,setLoading]=useState(false);
const [PostperPage,setPostperPage]=useState(10);

useEffect(()=>{
  const fetchposts= async ()=>{
    setLoading(true)
    const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data)
    setLoading(false)
  }
  fetchposts();
},[])

console.log(PostperPage)
const endpost =  PageNo*PostperPage;
const start= endpost-PostperPage;

let PagePosts = Posts.slice(start,endpost)
  return (
    <div className="App">
      <Header />
      <div className="Up"><h1> Blog Posts</h1><DropBx PostperPage={PostperPage} setppp={setPostperPage}/></div>
      <Postpage posts={PagePosts} load={Loading}/>
       <Pages PostperPage={PostperPage} TotalPosts={Posts.length} setpg={setPageNo}/>
    </div>
  );
}

export default App;
