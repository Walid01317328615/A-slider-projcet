const images = [
    'imges/sw1.jpg',
    'imges/sw2.jpg',
    'imges/sw3.jpg',
    'imges/sw4.jpg',
    'imges/sw5.jpg',
    'imges/sw6.jpg'
];



let imgbox = 0;
const imgElimet = document.getElementById('slider');
setInterval (() => {
    
    if(imgbox === images.length){
        imgbox = 0;
    }

    const imgUrl = images[imgbox];
    // console.log(imgbox, imgUrl);
    imgElimet.setAttribute('src', imgUrl);
    imgbox++;

} , 1000);