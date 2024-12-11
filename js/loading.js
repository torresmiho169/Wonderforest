document.addEventListener("DOMContentLoaded", function () {
    const loadingDiv = document.querySelector(".loading");
    
    setTimeout(() => {
        loadingDiv.style.height = "0"; 
        loadingDiv.style.overflow = "hidden"; 
    }, 3500); 
});
