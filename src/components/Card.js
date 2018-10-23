import React from "react";
import img  from'../Images/img1.jpg'
import imgs  from'../Images/img2.jpg'

export default () => {
  return (
    <div className="container" style={{display:"flex", paddingTop:180}}>
      <div className="card" style={{margin:40, width:"50%", border:"ridge", borderRadius:10, padding:20, backgroundColor:"black"}}>
        <h1 style={{color:"lightgreen", textAlign:"center"}}>Nikhil Sharma</h1>
        <img src={img} alt="logo"  style={{ width:"100%", borderRadius:50, borderColor:"black"}}/>
      </div>

      <div className="card" style={{margin:40, width:"50%", border:"groove lighblue", borderRadius:10,  padding:20, backgroundColor:"grey"}}>
        <h1 style={{color:"white",  textAlign:"center"}}>Akhil Sharma</h1>
        <img src={imgs} alt="logo"  style={{ width:"100%", borderRadius:200, borderColor:"black"}}/>
      </div>

      <div className="card" style={{margin:40, width:"50%", border:"solid", borderRadius:10, padding:20, backgroundColor:"black" }}>
        <h1 style={{color:"lightblue",  textAlign:"center"}}>Himanshu Garg</h1>
        <img src={img} alt="logo"  style={{ width:"100%",  borderRadius:50, borderColor:"black"}}/>
      </div>
    </div>
  );
};
