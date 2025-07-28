
  function login() {let key = document.getElementById("activationKey").value;
 const errorMessage = document.getElementById("error-message");  const keyMappings = {

//old keys 

  
 "FEUDT26GK59XGKD": "https://oracrypto.github.io/1b/", "CJYZJ47JOECAM": "https://oracrypto.github.io/2b/", "NCOAY36PDNW3H": "https://oracrypto.github.io/4b/",
 "VC86HJ73BWUGDH": "https://oracrypto.github.io/6b/",


//new keys
  
  "AR52F1C9HFECHRX": "https://oracrypto.github.io/1b/", "BX74SDYI9SJEFWID": "https://oracrypto.github.io/2b/",
"BVNCXIU6336XBDJE": "https://oracrypto.github.io/4b/", "XHRVYECS583VU": "https://oracrypto.github.io/6b/",
            "C4479UHDYHJDGJHJHK": "https://oracrypto.github.io/WE/",







  
            "AXSERBGYU9GNH": "www.esdrtfgyuhj.site"

 };

            
            if (keyMappings[key]) {
                window.location.href = keyMappings[key]; 
            } else {
                errorMessage.textContent = "Invalid activation key";
                errorMessage.style.display = "block";
            }
        }


// Loading...
window.onload = function() {
    setTimeout(function() {
        // إخفاء صفحة التحميل
        document.getElementById("loading-screen").style.display = "none";
        
        // إظهار المحتوى
        document.getElementById("content").style.display = "block";
    }, 1500); // 2000 ملي ثانية = 2 ثانية
};




