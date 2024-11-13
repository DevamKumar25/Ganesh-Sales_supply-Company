let MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

//  for the index.html page ....btn

const btn = document.getElementById("shopBtn");
const fullText = "Shop Now and Equip Yourself for Success!";
let index = 0;

function typeLetterByLetter() {
  // Clear the button's text before starting the letter-by-letter typing
  if (index < fullText.length) {

    index++;
    setTimeout(typeLetterByLetter, 100); // Delay between letters
  }
}

// Start the animation after 1 second
setTimeout(() => {
  btn.innerHTML = ""; // Clear the initial text
  index = 0; // Reset the index
  typeLetterByLetter(); // Start the typing effect
}, 1000);

//  index.html   ... animation

const images = document.querySelectorAll(".gallery > img");
const totalImages = images.length;

function fadeInImages() {
  images.forEach((img, index) => {
    img.style.animation = `fadeIn 1s ease-in-out forwards`;
    img.style.animationDelay = `${index + 1}s`; // Setting the delay for each image
  });

  // After all images are shown, fade them out and restart
  setTimeout(() => {
    fadeOutImages();
  }, totalImages * 1000 + 2000); // Wait for all images to fade in + 2 seconds
}

function fadeOutImages() {
  images.forEach((img) => {
    img.style.animation = `fadeOut 1s ease-in-out forwards`;
  });

  // Restart the process after all images are faded out
  setTimeout(() => {
    resetImages();
  }, 1000); // Wait for fade-out animation to complete
}

function resetImages() {
  images.forEach((img) => {
    img.style.opacity = 0; // Reset opacity for the next cycle
  });
  fadeInImages(); // Restart the fade-in process
}

// Start the process
fadeInImages();

document.addEventListener("DOMContentLoaded", function () {
  // Close Promotional Banner Functionality
  const closePromoBanner = document.querySelector(".close-promo-banner");
  const promoBanner = document.querySelector(".promo-banner");

  if (closePromoBanner && promoBanner) {
    closePromoBanner.addEventListener("click", function () {
      promoBanner.classList.add("hide");
    });
  } else {
    console.error("Elements not found: close-promo-banner or promo-banner");
  }
});

/// script.js

/// Function to add an item to the cart
// function addToCart(image, name, price) {
//   var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//   // Check if the item already exists in the cart
//   var existingItem = cartItems.find(function (item) {
//     return item.name === name;
//   });

//   if (existingItem) {
//     // If the item exists, increment its quantity
//     existingItem.quantity += 1;
//   } else {
//     // Add the new item with a quantity of 1
//     cartItems.push({
//       image: image,
//       name: name,
//       price: price,
//       quantity: 1,
//     });
//   }

//   // Store the updated cart back into localStorage
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));

//   // Redirect to cart page
//   window.location.href = "cart.html";
// }

// // Function to update the quantity of an item in the cart
// function updateQuantity(index, quantity) {
//   var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   if (quantity < 1 || quantity > 100) {
//     alert("Please enter a quantity between 1 and 100");
//     return;
//   }

//   // Update the quantity of the item
//   cartItems[index].quantity = parseInt(quantity);

//   // Store the updated cart back into localStorage
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));

//   // Reload the page to reflect changes
//   location.reload();
// }

// // Function to remove an item from the cart
// function removeFromCart(index) {
//   var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//   // Remove the item at the given index
//   cartItems.splice(index, 1);

//   // Store the updated cart back into localStorage
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));

//   // Reload the page to reflect changes
//   location.reload();
// }

// // Function to display the cart items on the cart page
// document.addEventListener("DOMContentLoaded", function () {
//   var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   var cartTable = document.getElementById("cartTable");
//   var subtotal = 0;

//   if (cartItems.length === 0) {
//     // No items in the cart
//     cartTable.style.display = "none";
//     document.getElementById("emptyCartMessage").style.display = "block";
//     document.getElementById("totalPriceSection").style.display = "none";
//   } else {
//     // Items are in the cart
//     cartTable.style.display = "table";
//     document.getElementById("emptyCartMessage").style.display = "none";
//     document.getElementById("totalPriceSection").style.display = "block";

//     // Clear the table before appending rows
//     cartTable.innerHTML = `
//       <tr>
//         <th>Product</th>
//         <th>Quantity</th>
//         <th>Subtotal</th>
//       </tr>
//     `;

//     // Loop through the cart items and create table rows
//     cartItems.forEach(function (item, index) {
//       var row = `
//         <tr>
//           <td>
//             <div class="cart-info">
//               <img src="${item.image}" alt="${item.name}">
//               <div>
//                 <p>${item.name}</p>
//                 <small>Price: $${item.price}</small><br>
//                 <a href="#" onclick="removeFromCart(${index})">Remove</a>
//               </div>
//             </div>
//           </td>
//           <td>
//             <input type="number" min="1" max="100" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
//           </td>
//           <td>$${(item.price * item.quantity).toFixed(2)}</td>
//         </tr>
//       `;
//       cartTable.innerHTML += row;
//       subtotal += item.price * item.quantity;
//     });

//     // Update the total price section
//     document.getElementById("subtotal").innerText = "$" + subtotal.toFixed(2);
//     var tax = subtotal * 0.1; // Assuming a 10% tax rate
//     document.getElementById("tax").innerText = "$" + tax.toFixed(2);
//     document.getElementById("total").innerText = "$" + (subtotal + tax).toFixed(2);
//   }
// });

function addToCart(image, name, price) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the item already exists in the cart
  const existingItem = cartItems.find((item) => item.name === name);

  if (existingItem) {
    // If the item exists, increment its quantity
    existingItem.quantity += 1;
  } else {
    // Add the new item with a quantity of 1
    cartItems.push({
      image: image,
      name: name,
      price: price,
      quantity: 1,
    });
  }

  // Store the updated cart back into localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Refresh the cart display
  displayCartItems();
}

function updateQuantity(index, quantity) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (quantity < 1 || quantity > 100) {
    alert("Please enter a quantity between 1 and 100");
    return;
  }

  // Update the quantity of the item
  cartItems[index].quantity = parseInt(quantity);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Refresh the cart display
  displayCartItems();
}

function removeFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Remove the item at the given index
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Refresh the cart display
  displayCartItems();
}

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartTable = document.getElementById("cartTable");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const totalPriceSection = document.getElementById("totalPriceSection");

  let subtotal = 0;

  if (cartItems.length === 0) {
    cartTable.style.display = "none";
    emptyCartMessage.style.display = "block";
    totalPriceSection.style.display = "none";
  } else {
    cartTable.style.display = "table";
    emptyCartMessage.style.display = "none";
    totalPriceSection.style.display = "block";

    // Clear the table and append header
    cartTable.innerHTML = `
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    `;

    // Loop through cart items to create table rows
    cartItems.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;

      const row = `
        <tr>
          <td>
            <div class="cart-info">
              <img src="${item.image}" alt="${
        item.name
      }" width="100" height="100">
              <div>
                <p>${item.name}</p>
                <small>Price: Rs. ${item.price}</small><br>
                <a href="#" onclick="removeFromCart(${index})">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" min="1" max="100" value="${
              item.quantity
            }" onchange="updateQuantity(${index}, this.value)">
          </td>
          <td>Rs. ${itemSubtotal.toFixed(2)}</td>
        </tr>
      `;

      cartTable.innerHTML += row;
    });

    // Update subtotal, tax, and total price
    const tax = subtotal * 0.1; // 10% tax
    document.getElementById("subtotal").innerText =
      "Rs. " + subtotal.toFixed(2);
    document.getElementById("tax").innerText = "Rs. " + tax.toFixed(2);
    document.getElementById("total").innerText =
      "Rs. " + (subtotal + tax).toFixed(2);
  }
}

// Initialize cart display on page load
document.addEventListener("DOMContentLoaded", displayCartItems);

// Inject CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
  .cart-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .cart-details {
    display: flex;
    flex-direction: column;
  }

  .cart-details p {
    margin: 0;
  }

  @media only screen and (max-width: 800px) {
    .cart-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .cart-details {
      margin-top: 10px;
    }
  }
`;
document.head.appendChild(style);
