function login() {
            let key = document.getElementById("activationKey").value;
            const errorMessage = document.getElementById("error-message");

           
            const keyMappings = {
            "XRDCTGVYBUHJNI": "https://oracrypto.COM",
            "ZXS4CD5FVU6BG": "TBYUNMILCVGBHJN",
            "AXSERBGYU9GNH": "XECRTVBYUNIM",




























































              
               
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
