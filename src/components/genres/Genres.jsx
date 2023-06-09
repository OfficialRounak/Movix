import React from 'react';
import { useSelector } from 'react-redux';
import "./style.scss"


const Genres = ({data}) => {
    const {genres}=useSelector((state)=>state.home);

  return (
    <div className='genres'>
        {data?.map((gid, index)=>{
            if(!genres[gid]?.name) return;
            return(
                <div className="genre" key={index}>
                    {genres[gid]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres;