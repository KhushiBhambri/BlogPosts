import { withTheme } from '@emotion/react'
import { fontFamily } from '@mui/system'
import React from 'react'
import './Component.css'

export const Postpage = ({posts,load}) => {
    let listposts={
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            // backgroundColor:"#458B00"
    }
    let poststyle={
       border:"1px solid #9464fc",
       borderRadius:"10px",
       marginTop:"5px",
       textAlign:"left",
       padding:"4px",
       fontStyle:"Tahoma",
       backgroundColor:"aliceblue",
       color:"#2a2a2a",
       fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    }
    if(load){
        return <h2>Loading Posts...</h2>
    }

    return (
        <div style={{width:"80%",margin:"auto"}}>
        
        <ol className="list-group listposts " >
            {
                posts.map(post=>(
                  
                    <li style={poststyle} key={post.id} className="list-group-item postitem" >
                        <h4 style={{color:"#9964f9"}}>{post.title}</h4>
                        <u><h6>In {post.publication} On {post.Date}</h6></u>
                        <p>{post.body}</p>
                        <a href={post.link}>View post Here!</a>
                    </li>
                   
                ))
            }
        </ol>
        </div>
    )
}







