// click events= an interaction when a 
// user clicks on a specific element.
// we can respond to clicks by passing to 
// the onclick callback handler

import styles from "./Button.module.css"
function Button(){

  //       const styles = {
  // cursor: "pointer",
  // color: "aliceblue",
  // backgroundColor:" rgb(86, 84, 84)",
  // borderRadius: "10px",
  // border: "none",
  // width: "60px",
  // height: "25px",


  //const handleclick=(name)=>console.log(`${name} stop clicking me!`);
  // let count = 0;
  // const handleclick=(name)=>{
  //   if(count<3){
  //     count++;
  //     console.log(`${name}, you have clicked me ${count} times`);
  //   }else{
  //     console.log(`${name}, stop clicking me`);
  //   }
  // }
  const handleclick = (e)=> e.target.textContent = "ouch!";
  
//}
      return(  
        <>
        <h1>Click events</h1>
        {/* // <button style={styles}>submit</button> */}

        <button onDoubleClick={()=>handleclick("violet")} className={styles.button}>submit</button> <br/> 
        <h3>double click event</h3>
        <button onDoubleClick={(e)=>handleclick(e)} className={styles.button}>submit</button>
        </>
    );
}
export default Button
