//function to load the items
document.addEventListener('DOMContentLoaded',()=>{
  //loading all the buttons 
  const AddtocartBtn=document.querySelectorAll('.add-to-cart-btn')
  console.log(AddtocartBtn)
  //to add functionality
  AddtocartBtn.forEach((btnele)=>{
    //console.log(btnele)
    btnele.addEventListener('click',()=>{
      //console.log(e.target)
      const Productinfo=btnele.parentElement.parentElement
      console.log(Productinfo)
      const ProductTitle=Productinfo.querySelector('.product-title').innerText
      const ProductPrice=Productinfo.querySelector('.product-price').innerText
      const imgEle=Productinfo.querySelector('.product-img').src
      //console.log(ProductTitle)
      //console.log(imgEle)
      //console.log(ProductPrice)
      //creating an object for selected prodcuts
      const SelectedProd={
        name:ProductTitle,
        price:ProductPrice,
        imgUrl:imgEle
      }
      //console.log(SelectedProd)
      Addtocart(SelectedProd)
    })
  })
})
//empty array to store the selected items
const CartItems=[]
console.log(CartItems)
//function to add items into cart
function Addtocart(items){
   console.log(items)
   const ExistingItems=CartItems.find((prod)=>prod.name === items.name)
   console.log(ExistingItems)
   if(ExistingItems){
      ExistingItems.quantity++
   }else{
     CartItems.push({...items,quantity:1})
   }
   UpdateCartUi()
}


//function to display the items added in cart
function UpdateCartUi(){
  const CartELe=document.querySelector('.cart_items')
  CartELe.innerHTML=''
  //to display the items that added into cart
  CartItems.forEach((item)=>{
    const{name,price,imgUrl,quantity}=item //object destructuring
    console.log(item)
    const CartProducts=document.createElement('li')
    CartProducts.innerHTML=`
    <div class="product">
                <img src=${imgUrl} class="product-img" />
                <div class="product-info">
                    <h4 class="product-title">${name}</h4>
                    <p class="product-price">${price}</p>
                    <div class="quantitycontainer">
                    <button class="IncreaseQuantity" onclick="">+</button>
                    
                    <span>${quantity}<span/>
                    <button class="DecreaseQuantity" onclick="">-</button>
                    </div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>


())
  CartELe.appendChild(Cartproducts)
}

//function to increase the quantity
function IncreaseQuantity(){

}
//function to decrease the quantity
function DecreaseQuantity(){

}
//function to remove the items in the cart
function RemoveQuantity(){

}
//function to remove all items in the cart
function RemoveallQuan(){

}
//function to increase cart icon value
function CartIcon(){

}
//function Save later
function SaveLater(){

}
//function Checkout
function Checkout(){

}