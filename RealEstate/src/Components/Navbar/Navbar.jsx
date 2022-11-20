import React from 'react'

const Navbar = () => {
  return (
    <div style={{border:'2px solid black'}}>
        <div style={{fontFamily:"fantasy",fontSize:"60px",color:"red",display:"flex",justifyContent:"space-around"}}> WELCOME TO REAL ESTATE WORLD</div>
       
      <div style={{backgroundColor:"black",color:"red",display:"flex" ,height:"50px",justifyContent:"space-evenly",alignItems:"center",fontSize:"25px"}}>
       <div>Rent</div>
       <div>Buy</div>
       <div>Sell</div>
       </div>
       <div style={{display:"flex",justifyContent:"flex-end",backgroundColor:"black"}}><button style={{marginRight:"10px",backgroundColor:"green",padding:"15px",fontSize:"25px",fontWeight:"bolder"}}>Login</button>
       <button style={{marginLeft:"10px",backgroundColor:"green",fontSize:"25px",fontWeight:"bolder"}}>Signup</button></div>
       
      
    </div>
  )
}

export default Navbar
