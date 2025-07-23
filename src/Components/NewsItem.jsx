import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem(props) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3'>
        <div className="card bg-black text-light pt-5">
  <img src={props.pic?props.pic:"/images/noimage.jpg"} height={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title truncate-title">{props.title}</h5>
    <hr />
    <div className=''>
       <p> {
            <span className="text-light">{new Date(props.date).toLocaleDateString()}</span>
        }</p>
    </div>
    <hr />  
    <p className="card-text truncate-text">{props.description}</p>
    <Link to={props.url} target ='_blank ' rel ='norererrer' className="btn btn-primary w-100">Read full Article</Link>
  </div>
</div>
        
      </div>

  )
}

