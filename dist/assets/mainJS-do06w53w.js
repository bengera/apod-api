const t=document.querySelector(".image-container"),c=document.querySelector(".explanation"),i=document.querySelector(".heading"),l=function(){return new Promise(function(n,o){fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(e=>{if(console.log(e),!e.ok){o(new Error("Data not found"));return}return e.json()}).then(e=>{console.log(e),n(e)}).catch(e=>console.log(`${e}`))})};l().then(n=>{console.log(`${n.date}:This is ${n.title}, ${n.copyright}`),c.textContent=n.explanation,i.textContent=n.title;const o=`${n.url}`,e=document.createElement("img");e.classList.add("image"),e.src=o,t.appendChild(e)}).catch(n=>console.log(`${n}`));
