//Each time user clicks the button the entire page background color
// should be updated to a random color
changeColor = () => {

  let randomNumber = Math.floor(Math.random()*7);

switch (randomNumber) {
  case 0:
    document.body.style.backgroundColor = "yellow";
    break;
  case 1:
    document.body.style.backgroundColor = "red";
    break;
  case 2:
    document.body.style.backgroundColor = "green";
    break; 
  case 3:
    document.body.style.backgroundColor = "blue";
    break;
  case 4:
    document.body.style.backgroundColor = "black";
    break;
  case 5:
    document.body.style.backgroundColor = "orange";
    break;
  case 6:
    document.body.style.backgroundColor = "pink";
    break;
  default :
    break;
}
  
}


