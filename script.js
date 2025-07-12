
  function login() {let key = document.getElementById("activationKey").value;
 const errorMessage = document.getElementById("error-message");  const keyMappings = {

//old keys 

  
 "567VCMWEOHWIG": "https://oracrypto.github.io/1b/", "BOSVRTTHB8CD": "https://oracrypto.github.io/2b/", "VCI7TGH29XHQGTE": "https://oracrypto.github.io/4b/",
 "VC86HJ73BWUGDH": "https://oracrypto.github.io/6b/",


//new keys
  
  "AR52F1C9HFECHRX": "https://oracrypto.github.io/1b/", "BX74SDYI9SJEFWID": "https://oracrypto.github.io/2b/",
"BVNCXIU6336XBDJE": "https://oracrypto.github.io/4b/", "VCNSXJU3YCHD83": "https://oracrypto.github.io/6b/",
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
    }, 2200); // 2000 ملي ثانية = 2 ثانية
};




