
let allProducts = document.querySelector(".products");
let products =[
    {
        id: 1,
        image: "./images/samsung-s23-1.png",
        name: "Galaxy S23 Ultra",
        price: 1200,
        category: "Samsung",
        quantity: 0,
        data:"Brand: Samsung <br>Capacity: 256 GB<br>RAM Capacity: 12 GB<br>Network Type: 5G<br>SIM Card: Dual SIM<br>Display Type: Dynamic AMOLED 2X, 120Hz<br>"+
            "Display Resolution In Pixels: 1440 x 3088<br>Display Size: 6.8 inch<br>Processor Chipset: Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)<br>Processor CPU: Octa-core<br>"+
            "Operating System Version: Android 13, One UI 5.1<br>Battery Capacity: 5000 mAh<br>Weight: 234 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
            "Video Recording: 8K@24/30fps, 4K@30/60fps, 1080p@30/60/240fps, 1080p@960fps, HDR10+, stereo sound rec., gyro-EIS<br>Front Camera: 12 MP<br>"+
            "Main Camera: 200 MP + 10 MP + 10 MP + 12 MP<br>Number Of Main Camera: Quad<br>Color: Black",
        fav: false,
        addCart: false
    },
    {
        id: 2,
        image: "./images/iPhone15Plus-1.jpg",
        name: "iPhone 15 Plus",
        price: 1010,
        category: "Apple",
        quantity: 0,
        data: "Brand: Apple <br>Capacity: 128GB<br>RAM Capacity: 6GB<br>Network Type: 5G<br>SIM Card: Single SIM<br>Display Type: Super Retina XDR OLED,HDR10, Dolby Vision<br>"+
                "Display Resolution In Pixels: 1290x2796<br>Display Size: 6.7 Inch<br>Processor Chipset: Apple A16 Bionic (4 nm)<br>Processor CPU: Hexa-core<br>"+
                "Operating System Version: iOS 17, upgradable to iOS 17.5.1<br>Battery Capacity: 4383 mAh<br>Weight: 201 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
                "Video Recording: 4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.<br>"+
                "Front Camera: 12 MP<br>Main Camera: 48 MP + 12 MP<br>Number Of Main Camera: Dual Camera<br>Model Name: iPhone 15 Plus<br>Color: Pink",
        fav: false,
        addCart: false
    },
    {
        id: 3,
        image: "./images/RedMagic8sPro.jpg",
        name: "Red Magic 8s Pro",
        price: 800,
        category: "Red Magic",
        quantity: 0,
        data: "Brand: Red Magic <br>Capacity: 256GB<br>RAM Capacity: 12GB<br>Network Type: 5G<br>SIM Card: Dual SIM<br>Display Type: AMOLED, 120Hz<br>"+
                "Display Resolution In Pixels: 1116x2480<br>Display Size: 6.8 Inch<br>Processor Chipset: Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)<br>Processor CPU: Octa-core<br>"+
                "Operating System Version: Android 13, Redmagic OS 8<br>Battery Capacity: 6000 mAh<br>Weight: 228 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
                "Video Recording: 8K@30fps, 4K@30/60fps, 1080p@30/60/120/240fps.<br>"+
                "Front Camera: 16 MP<br>Main Camera: 50 MP + 8 MP + 2 MP<br>Number Of Main Camera: Triple Camera<br>Model Name: 8s Pro<br>Color: Midnight Black",
        fav: false,
        addCart: false
    },
    {
        id: 4,
        image: "./images/samsung-s24-1.jpg",
        name: "Galaxy S24 Ultra",
        price: 1500,
        category: "Samsung",
        quantity: 0,
        data:"Brand: Samsung <br>Capacity: 256 GB<br>RAM Capacity: 12 GB<br>Network Type: 5G<br>SIM Card: Dual SIM<br>Display Type: Dynamic LTPO AMOLED 2X, 120Hz, HDR10+<br>"+
            "Display Resolution In Pixels: 1440 x 3120<br>Display Size: 6.8 inch<br>Processor Chipset: Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)<br>Processor CPU: Octa-core<br>"+
            "Operating System Version: Android 14, One UI 6.1<br>Battery Capacity: 5000 mAh<br>Weight: 232 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
            "Video Recording: 8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/240fps, 1080p@960fps, HDR10+, stereo sound rec., gyro-EIS<br>Front Camera: 12 MP<br>"+
            "Main Camera: 200 MP + 50 MP + 10 MP + 12 MP<br>Number Of Main Camera: Quad Camera<br>Model Name: Galaxy S24 Ultra<br>Color: Titanium Grey",
        fav: false,
        addCart: false
    },
    {
        id: 5,
        image: "./images/samsung-Z-Fold5-1.jpg",
        name: "Galaxy Z Fold 5",
        price: 1800,
        category: "Samsung",
        quantity: 0,
        data:"Brand: Samsung <br>Capacity: 256 GB<br>RAM Capacity: 12 GB<br>Network Type: 5G<br>SIM Card: Dual SIM<br>Display Type: Foldable Dynamic AMOLED 2X, 120Hz<br>"+
            "Display Resolution In Pixels: 1812 x 2176<br>Display Size: 7.6 inch<br>Processor Chipset: Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)<br>Processor CPU: Octa-core<br>"+
            "Operating System Version: Android 13, upgradable to Android 14, One UI 6<br>Battery Capacity: 4400 mAh<br>Weight: 253 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
            "Video Recording: 8K@30fps, 4K@60fps, 1080p@60/240fps (gyro-EIS), 720p@960fps (gyro-EIS), HDR10+<br>Front Camera: 10 MP + 4 MP<br>"+
            "Main Camera: 50 MP + 10 MP + 12 MP<br>Number Of Main Camera: Triple<br>Model Name: Galaxy Z Fold5<br>Color: Phantom Black",
        fav: false,
        addCart: false
    },
    {
        id: 6,
        image: "./images/iPhone15ProMax-1.jpg",
        name: "iPhone 15 Pro Max",
        price: 1400,
        category: "Apple",
        quantity: 0,
        data: "Brand: Apple <br>Capacity: 512GB<br>RAM Capacity: 8GB<br>Network Type: 5G<br>SIM Card: Single SIM<br>Display Type: LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision<br>"+
                "Display Resolution In Pixels: 1290x2796<br>Display Size: 6.7 Inch<br>Processor Chipset: Apple A17 Pro (3 nm)<br>Processor CPU: Hexa-core<br>"+
                "Operating System Version: iOS 17, upgradable to iOS 17.0.3<br>Battery Capacity: 4441 mAh<br>Weight: 221 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
                "Video Recording: 4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), 3D (spatial) video, stereo sound rec.<br>"+
                "Front Camera: 12 MP<br>Main Camera: 48 MP + 12 MP + 12 MP<br>Number Of Main Camera: Triple Camera<br>Model Name: iPhone 15 Pro Max<br>Color: Natural Titanium",
        fav: false,
        addCart: false
    },
    {
        id: 7,
        image: "./images/iPhone14ProMax-1.jpg",
        name: "iPhone 14 Pro Max",
        price: 130,
        category: "Apple",
        quantity: 0,
        data: "Brand: Apple <br>Capacity: 256GB<br>RAM Capacity: 6GB<br>Network Type: 5G<br>SIM Card: Single SIM<br>Display Type: LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision<br>"+
                "Display Resolution In Pixels: 1290x2796<br>Display Size: 6.7 Inch<br>Processor Chipset: Apple A16 Bionic (4 nm)<br>Processor CPU: Hexa-core<br>"+
                "Operating System Version: iOS 16, upgradable to iOS 17.5.1<br>Battery Capacity: 4323 mAh<br>Weight: 240 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
                "Video Recording: 4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec.<br>"+
                "Front Camera: 12 MP<br>Main Camera: 48 MP + 12 MP + 12 MP<br>Number Of Main Camera: Triple Camera<br>Model Name: iPhone 14 Pro Max<br>Color: Deep Purple",
        fav: false,
        addCart: false
    },
    {
        id: 8,
        image: "./images/samsung-s24plus.jpg",
        name: "Galaxy S24 Plus",
        price: 1050,
        category: "Samsung",
        quantity: 0,
        data:"Brand: Samsung <br>Capacity: 256 GB<br>RAM Capacity: 12 GB<br>Network Type: 5G<br>SIM Card: Dual SIM<br>Display Type: Dynamic LTPO AMOLED 2X, 120Hz, HDR10+<br>"+
            "Display Resolution In Pixels: 1440 x 3120<br>Display Size: 6.7 inch<br>Processor Chipset: Exynos 2400 (4 nm)<br>Processor CPU: Octa-core<br>"+
            "Operating System Version: Android 14, One UI 6.1<br>Battery Capacity: 4900 mAh<br>Weight: 196 gram<br>WiFi: Yes<br>Bluetooth: Yes<br>"+
            "Video Recording: 8K@24/30fps, 4K@30/60fps, 1080p@30/60/240fps, HDR10+, stereo sound rec., gyro-EIS<br>Front Camera: 12 MP<br>"+
            "Main Camera: 200 MP + 50 MP + 10 MP + 12 MP<br>Number Of Main Camera: Triple Camera<br>Model Name: Galaxy S24 Plus<br>Color: Marble Grey",
        fav: false,
        addCart: false
    }
]
// ///////////////// Draw All Products
function drawItem (dd) {
    let y = dd.map(item =>{
        return `
            <div class="product_item col col-md-5 col-xl-4">
                <div class="product_data bg-info py-3">
                    <figure>
                        <img class="img-fluid" src="${item.image}" alt="iPhone15Plus">
                        <figcaption class="ms-2">
                            <h4>Product : ${item.name}</h4>
                            <p class="fs-5 fw-bold">Price : ${item.price} $</p>
                            <p class="fs-5 fw-bold">Category : ${item.category}</p>
                            <button class="btn btn-primary fw-bold" id="know_about_item">Know more about item</button>
                        </figcaption>
                    </figure>
                </div><!-- //product_data -->
                <div class="product_disc bg-info p-1">
                    <h2>Product Description</h2>
                    <p class="">${item.data}
                    </p>
                    <button class="btn btn-primary fw-bold" id="back_item_data">Back to item data</button>
                </div><!-- //product_disc -->
                <div class="product_action m-2 d-flex justify-content-between">
                    <button class="add_btn btn fs-5 fw-bold" onclick ="code03(${item.id})" id="${item.addCart?"btn_style2":"btn_style1"}">Add to Cart</button>
                    <i class="fa-solid fa-heart fav fs-3" onclick="code07(${item.id})" id="${item.fav?"fav_style1":"fav_style2"}"></i>
                </div><!-- //product_action -->
            </div><!-- //product_item -->`
    }).join(' ');
    allProducts.innerHTML = y;
}
drawItem(products);
// ///////////////// Search in All Products
let searchBy = document.querySelector(".search_by");
searchBy.addEventListener("change",function () {
    localStorage.setItem("searchType", searchBy.value);
})
let searchByValue = localStorage.getItem("searchType");
let searchValue = document.querySelector(".search_value");
searchValue.addEventListener("keyup", function (e) {
    e.preventDefault()
    localStorage.setItem("searchWord", searchValue.value);
    setInterval(()=>{
        window.location = "index.html";
    },searchText)
})
let searchText = localStorage.getItem("searchWord").toLowerCase();
searchValue.value = searchText;
searchValue.focus();
searchBy.value = searchByValue;
let searchResult =[];
function searchResultShow() {
    if (searchByValue == "Search by Name") {
        searchResult = products.filter(x => x.name.toLowerCase().includes(searchText)) 
        } else if (searchByValue == "Search by Category" ){
            searchResult = products.filter(y => y.category.toLowerCase().includes(searchText))
        }
        drawItem(searchResult);
    }
searchResultShow ();
// ///////////////// Items in Cart
let addedItems = localStorage.getItem("addedItems")?JSON.parse(localStorage.getItem("addedItems")):[];
let favoritItems = localStorage.getItem("favoritItems")?JSON.parse(localStorage.getItem("favoritItems")):[];
let count= addedItems.reduce((a,b)=> a+b.quantity, 0);
let cartCount = document.querySelector("#cart_count");
let cartProductsDiv = document.querySelector("#cart_products");
let itemName = document.querySelector(".item_name");
let itemQuantity = document.querySelector(".item_quantity");
// ///////////////// Draw Items in Cart
function cartItems(xx) {
    let x = xx.map(item =>{
        return `
            <div id="cart_item">
                <div id="cart_item_name">
                    <span class="fs-5 fw-bold">${item.name}</span>
                </div>
                <div id="cart_control" class="">
                    <button class="text-danger fs-4 fw-bold border-0" onclick = "code04(${item.id})">-</button>
                    <span class="fs-5 fw-bold px-2">${item.quantity}</span>
                    <button class="text-success fs-4 fw-bold border-0" onclick = "code05(${item.id})">+</button>
                </div>
            </div>
        `
        }).join(' ');
    cartProductsDiv.innerHTML = x;
    cartCount.innerHTML = count;
    var ele = document.createElement("a");
    ele.className = "text-primary nav-link fs-5 fw-bold mt-2 view_cart_items";
    ele.setAttribute("href", "myproducts.html");
    ele.innerHTML = "View All Products";
    var addBefor = document.querySelector(".add_befor");
    cartProductsDiv.insertBefore(ele, addBefor);
}
if (addedItems) {
    cartItems(addedItems);
}
// ///////////////// Decrease Item Qunatity in Cart
let addToCart = document.querySelectorAll(".add_btn");
function code04(id) {
    let currntBtn = addToCart[id-1];
    addedItems.map(x => {if(x.id === id){
        if (x.quantity > 1) {
            x.quantity -= 1;
            count -= 1; 
        } else {
            x.quantity -= 1;
            count -= 1;
            currntBtn.textContent = "Add to Cart";
            currntBtn.id = "btn_style1";
            x.addCart = false;
        }
    }});
    addedItems = addedItems.filter(x => x.quantity > 0);
    cartItems(addedItems);
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
}
// ///////////////// Increase Item Qunatity in Cart
function code05(id) {
    addedItems.map(x => {if(x.id === id){
        x.quantity += 1;
        count += 1; 
    }});
    cartItems(addedItems);
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
}
// ///////////////// Add to Or Remove from Cart
function code03 (id) {
    let currntBtn = addToCart[id-1];
    if (localStorage.getItem("fristName")) {
        currntBtn.textContent=="Add to Cart"? currntBtn.textContent="Remove from Cart":currntBtn.textContent="Add to Cart";
        currntBtn.id=="btn_style1"?currntBtn.id="btn_style2":currntBtn.id="btn_style1";
        let choseneItem = products.find(item => item.id === id);
        if (addedItems.find(x => x.id === choseneItem.id)){
            addedItems.map(v =>{if (v.id===id){
                    count -= v.quantity;
                    v.quantity = 0;
                    v.addCart = false;
                }
            })
            addedItems = addedItems.filter(aa=>aa.quantity>0);
        }else{
            count += 1;
            choseneItem.addCart = true;  
            choseneItem.quantity = 1;
            addedItems=[...addedItems, choseneItem];
        }
        cartItems(addedItems);
        localStorage.setItem("addedItems", JSON.stringify(addedItems));
    } else {
        window.location = "login.html"
    }
}
// //////////// Add to Or Remove from Favoriate Icon
let itemFavorit = document.querySelectorAll(".fav");
function code07 (id) {
    let currntFav = itemFavorit[id-1];
    if (localStorage.getItem("fristName")) {
        currntFav.id=="fav_style2"?currntFav.id="fav_style1":currntFav.id="fav_style2";
        let selectItem = products.find(item => item.id === id);
        if (favoritItems.find(x=> x.id === selectItem.id)) {
            selectItem.fav = false;
            favoritItems = favoritItems.filter(x=> x.fav == true);
        } else {
            selectItem.fav = true;
            favoritItems =[...favoritItems, selectItem]
        }
        localStorage.setItem("favoritItems", JSON.stringify(favoritItems));
        drawItem(products);
    } else {
        window.location = "login.html"
    }
}
// /////////////// Show or Hide Cart Items
let controlCartData = document.querySelector("#cart_data");
controlCartData.addEventListener("click", function (){
    if (cartProductsDiv.innerHTML != "") {
        if (cartProductsDiv.style.display == "block") {
            cartProductsDiv.style.display = "none"
        } else {
            cartProductsDiv.style.display = "block"
        }
    }
})

