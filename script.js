const validCode = "202501";

function validateCode() {
    const entryCode = document.getElementById('entry-code').value;
    if (entryCode === validCode) {
        document.getElementById('code-entry').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function showPage(pageId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function showCategories() {
    showPage('categories');
}

const customItems = {
    women: [],
    men: [],
    kids: [],
    bedding: [],
    shoes: []
};

function showItems(category) {
    const itemTypeSelect = document.getElementById('item-type');
    itemTypeSelect.innerHTML = ''; // مسح الخيارات السابقة
    let options = [];

    if (category === 'women') {
        options = [
            { value: 'سروال', text: 'سروال' },
            { value: 'قميص', text: 'قميص' },
            { value: 'فستان', text: 'فستان' },
            { value: 'حجاب', text: 'حجاب' },
            { value: 'شال', text: 'شال' },
            { value: 'سترة', text: 'سترة' },
            { value: 'تنورة', text: 'تنورة' },
            { value: 'بلوزة', text: 'بلوزة' },
            { value: 'عباية', text: 'عباية' },
            { value: 'ملابس رياضية', text: 'ملابس رياضية' }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'men') {
        options = [
            { value: 'سروال', text: 'سروال' },
            { value: 'جاكيت', text: 'جاكيت' },
            { value: 'قميص', text: 'قميص' },
            { value: 'بذلة', text: 'بذلة' },
            { value: 'ملابس رياضية', text: 'ملابس رياضية' },
            { value: 'بلوفر', text: 'بلوفر' },
            { value: 'سترة', text: 'سترة' },
            { value: 'بنطال', text: 'بنطال' }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'kids') {
        options = [
            { value: 'بنطال', text: 'بنطال' },
            { value: 'تيشيرت', text: 'تيشيرت' },
            { value: 'فستان', text: 'فستان' },
            { value: 'جاكيت', text: 'جاكيت' },
            { value: 'ملابس رياضية', text: 'ملابس رياضية' },
            { value: 'بجامة', text: 'بجامة' },
            { value: 'بلوفر', text: 'بلوفر' },
            { value: 'سروال', text: 'سروال' }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'bedding') {
        options = [
            { value: 'بطانية', text: 'بطانية' },
            { value: 'وسادة', text: 'وسادة' },
            { value: 'ستارة', text: 'ستارة' },
            { value: 'سجادة صغيرة', text: 'سجادة صغيرة' },
            { value: 'سجادة كبيرة', text: 'سجادة كبيرة' },
            { value: 'غطاء سرير', text: 'غطاء سرير' },
            { value: 'مفرش طاولة', text: 'مفرش طاولة' },
            { value: 'منشفة', text: 'منشفة' },
            { value: 'ملاءة سرير', text: 'ملاءة سرير' }
            // أضف المزيد من الخيارات هنا
        ];
    } else if (category === 'shoes') {
        options = [
            { value: 'حذاء رياضي', text: 'حذاء رياضي' },
            { value: 'حذاء رسمي', text: 'حذاء رسمي' },
            { value: 'حذاء نسائي', text: 'حذاء نسائي' }
            // أضف المزيد من الخيارات هنا
        ];
    }

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        itemTypeSelect.appendChild(optionElement);
    });

    document.getElementById('item-info').style.display = 'block';
}

document.getElementById('item-type').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('item-price').value = price || '';
});

function addItem() {
    const itemType = document.getElementById('item-type').value;
    const itemPrice = document.getElementById('item-price').value;
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ itemType, itemPrice });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

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

function showSummary() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const summaryList = document.getElementById('summary-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    summaryList.innerHTML = '';
    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `القطعة ${index + 1}: ${item.itemType} - ${item.itemPrice} درهم`;
        summaryList.appendChild(itemElement);
        totalPrice += parseFloat(item.itemPrice);
    });

    totalPriceElement.innerHTML = `المجموع الكلي: ${totalPrice} درهم`;
    showPage('summary');
}
