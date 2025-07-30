// منع القائمة اليمنى
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('هذا الإجراء غير مسموح به');
    return false;
});

// منع اختيار المحتوى
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(e) {
    // منع Ctrl+U (عرض المصدر)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        alert('عرض الكود المصدر غير مسموح به');
        return false;
    }
    
    // منع Ctrl+S (حفظ الصفحة)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        alert('حفظ الصفحة غير مسموح به');
        return false;
    }
    
    // منع F12 (أدوات المطورين)
    if (e.keyCode === 123) {
        e.preventDefault();
        alert('أدوات المطورين غير متاحة');
        return false;
    }
    
    // منع Ctrl+Shift+I (أدوات المطورين)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        alert('أدوات المطورين غير متاحة');
        return false;
    }
});

// حماية الصور من السحب والضغط المطول
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// تطبيق حماية CSS على جميع الصور
function protectImages() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        // منع اختيار الصور
        images[i].style.userSelect = 'none';
        images[i].style.webkitUserSelect = 'none';
        images[i].style.mozUserSelect = 'none';
        images[i].style.msUserSelect = 'none';
        
        // منع أحداث المؤشر على الصور
        images[i].style.pointerEvents = 'none';
        
        // إضافة طبقة حماية للصور
        var protector = document.createElement('div');
        protector.style.position = 'relative';
        protector.style.display = 'inline-block';
        
        var overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '999';
        
        protector.appendChild(images[i].cloneNode(true));
        protector.appendChild(overlay);
        
        images[i].parentNode.replaceChild(protector, images[i]);
    }
}

// تنفيذ حماية الصور عند تحميل الصفحة
window.addEventListener('load', protectImages);

// حماية ضد فتح أدوات المطورين
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100 || 
        window.outerHeight - window.innerHeight > 100) {
        window.close();
        window.location = "about:blank";
    }
}, 1000);

// منع استخدام الكونسول
console.log = function(){};
console.warn = function(){};
console.error = function(){};
console.info = function(){};
