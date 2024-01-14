// Left top Slayding circle
let elMainProduct = document.querySelector('.sliding-decorations__main-img')
let elMainProductName = document.querySelector('.sliding-decorations__name')
let elBlob = document.querySelector('.sliding-decorations__blob')

let productsImage = [{
                    url:'https://i.1.creatium.io/disk2/8e/84/e7/954976fd0b391941a360fe23c601948b4f/unnamed_1.jpg',
                    name: 'Епископ на отдыхе'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/5e/dc/c8/1109a134aee0288cfe5fb829d251a86a3f/6.jpg',
                        name: 'Шоры'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/36/19/d9/97ffce33c4ee8e087448f05ba74b905088/1.jpg',
                        name: 'Карнавалы Санкт-Петербурга'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/ce/f0/28/0a3a3f909dbce0038cf8b6596f95ec005d/28.jpg',
                        name: 'Взрослый Индиго'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/82/d2/0c/91e30f24b14839ba51a880da16cfbb4422/109.jpg',
                        name: 'Panorame d\'Eze'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/8e/df/d6/c33e12ec7224f667431005bd5de595e251/80.jpg',
                        name: 'Earl Sweatshirt'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/59/3d/39/4ffd300bbcfc0ec870175673c5ce9ef3c5/1.jpg',
                        name: 'Bois Graves de ...'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/72/df/80/eff336a9f01a3458a0d1b12d7c1a2ed974/28.jpg',
                        name: 'Череп с костями'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/54/0b/44/3f1262887dc61b9f2de4f3113309fbeb31/15.jpg',
                        name: 'Пара Арлекинов'
                    },
                    {
                        url:'https://i.1.creatium.io/disk2/47/13/3e/28d3adb26a39f9399b08a769fd1e5ba6c7/10.jpg',
                        name: 'Начало вёсны'
                    }]


let elNextButton = document.querySelector('.slider__redactor__next-btn')
let productIndex = 0
let blobRotation = 0

// Start, to be not empty
elMainProduct.setAttribute('src', productsImage[productIndex].url)
elMainProduct.classList.add('sliding-decorations__main-img-in')

elMainProductName.textContent = productsImage[productIndex].name

productIndex += 1
// Start-ends

elNextButton.addEventListener('click', function () {
    let elMainProductUrl =  productsImage[productIndex].url
    elMainProduct.classList.add('sliding-decorations__main-img-out')
    elMainProduct.style.opacity = '0'

    setTimeout(function(){
        elMainProduct.setAttribute('src', elMainProductUrl)
    }, 400)    
    setTimeout(function(){
        elMainProduct.style.opacity = '1'
        elMainProduct.classList.remove('sliding-decorations__main-img-out')
    }, 600)     
    
    elMainProductName.classList.add('sliding-decorations__name-anim') 
    let elMainProductNameText =  productsImage[productIndex].name
    setTimeout(function(){
        elMainProductName.textContent = elMainProductNameText
    }, 400)
    setTimeout(function(){
        elMainProductName.classList.remove('sliding-decorations__name-anim') 
    }, 800)
    
    elBlob.style.transform = `rotate(${blobRotation += 40}deg)`
    elBlob.style.filter = `hue-rotate(${blobRotation += 40}deg)`
    
    productIndex += 1

    if (productIndex >= 10) {
        productIndex = 0
    }
})


// Slader picture

// let elPictureInfo = document.querySelectorAll('.slider__right__product-info')

// let elPictureInfoArr = [{
//                         first : {name: 'Епископ...',
//                                 url: 'https://i.1.creatium.io/disk2/8e/84/e7/954976fd0b391941a360fe23c601948b4f/unnamed_1.jpg',
//                                 cost: '180.000'},
//                         second: {name: 'Хозяин ...',
//                                 url: 'https://i.1.creatium.io/disk2/b1/87/54/f09a74b260799cea4443b8766c93e76eb6/3.jpg',
//                                 cost: '220.000'},
//                         third: {name: 'Натюрмо...',
//                                 url: 'https://i.1.creatium.io/disk2/dc/b9/ee/34c8f197e4b5d0038ad8f9c6f0e17f48b7/4.jpg',
//                                 cost: '220.000'}
//                         },
//                         {
//                             first : {name: 'Шоры',
//                                     url: 'https://i.1.creatium.io/disk2/5e/dc/c8/1109a134aee0288cfe5fb829d251a86a3f/6.jpg',
//                                     cost: '175.000'},
//                             second: {name: 'Николин...',
//                                     url: 'https://i.1.creatium.io/disk2/87/27/d0/96b70440b01718181588a2fd67592e3ee3/39.jpg',
//                                     cost: '0'},
//                             third: {name: 'Учитель',
//                                     url: 'https://i.1.creatium.io/disk2/e7/a5/d5/4065aa7ab5be8d5470fb516fea634c86a0/3.jpg',
//                                     cost: '175.000'}
//                         },
//                         {
//                             first : {name: 'Карнава...',
//                                     url: 'https://i.1.creatium.io/disk2/36/19/d9/97ffce33c4ee8e087448f05ba74b905088/1.jpg',
//                                     cost: '80.000'},
//                             second: {name: 'Карнава...',
//                                     url: 'https://i.1.creatium.io/disk2/f1/80/6e/85fe92659123e89cb80a9514538a83b54f/16.jpg',
//                                     cost: '16.000'},
//                             third: {name: 'Крысёно...',
//                                     url: 'https://i.1.creatium.io/disk2/65/f3/43/0b8d870aca53cc08278da8dd0b33e9d31f/36.jpg',
//                                     cost: '160.000'}
//                         },
//                         {
//                             first : {name: 'Взрослы...',
//                                     url: 'https://i.1.creatium.io/disk2/ce/f0/28/0a3a3f909dbce0038cf8b6596f95ec005d/28.jpg',
//                                     cost: '1.500'},
//                             second: {name: '2000',
//                                     url: 'https://i.1.creatium.io/disk2/8d/7b/cf/8ea4cdcf51191cb4db137981aefc98c663/21.jpg',
//                                     cost: '1.000'},
//                             third: {name: 'Золотой...',
//                                     url: 'https://i.1.creatium.io/disk2/19/09/cd/737aee8d8e0f2e4f9ec773262f2969ab1d/18.jpg',
//                                     cost: '0'}
//                         },
//                         {
//                             first : {name: 'Panoram...',
//                                     url: 'https://i.1.creatium.io/disk2/82/d2/0c/91e30f24b14839ba51a880da16cfbb4422/109.jpg',
//                                     cost: '780.000'},
//                             second: {name: 'Ялта. До...',
//                                     url: 'https://i.1.creatium.io/disk2/bf/29/28/b13d1889bd1714ff17eefa025aad9747da/104.jpg',
//                                     cost: '280.000'},
//                             third: {name: 'Деревен...',
//                                     url: 'https://i.1.creatium.io/disk2/de/c1/d4/c37ff4f8282d731e2d5ee0b9e901d5880e/100.jpg',
//                                     cost: '180.000'}
//                         },
//                         {
//                             first : {name: 'Портрет...',
//                                     url: 'https://i.1.creatium.io/disk2/8e/df/d6/c33e12ec7224f667431005bd5de595e251/80.jpg',
//                                     cost: '70.000'},
//                             second: {name: 'Портрет...',
//                                     url: 'https://i.1.creatium.io/disk2/cd/4c/1b/f62c262250e24238dfde122bde0cc28f40/unnamed.jpg',
//                                     cost: '0'},
//                             third: {name: 'Портрет...',
//                                     url: 'https://i.1.creatium.io/disk2/7a/29/cf/39a5b327ea475e6e261dde3fe90d578832/79.jpg',
//                                     cost: '70.000'}
//                         },
//                         {
//                             first : {name: 'Bois Gr...',
//                                     url: 'https://i.1.creatium.io/disk2/59/3d/39/4ffd300bbcfc0ec870175673c5ce9ef3c5/1.jpg',
//                                     cost: '45.000'},
//                             second: {name: 'Бюст же...',
//                                     url: 'https://i.1.creatium.io/disk2/7f/0a/99/431077387df64cbae9b1bb29c42d6dc251/53.jpg',
//                                     cost: '320.000'},
//                             third: {name: 'Лунатизм',
//                                     url: 'https://i.1.creatium.io/disk2/5a/71/4e/70b4e70922c7758a5c5cc35846247e5f5f/55.jpg',
//                                     cost: '270.000'}
//                         },
//                         {
//                             first : {name: 'Череп с...',
//                                     url: 'https://i.1.creatium.io/disk2/72/df/80/eff336a9f01a3458a0d1b12d7c1a2ed974/28.jpg',
//                                     cost: '300.000'},
//                             second: {name: 'Кентавр',
//                                     url: 'https://i.1.creatium.io/disk2/fd/a3/6b/a4e8664b0a7d3328134c10ee41666d7b28/43.jpg',
//                                     cost: '0'},
//                             third: {name: 'Маленьк...',
//                                     url: 'https://i.1.creatium.io/disk2/e5/89/45/d360587052e2f28d7c6e50229a0a8d5371/3.jpg',
//                                     cost: '0'}
//                         },
//                         {
//                             first : {name: 'Пара Ар...',
//                                     url: 'https://i.1.creatium.io/disk2/54/0b/44/3f1262887dc61b9f2de4f3113309fbeb31/15.jpg',
//                                     cost: '60.000'},
//                             second: {name: 'Философ...',
//                                     url: 'https://i.1.creatium.io/disk2/2f/00/29/9c1ce15834427531c55b15d3eadef0e712/1.jpg',
//                                     cost: '40.000'},
//                             third: {name: 'Ангел в...',
//                                     url: 'https://i.1.creatium.io/disk2/b7/95/0c/6b5369bd7a2e8768b179fe3a3dfd9f1d1e/5.jpg',
//                                     cost: '90.000'}
//                         },
//                         {
//                             first: {name: 'Начало ...',
//                                     url: 'https://i.1.creatium.io/disk2/47/13/3e/28d3adb26a39f9399b08a769fd1e5ba6c7/10.jpg',
//                                     cost: '0'},
//                             second: {name: 'Букет н...',
//                                     url: 'https://i.1.creatium.io/disk2/9f/c5/d3/02f77fb93b7f39835ad24a7103cab47300/9.jpg',
//                                     cost: '0'},
//                             third: {name: 'Ангелы ...',
//                                     url: 'https://i.1.creatium.io/disk2/a4/aa/96/20e2ce939eebebf97a44e395000b74321a/18.jpg',
//                                     cost: '0'}
//                         }
// ]

// let productImg = document.querySelectorAll('.slider__right__product__photo')
// let productName = document.querySelectorAll('.slider__right__product__name')
// let productCost = document.querySelectorAll('.slider__right__product__size')
                
// productName[0].textContent = elPictureInfoArr[0].first.name
// productCost[0].textContent = elPictureInfoArr[0].first.cost + ' ₽'
// productImg[0].setAttribute('src', elPictureInfoArr[0].first.url)
// productName[1].textContent = elPictureInfoArr[0].second.name
// productCost[1].textContent = elPictureInfoArr[0].second.cost + ' ₽'
// productImg[1].setAttribute('src', elPictureInfoArr[0].second.url)  
// productName[2].textContent = elPictureInfoArr[0].third.name
// productCost[2].textContent = elPictureInfoArr[0].third.cost + ' ₽'
// productImg[2].setAttribute('src', elPictureInfoArr[0].third.url)  

// elNextButton.addEventListener('click', function () {
//     for (let item = 0; item < elPictureInfo.length; item++) {
//         // Selection
//         let productImg = document.querySelectorAll('.slider__right__product__photo')
//         let productName = document.querySelectorAll('.slider__right__product__name')
//         let productCost = document.querySelectorAll('.slider__right__product__size')

//         // Code
//         // elPictureInfo[item].classList.add('slider__right__product-info-anim')
        
//         // setTimeout(function(){
//         //     elPictureInfo[item].classList.remove('slider__right__product-info-anim')
//         // }, 800)

//         // productIndexForInfo = productIndex - 1
//         // if (productIndexForInfo == -1) {
//         //     productIndexForInfo = 9
//         // }

//         if (item == 0){
//             productName[0].textContent = elPictureInfoArr[productIndexForInfo].first.name
//             productCost[0].textContent = elPictureInfoArr[productIndexForInfo].first.cost + ' ₽'
//             productImg[0].setAttribute('src', elPictureInfoArr[productIndexForInfo].first.url)
//         }
//         else if (item == 1){
//             productName[1].textContent = elPictureInfoArr[productIndexForInfo].second.name
//             productCost[1].textContent = elPictureInfoArr[productIndexForInfo].second.cost + ' ₽'
//             productImg[1].setAttribute('src', elPictureInfoArr[productIndexForInfo].second.url)  
//         }
//         else if (item == 2){
//             productName[2].textContent = elPictureInfoArr[productIndexForInfo].third.name
//             productCost[2].textContent = elPictureInfoArr[productIndexForInfo].third.cost + ' ₽'
//             productImg[2].setAttribute('src', elPictureInfoArr[productIndexForInfo].third.url)  
//         }
//     }
// })

// Tade
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

elNextButton.addEventListener('click', function(){
    offset = offset + 580;
    if (offset > 5700) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


// Balls
let elDecBall1 = document.querySelector('.sliding-decorations__ball1')
let elDecBall2 = document.querySelector('.sliding-decorations__ball2')

elNextButton.addEventListener('click', function () {
    elDecBall1.classList.remove('sliding-decorations__ball1-in')
    elDecBall2.classList.remove('sliding-decorations__ball2-in')  
    elDecBall1.classList.add('sliding-decorations__ball1-out')
    elDecBall2.classList.add('sliding-decorations__ball2-out')

    setTimeout(function(){
        elDecBall2.classList.remove('sliding-decorations__ball2-out')  

        elDecBall2.classList.add('sliding-decorations__ball2-in')  

        if (!productIndex % 2 == 0){
            elDecBall2.style.backgroundImage = 'linear-gradient(to right, #E5CFF7, #9D76C1, #713ABE, #5B0888)'
        }
        if (productIndex % 2 == 0){
            elDecBall2.style.backgroundImage = 'linear-gradient(to right, #F6F1E9, #FFD93D, #FF8400, #4F200D)'
        }
    }, 200)
    setTimeout(function(){
        elDecBall1.classList.remove('sliding-decorations__ball1-out')

        elDecBall1.classList.add('sliding-decorations__ball1-in')
    }, 400)
})