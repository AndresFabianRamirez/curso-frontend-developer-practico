const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconBur = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailsIconClose = document.querySelector('.product-detail-close');
const imagenProductDetails = document.getElementById("002");

//cartas creadas a mano
const card1 = document.getElementById('001');
const card2 = document.getElementById('003');

const dinamicCaracteristicName = document.getElementById('nombre');
const dinamicCaracteristicCost = document.getElementById('precio');
const dinamicCaracteristicDescription = document.getElementById('descripcion');







const productDetail = document.querySelector('.product-detail');
const carMenu = document.querySelector('.navbar-shopping-cart');
const cardsContainer =document.querySelector('.cards-container');
const productDetails =document.querySelector('.product-details');



menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    if(productDetail.classList.contains('inactive') != true){
        productDetail.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}
menuIconBur.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    if(productDetail.classList.contains('inactive') != true){
        productDetail.classList.add('inactive');
     }
     closeProductDetails();
     mobileMenu.classList.toggle('inactive');

}
carMenu.addEventListener('click',toggleCarMenu);
function toggleCarMenu(){
    if(desktopMenu.classList.contains('inactive') != true){
        desktopMenu.classList.add('inactive');
     }
    if(mobileMenu.classList.contains('inactive') != true){
       mobileMenu.classList.add('inactive');
    }
    if(productDetails.classList.contains('inactive') != true){
        productDetails.classList.add('inactive');
     }
    productDetail.classList.toggle('inactive');
    
}

function openProductDetailAside(){
    if(productDetail.classList.contains('inactive') != true){
        productDetail.classList.add('inactive');
    }

    productDetails.classList.remove('inactive');
}
//Hace que mi boton del carrito de compras cierre mi detalles de la compra
productDetailsIconClose.addEventListener('click',closeProductDetails);
function closeProductDetails(){
    productDetails.classList.add('inactive');
}
/* card1.addEventListener('click',productDetailsCard1){} */


/* <!-- <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> --> */
const productList = [];
productList.push({
    name: 'Ref:41 Crasulaceae',
    price: 12,
    image: 'https://images.unsplash.com/photo-1572186192734-e82b57dc4435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFyZGluZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 
} 
) 
productList.push({
    name: 'Ref:14 Crasulacea',
    price: 70,
    image: 'https://images.unsplash.com/photo-1599009944997-3544a939813c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFyZGluZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 
} 
) 
productList.push({
    name: 'Ref:32 Aloe',
    price: 50,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', 
} )
productList.push({
    name: 'Ref:69 Cactus',
    price: 20,
    image: 'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60', 
} 

) 
productList.push({
    name: 'Ref:54 Bonsai',
    price: 80,
    image: 'https://images.unsplash.com/photo-1615781749798-c01b1b64cfcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80', 
} 

) 
productList.push({
    name: 'Ref:84 Cactus',
    price: 26,
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=724&q=80', 
} 

) 
function productos(arr){
    for (product of arr){
        const productCard =document.createElement('div');
        productCard.classList.add('product-card');
        let a = String(product.name).substring(4,6);
        productCard.classList.add (a);
    
        const productImg =document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-info');
    
        const productInfoDiv =document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productDiv.appendChild(productInfoDiv);
        productDiv.appendChild(productInfoFigure);
        
    
        productCard.appendChild(productImg);
        
        productCard.appendChild(productDiv);
    
    
        cardsContainer.appendChild(productCard);
    }
}
productos(productList);

card1.addEventListener('click',openProductDetailsCuno);
function openProductDetailsCuno(){
    if(productDetail.classList.contains('inactive') != true){
        productDetail.classList.add('inactive');
     }
    imagenProductDetails.setAttribute('src','https:images.unsplash.com/photo-1603436326446-74e2d65f3168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=942&q=80');
    dinamicCaracteristicName.innerText =`Alocasia Ref:67`;
    dinamicCaracteristicCost.innerText = '$50';
    dinamicCaracteristicDescription.innerText ='Planta decorativa';
    productDetails.classList.remove('inactive');
}

card2.addEventListener('click',openProductDetailsCdos);
function openProductDetailsCdos(){
    if(productDetail.classList.contains('inactive') != true){
        productDetail.classList.add('inactive');
     }
    imagenProductDetails.setAttribute('src','https://images.unsplash.com/photo-1610630876605-97b3e670f56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80');
    dinamicCaracteristicName.innerText =`Alocasia Ref:45`;
    dinamicCaracteristicCost.innerText = '$67';
    dinamicCaracteristicDescription.innerText ='Planta decorativa';


    productDetails.classList.remove('inactive');
}
