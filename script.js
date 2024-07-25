function getOptions() {
  const myProducts = document.getElementById("appleProduct"); //Using the ID element
  const totalItems = document.getElementById("appleProduct").length; //with the length method, i can get the total item
  console.log(totalItems); //
  const options = myProducts.options[myProducts.selectedIndex].value; //with the value method, i can get the numbers of product
  let stringOfOptions = ""; //Using the let variable with stringOfOptions and giving it an empty string
// Using the for loop to loop through myProduct
  for(let i = 0; i < myProducts.length; i++) {
    stringOfOptions = stringOfOptions + myProducts.options[i].text + ", ";
  }
  document.getElementById("demo").innerHTML = stringOfOptions //using the final ID element with stringsOfOption to get my product
}
 
