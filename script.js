const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
const container=document.querySelector('.elementcontainer');
const imagediv=document.querySelector('.imagediv');
container.addEventListener('mouseenter', function(){
imagediv.style.display="block";
});
container.addEventListener('mouseleave', function(){
imagediv.style.display="none";
});
const images=document.querySelectorAll('.element');
images.forEach(function(image){
    image.addEventListener('mouseenter',function(){
        let img=image.getAttribute("data-image");
        console.log(img);
        imagediv.style.backgroundImage=`url(${img})`;
    })
})