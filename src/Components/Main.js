import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import Card from './Card'
import axios from 'axios'
const Main = () => {
    const [search,setSearch] = useState("");
    const [bookData,setBookData] = useState([]);
    const searchBook = (evt)=>{
        if(evt.key==="Enter"){
            axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyC1MNvxdlJwXvMJo2bokx2Rjvinvw9ONp8"+"&maxResults=20")
            .then(res=>setBookData(res.data.items)).catch(err=>console.log(err))
        }
    }

  return (
    <>
    
    <div className='header'>
    <div className='row1'>
        <h1>A room without books is like <br/> a body without a soul</h1>
    </div>
    <div className='row2'>
        <h2>Find your book</h2>
        <div className='search'>
            <input type="text" placeholder="Enter your book name" value={search} onChange={(e)=>setSearch(e.target.value)} onKeyPress={searchBook}/>
            <button><BiSearch/></button>
        </div>
        <img src='./images/bg2.png' alt=''/>
    </div>
    </div>
    <div className='border-bottom'></div>
    <div className='container'>
        {
            <Card books={bookData}/>
        }
        
        
    </div>
    </>
  )
}

export default Main