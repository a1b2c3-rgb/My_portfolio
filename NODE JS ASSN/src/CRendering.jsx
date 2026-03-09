// conditional rendering : allows you to control what gets 
// rendered in your application based on certain conditions
// (show, hide, or change components)
function CRendering (props){
    // option 1
        // if(props.isLoggedIn){
        //     return <h2 className="welcome-message">Welcome {props.userName}</h2>
        // }
        // return <h2 className="prompt">Please login to continue</h2>

    // option 2
        // return(
        //     props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.userName}</h2> :
        //                         <h2 className="prompt">Please login to continue</h2>
        // );

    // option 3
    const welcome = <h2 className="welcome-message">Welcome {props.userName}</h2> 
    const loginPrompt = <h2 className="prompt">Please login to continue</h2>
    return(
        
        props.isLoggedIn ? welcome: loginPrompt
    );
 
}
export default CRendering