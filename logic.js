// ********** UI elements **********
const all_item = document.querySelector('#all-item');
const cart_list = document.querySelector('#cart-list');



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
}

// ********** Remove **********


cart_list.addEventListener('click', function(ri) {
    ri.preventDefault();
    
    if (ri.target.classList.contains('remove') === true) {
        let remove_item = ri.target.parentElement.parentElement
        
        remove_item.remove()
    }

});

