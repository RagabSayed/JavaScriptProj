
let knowAboutItem = document.querySelectorAll("#know_about_item");
let productData = document.querySelectorAll(".product_data");
let productDesc = document.querySelectorAll(".product_disc");
let backToItemData = document.querySelectorAll("#back_item_data");
knowAboutItem.forEach((item, index) => item.addEventListener("click", function () {
    productData[index].style.display = "none";
    productDesc[index].style.display = "block";
}));
backToItemData.forEach((item, index)=> item.addEventListener("click", function () {
    productData[index].style.display = "block";
    productDesc[index].style.display = "none";
}));


