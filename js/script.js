
var images = ["img/home/img1.jpg", "img/home/img2.jpg", "img/home/img3.jpg", "img/home/img4.jpg"];
var currentImageIndex = 0;

function displayCurrentImage() {
    document.getElementById("mainImage").src = images[currentImageIndex];
}


function goToPreviousImage() {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex--;
    }
    displayCurrentImage();
}

function goToNextImage() {
    if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    displayCurrentImage();
}



document.getElementById("prevBtn").addEventListener("click", goToPreviousImage);
document.getElementById("nextBtn").addEventListener("click", goToNextImage);


displayCurrentImage();

