function login() {
            let key = document.getElementById("activationKey").value;
            const errorMessage = document.getElementById("error-message");

           
            const keyMappings = {
            "XRDCTGVYBUHJNI": "https://oracrypto.COM",
            "ZXS4CD5FVU6BG": "TBYUNMILCVGBHJN",
            "AXSERBGYU9GNH": "XECRTVBYUNIM",










































              "WVBB5Y9NW5Y12": "https://oracrypto.github.io/2Block/",
              "BVZCNUAET4TG8": "https://oracrypto.github.io/4Block/",
              "VSEUIONT89Y6Q": "https://oracrypto.github.io/cryptoruit/",        
              "5Y8KMVBOEHVY9": "https://oracrypto.github.io/2Block/",
              "XWEZCR6D4JIX93": "https://oracrypto.github.io/4Block/",
              "KRVUH3FTYKR2": "https://oracrypto.github.io/cryptoruit/"

















              
               
            };

            // التحقق من المفتاح المدخل
            if (keyMappings[key]) {
                window.location.href = keyMappings[key]; // إعادة التوجيه إلى الرابط المرتبط بالمفتاح
            } else {
                errorMessage.textContent = "Invalid activation key";
                errorMessage.style.display = "block";
            }
        }

window.onload = function() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        const isTelegram = userAgent.toLowerCase().includes("telegram");

      if (!isTelegram) {
          window.location.href = "https://t.me/rewallets_bot";
      }
      }


document.addEventListener('click', function(event) {
    // تحقق إذا كان العنصر الذي تم الضغط عليه ليس حقل إدخال
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
       
    }
});
