import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'    
import { useSearchParams } from 'react-router-dom'


const Navbar = () => {
  let [searchParams] = useSearchParams()
  let [q , setQ] =useState("") 
  let [language, setlanguage] = useState("")
  let [search,setSearch]= useState("")
  let navigate = useNavigate()

  function postSearch(e){
    e.preventDefault()
    navigate(`/?q=${search}&language=${language}`)
    setSearch("")
  }
  useEffect(()=>{
    setQ(searchParams.get("q")?? "All")
    setlanguage(searchParams.get("language")?? "en")
  }, [searchParams])
  return (
    <>
    <div className='nav sticky-top '>
        <img src="./src/assets/news.gif" alt="Logo" className="gif-logo" />
      
    <ul className='gap-5 pt-4 pb-2'>
  
        <li><NavLink to = {`/?language=${language}`}>Home</NavLink></li>
        <li><NavLink to = {`/?q=World&language=${language}`}>World</NavLink></li>
        <li><NavLink to = {`/?q=India&language=${language}`}>India</NavLink></li>
        <li><NavLink to = {`/?q=Politics&language=${language}`}>Politics</NavLink></li>
        <li><NavLink to = {`/?q=Entertainment&language=${language}`}>Entertainment</NavLink></li>
        <li><NavLink to = {`/?q=Sports&language=${language}`}>Sports</NavLink></li>
        <li><NavLink to = {`/?q=Jokes&language=${language}`}>Jokes</NavLink></li>
        <div className="dropdown">
  <NavLink className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Language
  </NavLink>

  <ul className="dropdown-menu ">
    <li><NavLink className="dropdown-item" to ={`/?q=${q}&language=en`}>English</NavLink></li>
    <li><NavLink className="dropdown-item" to ={`/?q=${q}&language=hi`}>Hindi</NavLink></li>
  </ul>
</div>
         </ul>
       <div className='searchbar'>
       <nav className="navbar custom-navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search"  onSubmit={postSearch}>
      <input className="form-control me-2" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Explore</button>
    </form>
  </div>
</nav> 
       </div>
    
    
    </div>
    
    </>
  )
}

export default Navbar
