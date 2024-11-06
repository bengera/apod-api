'use strict';

const imageContainer = document.querySelector('.image-container');
const explanationText = document.querySelector('.explanation');

const getImage = function(){
    return new Promise(function(resolve, reject){
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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



// date
// explanation
//title
//url
//copyright

getImage()
.then((data)=>{
    console.log(`${data.date}:This is ${data.title}, ${data.copyright}`)
    explanationText.textContent = data.explanation;
    const apodimg = `${data.url}`
    const img = document.createElement('img');
    img.src = apodimg;
    imageContainer.appendChild(img)


})