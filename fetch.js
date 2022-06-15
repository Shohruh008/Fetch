const pohoto=document.querySelector(".photo");
const title=document.querySelector(".title");
const desc=document.querySelector(".desc");
const category=document.querySelector(".category");
const price=document.querySelector(".price");


fetch("https://fakestoreapi.com/products/1")
.then(res=>res.json())
.then(data=>getData(data))
.catch(error=>console.log(error))


function getData(newData){
    pohoto.src=newData.image;
    title.innerHTML=newData.title;
    desc.innerHTML=newData.description;
    category.innerHTML=newData.category;
    price.innerHTML=newData.price;
}