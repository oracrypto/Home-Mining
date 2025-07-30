
  function login() {let key = document.getElementById("activationKey").value;
 const errorMessage = document.getElementById("error-message");  const keyMappings = {

//old keys 

  
 "": "https://oracrypto.github.io//", "": "https://oracrypto.github.io//", "": "https://oracrypto.github.io//",
 "": "https://oracrypto.github.io//",


//new keys
  
  "": "https://oracrypto.github.io//", "": "https://oracrypto.github.io//",
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




