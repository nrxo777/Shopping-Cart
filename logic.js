// ********** UI elements **********
const all_item = document.querySelector('#all-item');
const cart_list = document.querySelector('#cart-list');
let empty_cart_message = document.querySelector('#emptyCartMessage');

// ********** Event Listeners **********
all_item.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        add_to_list(e.target);
    } 
}); 

// ********** Functions **********
function add_to_list(button) {
    const product_div = button.parentElement;
    const product_name = product_div.querySelector('#product-name').innerText;
    const product_price = product_div.querySelector('#product-price').innerText;
    
    const item_row = document.createElement('tr');
    item_row.innerHTML = `
        <td>${product_name}</td>
        <td>${product_price}</td>
        <td style="text-align: right;"><a href="#" class="remove">Remove</a></td>
    `;

    cart_list.appendChild(item_row);
    empty_cart();    
}

// ********** Remove **********


cart_list.addEventListener('click', function(ri) {
    ri.preventDefault();

    if (ri.target.classList.contains('remove') === true) {
        let remove_item = ri.target.parentElement.parentElement
        
        remove_item.remove()
        empty_cart();
    }

});

// ********** Message if cart is Empty **********

function empty_cart() {
    if(cart_list.children.length === 0) {
        empty_cart_message.innerText = "Your cart is empty.";
    } else {
        empty_cart_message.innerText = '';
    }
}

empty_cart();