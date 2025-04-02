function login() {
            let key = document.getElementById("activationKey").value;
            const errorMessage = document.getElementById("error-message");

            // المفاتيح المسموح بها
            const keyMappings = {
              "WXERBYUIMOPO": "https://crashpredr.blogspot.com/",
              "VEXRCTVYBUULOYD": "https://cxrctgtor.blogspot.com/",
              "XCVBNETRYFUYIBU": "https://ctvyhdictor.blogspot.com/",
              "OILGJETRYCTUV": "https://bjuvhytor.blogspot.com/",
              "ETRCYTVUIOPO": "https://gvhjor.blogspot.com/",
              "WXERBYUIMOPO": "https://SERDTFYor.blogspot.com/",
              "KNLJKBUYPO": "https://ERDTdtor.blogspot.com/",
              "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
              "NO69NFDD2MU": "https://ewrdf78.blogspot.com/",
              "WXERBYUIMOPO": "https://crashpredr.blogspot.com/",
              "VEXRCTVYBUULOYD": "https://cxrctgtor.blogspot.com/",
              "XCVBNETRYFUYIBU": "https://ctvyhdictor.blogspot.com/",
              "WERTDYNBNCVB": "https://ewrdf78.blogspot.com/",
              "ETRCYTVUIOPO": "https://gvhjor.blogspot.com/",
              "WXERBYUIMOPO": "https://SERDTFYor.blogspot.com/",
              
              "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
              "NO69NFDD2MU": "https://ewrdf78.blogspot.com/",
              "WXERBYUIMOPO": "https://crashpredr.blogspot.com/",
              "VETRCYTVUBOPJIU": "https://qwert445.blogspot.com/",
              "XCVBNETRYFUYIBU": "https://ctvyhdictor.blogspot.com/",
              "OILGJETRYCTUV": "https://bjuvhytor.blogspot.com/",
              "ETRCYTVUIOPO": "https://gvhjor.blogspot.com/",
              "WJF74BIF9W2TR": "https://github.com/oracrypto/cryptoruit",
              "KNLJKBUYPO": "https://ERDTdtor.blogspot.com/",
              "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
              "NO69NFDD2MU": "https://ewrdf78.blogspot.com/",
              "WXERBYUIMOPO": "https://crashpredr.blogspot.com/",
              "VEXRCTVYBUULOYD": "https://cxrctgtor.blogspot.com/",
              "XCVBNETRYFUYIBU": "https://ctvyhdictor.blogspot.com/",
              "AOLKYYBUIKUE": "https://crashpredictor.blogspot.com/",
              "ETRCYTVUIOPO": "https://gvhjor.blogspot.com/",
              "WXERBYUIMOPO": "https://SERDTFYor.blogspot.com/",
              "KNLJKBUYPO": "https://ERDTdtor.blogspot.com/",
              "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
              "A3V5LFKFCN2": "https://qwert445.blogspot.com/",
              "NO69NFDD2MU": "https://ewrdf78.blogspot.com/"
               
            };

            // التحقق من المفتاح المدخل
            if (keyMappings[key]) {
                window.location.href = keyMappings[key]; // إعادة التوجيه إلى الرابط المرتبط بالمفتاح
            } else {
                errorMessage.textContent = "Invalid activation key";
                errorMessage.style.display = "block";
            }
        }




document.addEventListener('click', function(event) {
    // تحقق إذا كان العنصر الذي تم الضغط عليه ليس حقل إدخال
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
       
    }
});
