document.addEventListener("DOMContentLoaded", ()=>{
    const htmlCollection_ElementsByClassName = document.getElementsByClassName('heart');
    // btn.addEventListener("click", ()=> {
    //     const htmlElement = document.getElementById('heart');
    //     htmlElement.classList.toggle('bg-color-green');
    //     // htmlElement.classList.add('bg-color-green');

    //     //  htmlElement.classList.contains('bg-color-green') ? htmlElement.classList.remove('bg-color-green') : htmlElement.classList.add("bg-color-green"); 

    //     //  if ( htmlElement.classList.contains('bg-color-green')) {
    //     //     htmlElement.classList.remove('bg-color-green')
    //     //  } else {
    //     //     htmlElement.classList.add("bg-color-green")
    //     //  }

    // })

    const htmlCollection_QueryAll = document.querySelectorAll('p');
    const htmlElement_Query = document.querySelector('p');
    // const btn = document.querySelector('.make-green-btn');


    const bm2_btn =  document.querySelector('.bM-2-btn');
    bm2_btn.addEventListener("click", ()=>{
        const bm2 = document.querySelector('.boxModel2');
        bm2.classList.toggle('bg-tomato');
        const bm2_paragraph = document.querySelector('.bm-2-paragraph');
        bm2_paragraph.innerText = "custom text";

    });
    const bm3_btn =  document.querySelector('.bM-3-btn');
    bm3_btn.addEventListener("click", ()=>{
        const bm3 = document.querySelector('.boxModel3');
        bm3.classList.toggle('bg-aqua');
        const exampleAnchor = document.querySelector('a');
        exampleAnchor.href="https://www.theodinproject.com/";
    });
    const bm4_btn =  document.querySelector('.bM-4-btn');
    bm4_btn.addEventListener("click", ()=>{
        const bm4 = document.querySelector('.boxModel4');
        bm4.classList.toggle('bg-lime');
        const exampleImg = document.getElementById('main_Img');
        exampleImg.src = 'https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    });

    // btn.addEventListener("click", changesBgToGreen(htmlElement));
    
})

