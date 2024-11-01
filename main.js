'use strict';

const imageContainer = document.querySelector('.image-container');


const getImage = function(){
    return new Promise(function(resolve, reject){
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res =>{
            console.log(res);
        })
    })
}


getImage();