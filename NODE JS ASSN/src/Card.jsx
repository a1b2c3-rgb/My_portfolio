import profile from './profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className="profilepc" src= {profile} alt="profile photo" />
            <h1 className="belong"> My belonging</h1>
            <p className="spirit">I belong to Spirit embassy</p>
        </div> 
    );
}
export default Card