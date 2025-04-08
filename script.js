function login() {
    let key = document.getElementById("activationKey").value;
    const errorMessage = document.getElementById("error-message");

    // ملاحظة: كل من المفتاح والرابط مشفران هنا
    const encryptedKeyMappings = {
        "8f4ebc3d8edbb6cdbb": "9c7d3d8f76a3e98d7a",  // الرابط المشفر
        "f5bce74a89a42db542": "8a3d5c9d8a22f8a4c6",  
        "90d7e15f925db9b37d": "f6a92b23a44b8d4f1c",        
        "fae07db3d8e8d9136f": "7a34c9d1a35fbe76d3",  
        "ab79f77b9d1c3a7e88": "b35d9f7d3e8d62f4f2",  
        "7be98bca16785e09fd": "ff9c2d3f6a2e88d5d2"
    };

    // تشفير المفتاح المدخل
    const encryptedKey = encryptKey(key);

    // فك تشفير الرابط بناءً على المفتاح المشفر
    if (encryptedKeyMappings[encryptedKey]) {
        const encryptedLink = encryptedKeyMappings[encryptedKey];
        const link = decryptLink(encryptedLink);
        window.location.href = link;
    } else {
        errorMessage.textContent = "Invalid activation key";
        errorMessage.style.display = "block";
    }
}

function encryptKey(key) {
    // دالة تشفير للمفتاح
    return key.split('').map(char => char.charCodeAt(0).toString(16)).join('');
}

function decryptLink(encryptedLink) {
    // دالة لفك تشفير الرابط
    let decryptedLink = '';
    for (let i = 0; i < encryptedLink.length; i += 2) {
        decryptedLink += String.fromCharCode(parseInt(encryptedLink.substr(i, 2), 16));
    }
    return decryptedLink;
}

document.addEventListener('click', function(event) {
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        // يمكن إضافة إجراءات أخرى عند التفاعل مع الحقول النصية.
    }
});
