document.getElementById('customer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const totalItems = document.getElementById('total-items').value;
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('totalItems', totalItems);
    document.getElementById('customer-info').style.display = 'none';
    document.getElementById('item-info').style.display = 'block';
});

document.getElementById('item-category').addEventListener('change', function() {
    const category = this.value;
    const itemTypeSelect = document.getElementById('item-type');
    itemTypeSelect.innerHTML = ''; // مسح الخيارات السابقة
    let options = [];

    if (category === 'ملابس النساء') {
        options = [
            { value: 'سروال', text: 'سروال - 10 دراهم', price: 10 },
            { value: 'قميص', text: 'قميص - 5 دراهم', price: 5 },
            { value: 'فستان', text: 'فستان - 20 دراهم', price: 20 }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'ملابس الرجال') {
        options = [
            { value: 'سروال', text: 'سروال - 12 دراهم', price: 12 },
            { value: 'جاكيت', text: 'جاكيت - 15 دراهم', price: 15 },
            { value: 'قميص', text: 'قميص - 7 دراهم', price: 7 }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'ملابس الأطفال') {
        options = [
            { value: 'بنطال', text: 'بنطال - 8 دراهم', price: 8 },
            { value: 'تيشيرت', text: 'تيشيرت - 5 دراهم', price: 5 },
            { value: 'فستان', text: 'فستان - 15 دراهم', price: 15 }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'الأفرشة') {
        options = [
            { value: 'بطانية', text: 'بطانية - 30 دراهم', price: 30 },
            { value: 'وسادة', text: 'وسادة - 15 دراهم', price: 15 },
            { value: 'ستارة', text: 'ستارة - 25 دراهم', price: 25 }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'الأحذية') {
        options = [
            { value: 'حذاء رياضي', text: 'حذاء رياضي - 20 دراهم', price: 20 },
            { value: 'حذاء رسمي', text: 'حذاء رسمي - 25 دراهم', price: 25 },
            { value: 'حذاء نسائي', text: 'حذاء نسائي - 15 دراهم', price: 15 }
            // أضف المزيد من الخيارات هنا
        ];
    }

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        optionElement.setAttribute('data-price', option.price);
        itemTypeSelect.appendChild(optionElement);
    });

    document.getElementById('item-form').style.display = 'block';
});

document.getElementById('item-type').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('item-price').value = price;
});

document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemType = document.getElementById('item-type').value;
    const itemPrice = document.getElementById('item-price').value;
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ itemType, itemPrice });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
});

function displayItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `القطعة ${index + 1}: ${item.itemType} - ${item.itemPrice} درهم`;
        itemsList.appendChild(itemElement);
    });
                                          }
