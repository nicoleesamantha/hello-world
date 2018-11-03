var slideIndex = 0;
showSlides();
function showSlides() {

//var slides = [img1, img2, img3]
    var slides = document.getElementsByClassName("myimages");
//for loop breaks up into 3 loops
    //1st loop: i=0, slides[0] = img1
    //2nd loop: i=0, slides[0] = img2
    //3rd loop: i=0, slides[0] = img3
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
		slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

    
    
    
    
    
    
    
    
    
