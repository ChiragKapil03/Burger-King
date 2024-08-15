let burgerSelect = document.getElementById('Burger')
let friesSelect = document.getElementById('Fries')
let drinksSelect = document.getElementById('Drinks')
let screen = document.getElementById('dynamic');
let orderBtn = document.getElementById('order');
let orderNo = document.getElementById('orderNo');
let reSelectBtn = document.getElementById('change');

reSelectBtn.addEventListener('click', ()=>{
    location.reload();
})

let burgerSel = false;
let friesSel = false;
let drinksSel = false;
burgerSelect.addEventListener('click',()=>{
    burgerSel=true;
})
friesSelect.addEventListener('click',()=>{
    friesSel=true;
})
drinksSelect.addEventListener('click',()=>{
    drinksSel=true;
})


orderBtn.addEventListener('click',function(){
    if(burgerSel && friesSel && drinksSel){
        let img = document.createElement('img');
        img.src='https://cdn.doordash.com/media/photosV2/98a758c2-a74b-46ad-a584-1809c17cef08-12dadbc3-c7aa-4b25-a58e-afa1d0ec214d-retina-large.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }else if(burgerSel && friesSel){
        let img = document.createElement('img');
        img.src='https://content3.jdmagicbox.com/v2/comp/mumbai/g5/022pxx22.xx22.200930090259.i6g5/catalogue/burger-king-vile-parle-east-mumbai-burger-king-0zoifxohyj.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }else if(burgerSel && drinksSel){
        let img = document.createElement('img');
        img.src='https://www.shutterstock.com/image-photo/burger-fries-coke-on-wood-600nw-1798650394.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }else if(friesSel && drinksSel){
        let img = document.createElement('img');
        img.src='https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/burger-king-soda-fries.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    //solo
    else if(friesSel ){
        let img = document.createElement('img');
        img.src='https://qph.cf2.quoracdn.net/main-qimg-696e125bfd345dac55efbd038141226b-lq';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    else if( drinksSel){
        let img = document.createElement('img');
        img.src='https://s3-media0.fl.yelpcdn.com/bphoto/qccS-fgejAI1OzQUEx0jzw/348s.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    else if(burgerSel){
        let img = document.createElement('img');
        img.src='https://assets3.thrillist.com/v1/image/3057819/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg';
        img.style.cssText=`
            height:100%;
            width:100%;
        `;
        screen.appendChild(img);
        orderNo.innerText = `Order No: ${randomNumber()}`;
        burgerSel=false;
        friesSel=false;
        drinksSel=false;
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
})

function randomNumber(){
    let a = Math.ceil(100+Math.random()*1000);
    return a;
}

console.log(randomNumber());
