import React, { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';


const Items = (props) => {
    const {items, del,incquantity,decquantity} = props;
    const[newItem,setNewItem]=useState([
        
    ]
    )
   
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                    <div className='container d-flex align-items-center justify-content-center bg-red text-center'>
                    <button className='btn btn-primary' onClick={()=>incquantity(item.id)}>
                    <GrFormAdd/>
                    </button>
                    <span className='mx-2 h3'>
                        {item.quantity} 
                        </span>
                        <button className='btn btn-primary'onClick={()=>decquantity(item.id)}>
                    <AiOutlineMinus/>
                    </button> 
                    </div>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Edit</p>
                <p>Quantity</p>
            </div>
            {ListItem}
            {/* {newItem} */}
        </div>
    )
}

export default Items