import React, {useEffect, useState} from 'react'
import NewsItem from '../Components/NewsItem'
import { useSearchParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  let [searchParams] = useSearchParams()
  let[articles,setArticles] = useState([])
  let[totalResults,setTotalResults] = useState()
  let [q,setQ] =useState("") 
  let [page,setPage] = useState(1)

  async function getAPIData(q){
    // let response = await fetch('https://newsapi.org/v2/everything?q=${q}&from=2025-03-30&sortBy=publishedAt&apiKey=93972cd3e15148c581afbc1e801416d9')
    // let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&from=2025-04-01&language=${searchParams.get("language")??"en"}&sortBy=publishedAt&apiKey=5ca31b19519e4135aebbd89799aa89f5`)
    //  let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&tesla&from=2025-04-28&language=${searchParams.get("language")??"en"}&sortBy=publishedAt&apiKey=5ca31b19519e4135aebbd89799aa89f5`)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&tesla&from=2025-06-13&language=${searchParams.get("language")??"en"}&sortBy=publishedAt&apiKey=5ca31b19519e4135aebbd89799aa89f5`)
      response = await response.json()
      if (response.status==="ok"){
        setTotalResults(response.totalResults)
        setArticles(response.articles)
      }
  }
  let fetchData = async()=>{

    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=${page}&from=2025-04-01&language=${searchParams.get("language")??"en"}&sortBy=publishedAt&apiKey=5ca31b19519e4135aebbd89799aa89f5`)
    setPage(page+1)
      response = await response.json()
      if (response.status==="ok"){
       
        setArticles(articles.concat(response.articles))
      }
  }
  useEffect(()=>{  
    let q = searchParams.get("q")??"All"
    setQ(q)
    getAPIData(q)
  }, [searchParams])
  return (
    <>
      <div className="container-fluid mt-4 pt-5">
        
        <h5 className ="bg-secondary text-center p-2 text-light mt-2 text-capitalize mt-5 ">{q} Articles</h5>
        <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchData}
  hasMore={articles.length<totalResults}
  loader={<div className='my-5 text-center'>
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  </div>}
>
        <div className="row">
          {
            articles.map((item, index)=>{
              return <NewsItem
              key = {index}
              source = {item.source?.name}
              title = {item.title}
              description = {item.description}
              pic={item.urlToImage}
              url ={item.url}
              date={item.publishedAt}
              />
              
            })
          }
        </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Home
