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
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    if (customerName && customerPhone) {
        showPage('categories');
    } else {
        alert('الرجاء إدخال جميع تفاصيل الزبون');
    }
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
    } else
