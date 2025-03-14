let access_key = "9c1eb61e7bb40bfc3b1ab38dd993f9374d3fc00b";
let btn = document.getElementById("btn");
let desc = document.getElementById("desc");
let result;

async function fetchEmoji() {
    let response = await fetch(`https://emoji-api.com/emojis?access_key=9c1eb61e7bb40bfc3b1ab38dd993f9374d3fc00b`);
    result = await response.json();//returns an array of objects
}

fetchEmoji();

btn.addEventListener('click',()=>{
    let ranNum = Math.floor(Math.random()*result.length);
    btn.innerHTML = result[ranNum].character;
    btn.classList.remove("emoji1");
    btn.setAttribute("class","emoji2");

    let para1 = result[ranNum].unicodeName.split('.');
    let para2 = para1[1].substring(2,para1[1].length);
    desc.innerHTML = para2;
})