import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  //here the dependency denotes if we move to some other page apart from the home page which is denoted my the location, the scroller will again move to the top.
  }, [location])


  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY); // this function helps in setting a custom css class for the navbar with the scroll effects

  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);// this useffect method monitors the scroll for and triggers the event listner for the avobe funtion.
    }
  }, [lastScrollY])

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);// this func helps in setting the show and hide state for the search bar onclick
  }

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);// this func helps in setting the show and hide state for the mobilemenu bar onclick
  }

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie")
    } else {
      navigate("/explore/tv")// this function is purely for routing for the options present inside the mobilemenu navbar items
    }
    setMobileMenu(false);
  }



  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)//this method is helping in searching the query from the search bar and demolishing the searchbar after 1 min time interval
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }

  };

  return (
    <header className={`header  ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} 
          onClick={()=> navigate("/")}/>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>Tv Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>
      </ContentWrapper>
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input type="text" placeholder='Search movies or Tv shows...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;