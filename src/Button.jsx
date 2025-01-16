

function Button() {

 const handleClick = (e) => e.target.textContent = 'OUCH'



 return(<Button onDoubleClick={(e) => handleClick(e)}>Click me </Button>) ;
}


export default Button