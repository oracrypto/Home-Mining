function login() {
    let key = document.getElementById("activationKey").value;
    const errorMessage = document.getElementById("error-message");

    // دالة تشفير بسيطة (XOR)
    function simpleEncryptDecrypt(str, key = 123) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) ^ key);
        }
        return result;
    }

    // المفاتيح والروابط المشفرة
    const keyMappings = {
        "B1O0eZPaVQ==": "7sT9Hfv63gsnLkFyDqaZ",  // WVBB5Y9NW5Y12 -> https://oracrypto.github.io/2Block/
        "V2VnLCY8S6==": "bTLd6P03htWqxAaWRBdj",  // BVZCNUAET4TG8 -> https://oracrypto.github.io/4Block/
        "b3pOwQ9Rsvzv": "8dF2dHpOT17Tn",         // VSEUIONT89Y6Q -> https://oracrypto.github.io/cryptoruit/
        "wKmR4Z8Jk==": "Xg5q5YZOTIs1TRF64Bvm",  // 5Y8KMVBOEHVY9 -> https://oracrypto.github.io/2Block/
        "Fgw2hzfg+8a==": "ew71xhZnB3tyVqTwNDqj", // XWEZCR6D4JIX93 -> https://oracrypto.github.io/4Block/
        "XhdoJ9Hq==": "fi8X1tFd1qWVObi2L4eq"  // KRVUH3FTYKR2 -> https://oracrypto.github.io/cryptoruit/
    };

    // فك تشفير المفتاح باستخدام XOR
    function decodeKey(encryptedKey) {
        return simpleEncryptDecrypt(encryptedKey);
    }

    // فك تشفير الرابط المقابل للمفتاح
    const decodedKey = decodeKey(key);

    if (keyMappings[decodedKey]) {
        const decodedUrl = simpleEncryptDecrypt(keyMappings[decodedKey]);
        window.location.href = decodedUrl;  // إعادة توجيه المستخدم إلى الرابط المشفر
    } else {
        errorMessage.textContent = "Invalid activation key";
        errorMessage.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        // Your logic for active elements
    }
});
