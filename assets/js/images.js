// window.addEventListener('scroll', function() {
//     var images = document.getElementsByClassName('image'); 
//     var windowHeight = window.innerHeight; 

//     for (var i = 0; i < images.length; i++) {
//         var image = images[i];
//         var positionFromTop = image.getBoundingClientRect().top;

//         if (positionFromTop - windowHeight <= 0) {
//             image.classList.remove('hidden');
//             image.classList.add('visible');
//         } else {
//             image.classList.remove('visible');
//             image.classList.add('hidden');
//         }
//     }
// })