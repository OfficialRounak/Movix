import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyloadimage/Img';
import useFetch from '../../../hooks/useFetch';
import './style.scss';





const HeroBanner = () => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");


  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);

  }, [data])


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }

  };
  return (
    <div className='heroBanner'>
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies ,Tv shows and people to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input type="text" placeholder='Search movies or Tv shows...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={()=> navigate(`/search/${query}`) }>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner