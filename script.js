function login() {
            let key = document.getElementById("activationKey").value;
            const errorMessage = document.getElementById("error-message");

           
            const keyMappings = {
            









              "WVBB5Y9NW5Y12": "https://oracrypto.github.io/2Block/",
              "BVZCNUAET4TG8": "https://oracrypto.github.io/4Block/",
              "VSEUIONT89Y6Q": "https://oracrypto.github.io/cryptoruit/",        
              "5Y8KMVBOEHVY9": "https://oracrypto.github.io/2Block/",
              "XWEZCR6D4JIX93": "https://oracrypto.github.io/4Block/",
              "KRVUH3FTYKR2": "https://oracrypto.github.io/cryptoruit/"
















































              
               
            };

            
            if (keyMappings[key]) {
                window.location.href = keyMappings[key]; 
            } else {
                errorMessage.textContent = "Invalid activation key";
                errorMessage.style.display = "block";
            }
        }




document.addEventListener('click', function(event) {
   
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
       
    }
});
