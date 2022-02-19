$(document).ready( function(){ 

    imgList = [
    "../img/WhatsApp Image 2021-06-23 at 9.15.44 AM (1).jpeg", 
    "../img/WhatsApp Image 2021-06-23 at 9.15.44 AM (2).jpeg",
    "../img/WhatsApp Image 2021-06-23 at 9.15.44 AM (3).jpeg",
    "../img/WhatsApp Image 2021-06-23 at 9.15.44 AM (4).jpeg",
    "../img/WhatsApp Image 2021-06-23 at 9.15.44 AM.jpeg"
]

altList=[
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
]

const papper = document.querySelector('.wallpappers')


papper.addEventListener('click', function(e){

    var curr=e.target.getAttribute('src')

    imgList.forEach((element, idx) => {
        if (element == curr) {
            ++idx;
            idx%=5;
            e.target.setAttribute('src', imgList[idx])
    e.target.setAttribute('alt', altList[idx])
    return;
        }

        
    });

    

})


})