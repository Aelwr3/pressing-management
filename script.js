document.getElementById('customer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const totalItems = document.getElementById('total-items').value;
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('totalItems', totalItems);
    document.getElementById('customer-info').style.display = 'none';
    document.getElementById('item-info').style.display = 'block';
    displayItemsForm(totalItems);
});

function displayItemsForm(totalItems) {
    let itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    for (let i = 1; i <= totalItems; i++) {
        let itemForm = document.createElement('form');
        itemForm.id = 'item-form-' + i;
        itemForm.innerHTML = `
            <label for="item-type-${i}">نوع القطعة:</label>
            <input type="text" id="item-type-${i}" name="item-type" required>
            <label for="item-price-${i}">سعر القطعة:</label>
            <input type="number" id="item-price-${i}" name="item-price" required>
            <button type="button" onclick="addItem(${i})">إضافة القطعة</button>
        `;
        itemsList.appendChild(itemForm);
    }
}

function addItem(index) {
    const itemType = document.getElementById(`item-type-${index}`).value;
    const itemPrice = document.getElementById(`item-price-${index}`).value;
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ itemType, itemPrice });
    localStorage.setItem('items', JSON.stringify(items));
    alert('تم إضافة القطعة بنجاح');
}
