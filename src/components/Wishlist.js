import React,{useEffect} from 'react'

const Wishlist = () => {


    useEffect(() =>{
        function showwish() {
            fetch("http://localhost:5500/wish")
              .then((res) => {
                if (!res.ok) {
                  throw Error("error");
                }
    
                return res.json();
              })
              .then((data) => {
                const cartItems = data;
                let productContainer = document.querySelector(".products");
                if (cartItems && productContainer) {
                  productContainer.innerHTML = "";
                  Object.values(cartItems).map((item) => {
                    productContainer.innerHTML += `
                          
                            <div class="product">
                            <img class="imgcourse" src="${item.pic}"></img>
                            <div class="details">
                              <span class="textcourse">${item.title}</span>
                            <span class="textcourse">$ ${item.price}</span> 
                            <div class="textcourse"> </div>
                              </div>
                            </div>
                             `;
                  });
                }
              });
          }
    
          showwish();
    },[])

    // useEffect(() => {
    //   function deletes() {
    //     const id = {
    //       id: "${item.id}",
    //     };
    //     var options = {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(id),
    //     };
    //     fetch("http://localhost:5500/delete", options);
    //   }
    // },[])

    return (
  
            <div class="app">
      <h1>WISHLIST PAGE</h1>
      <div class="products_container">
        <div class="products_header">
          <h5 class="product_title">TITLE</h5>
        </div>
        <div onclick="location.href='/course-intro'" class="products"></div>
      </div>
    </div>
    );
}

export default Wishlist;