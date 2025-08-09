
  function login() {let key = document.getElementById("activationKey").value;
 const errorMessage = document.getElementById("error-message");  const keyMappings = {
//demo keys
 

   
//old keys 

  
"DEMOKEY2025PK19": "https://oracrypto.github.io/demo/", "DEMOKEY2025BD6D": "https://oracrypto.github.io/demo/",
"MDO62BXL92NXO": "https://oracrypto.github.io/1b/", "NDOS52NCOS73H": "https://oracrypto.github.io/2b/", "NDO63NFPW10DK": "https://oracrypto.github.io/4b/",
 "BXO38NXOSWPP20": "https://oracrypto.github.io/6b/",


//new keys
  
  "CJYZJ47JOECAM": "https://oracrypto.github.io/2b/", "": "https://oracrypto.github.io/4b/",
"": "https://oracrypto.github.io//", "": "https://oracrypto.github.io//",
            "": "https://oracrypto.github.io/WE/",







  
            "": ""

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




