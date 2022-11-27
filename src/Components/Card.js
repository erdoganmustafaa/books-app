import React, { useState } from 'react'
import Modal from './Modal';

const Card = ({books}) => {
    const [show,setShow] = useState(false);
    const [bookItem,setBookItem] = useState();
  return (
    <>
    {
        books.map((book,index)=>{
            let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
            let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
            if(thumbnail !== undefined && amount !== undefined){
                return(
                <>
                    <div className='card' key={index} onClick={()=>{setShow(true);setBookItem(book)}}>
                    <img src={thumbnail} alt=''/>
                    <div className='border-bottom'></div>
                    <div className='bottom'>
                        <h3 className='title'>{book.volumeInfo.title}</h3>
                        <p className='amount'>&#8377;{amount}</p>
                    </div>
                </div>
                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                </>
                )
            }
            else{
                return null;
            }
        })
    }
   

    </>
  )
}

export default Card