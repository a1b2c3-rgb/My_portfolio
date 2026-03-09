function Logo(){
    const imageUrl = './src/profile.jpg';

    // a click event (e) is an interaction when a user clicks
    // on a specific Element. we can respond to clicks by passing
    // a callback to the onclick event handler
    const handleClick = (e)=> e.target.style.display="none";
    return(
        <>
        <h1>Click event</h1>
        <img onClick={(e)=> handleClick(e)} src={imageUrl}></img>
        </>
    )
}
export default Logo