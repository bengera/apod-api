'use strict';

const imageContainer = document.querySelector('.image-container');
const explanationText = document.querySelector('.explanation');
const heading = document.querySelector('.heading');

const getImage = function(){
    return new Promise(function(resolve, reject){
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res =>{
            
            if(!res.ok){
                reject(new Error('Data not found'))
                return
            }
            return res.json();
        }).then(data => {
             resolve(data);
        }).catch((err) => console.log(`${err}`))
    })
}



getImage()
.then((data)=>{
    
    explanationText.textContent = data.explanation;
    heading.textContent = data.title
    const apodimg = `${data.url}`
    const img = document.createElement('img');
    img.classList.add('image')
;   img.src = apodimg;
    imageContainer.appendChild(img)


}).catch((err) => console.log(`${err}`));