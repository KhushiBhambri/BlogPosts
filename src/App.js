import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import myposts from './myposts'
import Header  from "./Components/Header"; 
import {Postpage}  from "./Components/Posts";
import {Pages}  from "./Components/Pages";
import DropBx from './Components/DropBx' 
function App() {

const [Posts,setPosts]=useState([]);
const [searchval,setsearchval]=useState("");
const [SearchPosts,setSearchPosts]=useState([]);
const [PageNo,setPageNo]=useState(1);
const [Loading,setLoading]=useState(false);
const [PostperPage,setPostperPage]=useState(10);

useEffect(()=>{
  const fetchposts= async ()=>{
    setLoading(true)
    //  const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
    // const res = JSON.parse(myposts);
    const res= myposts
    console.log(res)
    setPosts(res.data)
    setSearchPosts(res.data)
    setLoading(false)
  }
  fetchposts();
},[])

// console.log(PostperPage)


const endpost =  PageNo*PostperPage;
const start= endpost-PostperPage;
function search(){
  if(searchval==="") setSearchPosts(Posts);
  else{
  let SearchP= Posts.filter(post=>{
      const postName = post.title.toLowerCase();
       return postName.includes(searchval);
   });

  setSearchPosts(SearchP);
  }
}
let PagePosts = SearchPosts.slice(start,endpost)
  return (
    <div className="App">
      <Header searchval={searchval} setsearchval={setsearchval} search={search} pg={PageNo}/>
      <div className="Up"><h1> Blog Posts</h1><DropBx PostperPage={PostperPage} setppp={setPostperPage}/></div>
      <Postpage posts={PagePosts} load={Loading}/>
       <Pages PostperPage={PostperPage} TotalPosts={SearchPosts.length} setpg={setPageNo}/>
       <div style={{color:"aliceblue",textAlign:"center"}}>Made with Love 💟 By <u><a href="https://github.com/KhushiBhambri" style={{color:"#2a2a2a"}}>Khushi Bhambri</a></u></div>
    </div>
  );
}

export default App;
