  import profilePic from './assets/unnamed.jpg'
  function Card(){
      return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <html className='card-title'>Bro code</html>
            <p className='card-text'>i make youtube videos and play video games</p>
        </div>
      );
  }

  export default Card