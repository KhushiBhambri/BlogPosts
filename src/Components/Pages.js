import React from 'react'

export const Pages = ({PostperPage,TotalPosts,setpg}) => {

     const PageNums=[];
     for(let i=1;i<=Math.ceil(TotalPosts/PostperPage);i++){
         PageNums.push(i);
     }

    return (
        <div>
            <nav>
                <ul className="pagination pages">
                    {PageNums.map(Pg=>(
                        <li key={Pg} className='page-item'>
                            <a onClick={()=>setpg(Pg)} href="" className="page-link">{Pg}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
