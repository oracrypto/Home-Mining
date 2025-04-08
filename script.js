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
        "UVAaUmpDdw==": "XU8cXGdYcD0==" ,  // WVBB5Y9NW5Y12 -> https://oracrypto.github.io/2Block/
        "YFlECz5IEg==": "VU8oLg==",  // BVZCNUAET4TG8 -> https://oracrypto.github.io/4Block/
        "ZG19Vlfse8==": "Z9sdfkl93==", // VSEUIONT89Y6Q -> https://oracrypto.github.io/cryptoruit/
        "FiHFI33Q==": "DsviQD9==", // 5Y8KMVBOEHVY9 -> https://oracrypto.github.io/2Block/
        "BsdqhsdfC43==": "fdpoIiQ==",  // XWEZCR6D4JIX93 -> https://oracrypto.github.io/4Block/
        "fDEgdA==": "vb==sdfl11", // KRVUH3FTYKR2 -> https://oracrypto.github.io/cryptoruit/
    };

    // فك تشفير المفتاح
    function decodeKey(encryptedKey) {
        return simpleEncryptDecrypt(encryptedKey);
    }

    const decodedKey = decodeKey(key);

    // فك تشفير الرابط المقابل للمفتاح
    if (keyMappings[decodedKey]) {
        const decodedUrl = simpleEncryptDecrypt(keyMappings[decodedKey]);
        window.location.href = decodedUrl;
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
