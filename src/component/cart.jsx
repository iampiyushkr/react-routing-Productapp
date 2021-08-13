import { useEffect, useState } from "react"
import axios from "axios"
import "./Pro.css"

export default function Cart1() {
    const [data2,setData2]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/cart").then(({ data }) => {
            setData2(data)
            console.log(data2)
        })
    },[])
    return <div className="productDiv">
        {data2.map(e => <div>
            <img src={e.img} alt="done"/>
            <p>Name: {e.name}</p>
            <p>Price: {e.price}</p>
            
        </div>)}
    </div>
    
}