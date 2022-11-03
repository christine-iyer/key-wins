const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentImageIndex = 0; // current available index this must be in the global space. what image is currently showing by setting a global index counter variable:
let previousImgIndex = 0;
const images = document.querySelectorAll('.image')
next.addEventListener('click', (event) => {
     // Inside the event listener for our "next" class, set previousImgIndex to currentImgIndex, and increment currentImgIndex by 1.
     previousImgIndex = currentImageIndex;     
//      Next, inside the event listener for our "next" class, select the currently showing carousel image with:
// images[previousImageIndex]
if (currentImageIndex < images.length - 1){
     currentImageIndex +=1
     } else {
          currentImageIndex = 0;
     }
     images[previousImgIndex].style.display = 'none';
     images[currentImageIndex].style.display= 'block';
})
prev.addEventListener('click', (event)=> {
     previousImgIndex=currentImageIndex;
     if (currentImageIndex > 0) {
          currentImageIndex -= 1;     
     } else {
          currentImageIndex = images.length -1
}
images[previousImgIndex].style.display = 'none';
     images[currentImageIndex].style.display= 'block';
})
