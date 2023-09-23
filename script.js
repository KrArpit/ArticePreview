const shareBtn = document.querySelector('.share-button');
const shareContent = document.querySelector(".footer-share-content");

shareContent.style.display = 'none';
shareBtn.addEventListener("click", ()=>{
    shareBtn.classList.toggle("active");

    shareContent.style.display = 'none';
    if(shareBtn.classList.contains("active")){
        shareContent.style.display = 'block';
    }
});
