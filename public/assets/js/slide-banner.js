var images = [];
var count = 0;

var element= document.querySelector('.banner');

images= [ 
'assets/images/slider/cliente-tirando-oculos-na-loja-de-otica-com-a-ajuda-do-vendedor.jpg', 
'assets/images/slider/mulher-feliz-a-procura-de-novos-oculos-no-optometrista.jpg',
'assets/images/slider/tecnologia-de-biometria-retinal-com-remix-digital-de-olho-de-homem.jpg'
];

setInterval(()=>{
  count++;
  
  if( count ==  images.length){
     count = 0;
  }
  element.style.background = 
  `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${images[count]})
  `;
   element.style. backgroundRepeat = 'no-repeat';
   element.style.  backgroundSize ='cover';
}, 10000);