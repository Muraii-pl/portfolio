const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.navigation')
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active')
};
hamburger.addEventListener('click',handleClick);

// const progress = document.querySelectorAll('.about_me__progress--value');
// progress.forEach((element) => {
//     element.style.width = element.innerText;
//     if(element.style.width == "0%"){
//         element.style.background = "#fff";
//         element.style.color = "#000"
//         element.style.width = "100%";
//         element.style.justifyContent = "flex-start"
//         element.style.paddingLeft = "5px"
//     }
// });

