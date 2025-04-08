// إضافة مكتبة CryptoJS لتشفير وفك تشفير البيانات
// لتحميل هذه المكتبة في HTML، يمكنك إضافتها في <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1-crypto-js.min.js"></script>

function login() {
    let key = document.getElementById("activationKey").value;
    const errorMessage = document.getElementById("error-message");

    // المفاتيح والروابط المشفرة باستخدام AES (التشفير القوي)
    const keyMappings = [
        { encryptedKey: "U2FsdGVkX1+VRy3QsZXjlw==", encryptedUrl: "U2FsdGVkX19yAFM93lE4+V66A34sh0dsw==" },  // مثال: WVBB5Y9NW5Y12 -> https://oracrypto.github.io/2Block/
        { encryptedKey: "U2FsdGVkX1/yrRYt7qvXjw==", encryptedUrl: "U2FsdGVkX1+39KjpU1fVRR4XgDsSak74w==" },  // مثال: BVZCNUAET4TG8 -> https://oracrypto.github.io/4Block/
        { encryptedKey: "U2FsdGVkX1+E5O6OHMkwrg==", encryptedUrl: "U2FsdGVkX1+4SyZodlwp/sr64FcVUpmfV1==" },  // مثال: VSEUIONT89Y6Q -> https://oracrypto.github.io/cryptoruit/
        { encryptedKey: "U2FsdGVkX19aaVBYdG1Lbw==", encryptedUrl: "U2FsdGVkX19fSOYMYOThdRbdzDsJzNIk9==" },  // مثال: 5Y8KMVBOEHVY9 -> https://oracrypto.github.io/2Block/
        { encryptedKey: "U2FsdGVkX1+BFKpCpH0c6A==", encryptedUrl: "U2FsdGVkX1+JQdPh1p7Jd1HL7dkkgCVy7==" },  // مثال: XWEZCR6D4JIX93 -> https://oracrypto.github.io/4Block/
        { encryptedKey: "U2FsdGVkX1+GgFjxBO8Z1g==", encryptedUrl: "U2FsdGVkX1+pXZuqVmF+oOKPpw2uyLZVG==" }   // مثال: KRVUH3FTYKR2 -> https://oracrypto.github.io/cryptoruit/
    ];

    // دالة لفك تشفير باستخدام AES
    function decryptData(encryptedData) {
        var key = CryptoJS.enc.Utf8.parse('1234567890abcdef');  // المفتاح المستخدم للتشفير والفك
        var decrypted = CryptoJS.AES.decrypt(encryptedData, key, { iv: CryptoJS.enc.Utf8.parse('1234567890abcdef') });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    // فك تشفير المفتاح المدخل
    const decodedKey = decryptData(key);

    // البحث عن الرابط المقابل للمفتاح
    const mapping = keyMappings.find(mapping => decryptData(mapping.encryptedKey) === decodedKey);

    if (mapping) {
        // فك تشفير الرابط وإعادة التوجيه إليه
        const decodedUrl = decryptData(mapping.encryptedUrl);
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
