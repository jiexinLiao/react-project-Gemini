
function ProfilePicture () {
    const image = './assets/unnamed.jpg';

  const handleClick = (e) => {
    e.target.style.display = 'none'
  }


    return (<img onClick={(e) => handleClick(e)} src= {image}></img>)
}

export default ProfilePicture