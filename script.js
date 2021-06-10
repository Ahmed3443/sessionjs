  var productNameInput =document.getElementById("productName");
  var productPriceInput =document.getElementById("productPrice");
  var productCategoryInput =document.getElementById("productCategory");
  var productDescInput =document.getElementById("productDesc");



    
      var productsContainer ;
    
  if(localStorage.getItem("productlist")==null)
  {
    var productscontainer = [];
  }
  else
  {
    productscontainer = JSON.parse(localStorage.getItem("productlist"));
    displayproduct();
     
  }

  

function addproduct(){
     if(checkinputs()==true)

     {
      var  product ={
        name:productNameInput.value ,
        price:productPriceInput.value ,
        category:productCategoryInput. value,
        desc:productDescInput.value ,
    }
    
    productscontainer.push(product);
    


    localStorage.setItem("productlist" ,JSON.stringify(productscontainer));
    displayproduct();
 
    claearform();
     }
     else{
       window.alert('all fields are required')
     }


 

   
}

function claearform(){
  productNameInput.value="";
  productPriceInput.value="";
  productCategoryInput.value="";
  productDescInput.value="";

}


function displayproduct(){
cartoona = ``;
  for( var i=0 ; i<productscontainer.length; i++)
  {
    cartoona+=`<tr>
        <td>${i}</td>
       <td>${productscontainer[i].name}</td>
        <td>${productscontainer[i].price}</td>
        <td>${productscontainer[i].category}</td>
        <td>${productscontainer[i].desc}</td>
        <td><button onclick="update(`+i+`)" class="btn btn-outline-warning">update</button></td>
        <td><button  onclick="deleteproduct(`+i+`)"   class="btn btn-outline-danger">delete</button></td>

        </tr>`


   
    
  }
  document.getElementById("tableBody").innerHTML=cartoona;

}


function checkinputs(){
  if(productNameInput.value!="" &&productPriceInput.value!=""&&productCategoryInput.value!=""&&productDescInput.value!="")
  {
    return true ;
  }
  else {
    return false;
  }
}


function deleteproduct(productIndex){
  productsContainer.splice(productIndex,1);
  localStorage.setItem("productlist" ,JSON.stringify(productsContainer));
  displayproduct();
}




//search


// function searchProduct(searchterm)
// {
// var cartoona =``;

//   for( var i=0 ; i<productscontainer.length; i++)
//   {
//     if(productscontainer[i].name.tolowerCase().includes(searchterm.tolowerCase())==true)
   
//     {
//       cartoona+=`<tr>
//       <td>`+i+`</td>
//      <td>`+productscontainer[i].name}+`</td>
//       <td>`+productscontainer[i].price+`</td>
//       <td>`+productscontainer[i].category+`</td>
//       <td>`+productscontainer[i].desc+`</td>
//       <td><button  class="btn btn-outline-warning">update</button></td>
//       <td><button  onclick="deleteproduct(`+i+`)"   class="btn btn-outline-danger">delete</button></td>

//       </tr>`;
//     }

//     // else  

//     //   {
//     //     console.log("there no");
//     //   }
    
//    }
  
//   document.getElementById("tableBody").innerHTML=cartoona;
//  }

//  searchProduct(n);


////////////////////////////////////////////////////////////////



// function searchProduct(searchTerm)
// {

//     for(var i=0 ; i< productscontainer.length ; i++)
//   {
//      if(productsContainer[i].name.tolowerCase().includes(searchTerm.tolowerCase()) == true)
//     {
//     console.log("yes")
//     }
//     else
//     {
//     console.log("no")
//     }

//    }

// }

// searchProduct('sam');





function searchProduct(searchTerm)
{
  var cartoona=``;
  for( var i=0 ; i<productsContainer.length; i++);
  {
  if(productsContainer[i].name.includes(searchTerm)==true)
  {
    cartoona+=`<tr>
        <td>${i}</td>
       <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button  class="btn btn-outline-warning">update</button></td>
        <td><button  onclick="deleteproduct(`+i+`)"   class="btn btn-outline-danger">delete</button></td>

        </tr>`;
  }
  else
  {
    console.log("m4mawgood");
  }
  }
  document.getElementById("tableBody").innerHTML=cartoona;

}

  

///////update

function update (productIndex)
{
productNameInput.value=productscontainer[productIndex].name;
productPriceInput.value=productscontainer[productIndex].price;
productCategoryInput.value=productscontainer[productIndex].category;
productDescInput.value=productscontainer[productIndex].desc;

}





