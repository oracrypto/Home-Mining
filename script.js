document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(image => imageObserver.observe(image));
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('');
});

function login() {
    let key = document.getElementById("activationKey").value;
    const errorMessage = document.getElementById("error-message");

    // المفاتيح المسموح بها
    const keyMappings = {
      "WXERBYUIMOPO": "https://crashpredr.blogspot.com/",
      "VEXRCTVYBUULOYD": "https://cxrctgtor.blogspot.com/",
      "XCVBNETRYFUYIBU": "https://ctvyhdictor.blogspot.com/",
      "OILGJETRYCTUV": "https://bjuvhytor.blogspot.com/",
      "ETRCYTVUIOPO": "https://gvhjor.blogspot.com/",
      "WXERBYUIMOPO": "https://SERDTFYor.blogspot.com/",
      "VB3TZLH9MZI2": "https://oracrypto.github.io/cryptoruit/",
      "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
      "NO69NFDD2MU": "https://ewrdf78.blogspot.com/",
      // ... (بقية المفاتيح)
    };

    // التحقق من المفتاح المدخل
    if (keyMappings[key]) {
        window.location.href = keyMappings[key]; // إعادة التوجيه إلى الرابط المرتبط بالمفتاح
    } else {
        errorMessage.textContent = "Invalid activation key";
        errorMessage.style.display = "block";
    }
}
document.addEventListener('click', function(event) {
    // تحقق إذا كان العنصر الذي تم الضغط عليه ليس حقل إدخال
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        // إلغاء التركيز عن حقل النص لإخفاء الكيبورد
        document.activeElement.blur();
    }
});
