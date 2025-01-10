const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function nextImage() {
    idx++;
    if (idx >= img.length) {
        idx = 0
    }
    
    imgs.style.transform = `translateX(-${idx * 500}px)`
}
