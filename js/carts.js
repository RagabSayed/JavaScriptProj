let allProducts = document.querySelector(".products");
let allFavorProducts = document.querySelector(".favort_items");
let getItems = localStorage.getItem("addedItems")?JSON.parse(localStorage.getItem("addedItems")):[];
let getFavorItems = localStorage.getItem("favoritItems")?JSON.parse(localStorage.getItem("favoritItems")):[];
let getTotalValue = getItems.reduce((a,b)=> a + (+b.quantity * +b.price),0);
let totalValue = document.querySelector(".total_value");
//////////////////// Draw Cart Products    // 
    function drawCartProduct(products) {
        let y = products.map(item =>{
            return `
                    <div class="product_item col col-md-5 col-xl-3">
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
                            <div id="cart_control" class="ms-3">
                                <button class="text-danger fs-1 fw-bold border-0" onclick = "code04(${item.id})">-</button>
                                <span class="fs-3 fw-bold px-2">${item.quantity}</span>
                                <button class="text-success fs-1 fw-bold border-0" onclick = "code05(${item.id})">+</button>
                            </div>
                            <button class="btn btn-outline-danger fs-5 fw-bold" onClick ="code02(${item.id})">Remove</button>
                        </div><!-- //product_action -->
                    </div><!-- //product_item -->`
            }).join(' ');
            allProducts.innerHTML = y;
            totalValue.innerHTML = +getTotalValue + " $";
    }
    if (getItems) {
        drawCartProduct(getItems);
    }
// /////////////////// Decrease Item Quantity
    function code04(id) {
        getItems.map(x => {if(x.id === id){
            x.quantity -= 1;
            getTotalValue -= +x.price;
        }});
        getItems = getItems.filter(x => x.quantity > 0);
        drawCartProduct(getItems);
        localStorage.setItem("addedItems", JSON.stringify(getItems));
    }
// /////////////////// Increase Item Quantity
    function code05(id) {
        getItems.map(x => {if(x.id === id){
            x.quantity += 1;
            getTotalValue += +x.price;
        }});
        drawCartProduct(getItems);
        localStorage.setItem("addedItems", JSON.stringify(getItems));
    }
// ///////////////// Remove from Cart
    function code02(id) {
        getItems.map(x => {if(x.id === id){
            x.quantity = 0;
        }});
        getItems = getItems.filter(x => x.quantity > 0);
        drawCartProduct(getItems);
        getTotalValue = getItems.reduce((a,b)=> a + (+b.quantity * +b.price),0);
        localStorage.setItem("addedItems", JSON.stringify(getItems));
    }
// /////////////////////// Draw Favoriat Products
    function drawFavorProduct(products) {
        let y = products.map(item =>{
            return `
                <div class="product_item col col-md-5 col-xl-3 ">
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
                        <i class="fa-solid fa-heart fav fs-3 text-danger" onclick="code07(${item.id})" id="${item.id}"></i>
                    </div><!-- //product_action -->
                </div><!-- //product_item -->
            `
        }).join(' ');
        allFavorProducts.innerHTML = y;
    }
    if (getFavorItems) {
        drawFavorProduct(getFavorItems);
    }
// ////////////////////Remove from Favorit
    function code07 (id) {
            getFavorItems.map(x=> {if(x.id == id) {
                x.fav = false;
                getFavorItems = getFavorItems.filter(x=> x.fav == true);
                 drawFavorProduct(getFavorItems);
            }})
        localStorage.setItem("favoritItems", JSON.stringify(getFavorItems));
    }

    
