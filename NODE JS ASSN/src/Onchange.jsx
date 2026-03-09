import React, {use, useState} from "react";
function Onchange(){
    const [name, setName] = useState("guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState(" ");
    const [shipping, setShipping] = useState(" ");


function changename(event){
    setName(event.target.value)
}
function changequantity(event){
    setQuantity(event.target.value)
}
function adddelivery(event){
    setComment(event.target.value)
}
function addpayment(event){
    setPayment(event.target.value);
}
function addshipping(event){
    setShipping(event.target.value)
}
    return(
        <div>
            <h1>Onchange function</h1>
            <input value={name} onChange={changename}/>
            <p>Name: {name}</p>
            <input value = {quantity} min="1"type="number" onChange={changequantity}/>
            <p>Quantity: {quantity} </p>

            <textarea value={comment} onChange={adddelivery} placeholder="delivery info !!"/>
            <p>Delivery Info: {comment}</p>

            <select value={payment} onChange={addpayment} name="paymeny" id="paymeny">
                <option value="select">select an option</option>
                <option value="mpesa">mpesa</option>
                <option value="visa">visa</option>
                <option value="momo">momo</option>
            </select>
            <p>payment method: {payment}</p>

            <input type="radio" value="On delivery"
                                  checked={shipping=== "On delivery"}
                                  onChange={addshipping} />
            
            <label htmlFor="">On delivery</label>
            <br />
            <input type="radio" value="Pick up" 
                                  checked={shipping==="Pick up"} 
                                  onChange={addshipping}/>
            <label htmlFor="">Pick up</label>
            <p>shipping: {shipping}</p>
        </div>
    );
}
export default Onchange