function login() {
    let key = document.getElementById("activationKey").value;
    const errorMessage = document.getElementById("error-message");

    const keyMappings = {
        "V1ZXQjU5WTIZDQ==": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvLzJCbG9jay8=", 
        "QlZaQ05VQUVUNFRHODg=": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvLzRCbG9jay8=", 
        "VlNFVUlPTlQ4OVk2UQ==": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvL2NyeXB0b3J1aXQv", 
        "NXk4S01WQk9FSFZZOQ==": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvLzJCbG9jay8=",
        "WFdFWkNSNkQ0SklYOTM=": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvLzRCbG9jay8=",
        "S1JWVUgzRlRYS1I=": "aHR0cHM6Ly9vcmFjeWlwdG8uZ2l0aHViLmlvL2NyeXB0b3J1aXQv" 
    };

   
    function decodeBase64(encoded) {
        return atob(encoded);
    }

    const decodedKey = decodeBase64(key);

    if (keyMappings[decodedKey]) {
        window.location.href = decodeBase64(keyMappings[decodedKey]); 
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
