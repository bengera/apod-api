'use strict';

const imageContainer = document.querySelector('.image-container');
const explanationText = document.querySelector('.explanation');
const heading = document.querySelector('.heading');

const getImage = function(){
    return new Promise(function(resolve, reject){
        fetch('https://api.nasa.gov/planetary/apod?api_key=jXbNGXKLCfz4KjuUikeHoDOXlAbKoApEXgGKsKH2')
        .then(res =>{
            console.log(res);
            if(!res.ok){
                reject(new Error('Data not found'))
                return
            }
            return res.json();
        }).then(data => {
            console.log(data);
            resolve(data);
        }).catch((err) => console.log(`${err}`))
    })
}



getImage()
.then((data)=>{
    console.log(`${data.date}:This is ${data.title}, ${data.copyright}`)
    explanationText.textContent = data.explanation;
    heading.textContent = data.title
    const apodimg = `${data.url}`
    const img = document.createElement('img');
    img.classList.add('image')
;   img.src = apodimg;
    imageContainer.appendChild(img)


}).catch((err) => console.log(`${err}`));