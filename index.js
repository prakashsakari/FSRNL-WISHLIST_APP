const wishlistInputElement = document.querySelector(".input");
const form = document.querySelector(".form");

const parentWishlistContainer = document.querySelector(".wishlist-container");

let wishlistValue = ""; // Global Variable
let wishList = [];

wishlistInputElement.addEventListener('keyup', (event) => {
    wishlistValue = event.target.value;
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    wishList = [...wishList, wishlistValue]; 
    wishlistInputElement.value = "";
    parentWishlistContainer.innerHTML = '';
    showWishlist(wishList);
})

const showWishlist = (wishList) => {
    for (let wish of wishList){
        const containerEle = document.createElement('div');
        const checkBoxEle = document.createElement('input');

        checkBoxEle.setAttribute('type', 'checkbox');
        containerEle.appendChild(checkBoxEle);

        const wishlistTextEle = document.createElement('span');
        wishlistTextEle.innerText = wish;
        containerEle.appendChild(wishlistTextEle);

        const deleteBtnEle = document.createElement('button');
        deleteBtnEle.innerText = 'Delete';
        deleteBtnEle.setAttribute('name', wish)
        containerEle.appendChild(deleteBtnEle);

        parentWishlistContainer.appendChild(containerEle);
    }
}

parentWishlistContainer.addEventListener('click', (event) => {
    const itemToDelete = event.target.name;
    // wishList = [rafting, scuba, paragliding]
    wishList = wishList.filter(item => item !== itemToDelete);
    parentWishlistContainer.innerHTML = '';
    showWishlist(wishList);
})