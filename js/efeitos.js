const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function animateScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }

    })
}

animateScroll()

if(target.length){
    window.addEventListener('scroll',debounce(function(){
        animateScroll()

        console.log('nkdk')
    },200))
}

// Animate curso
function typeWriter(elemento) {
    // const textoArray = elemento.innerHTML.split('');
    // elemento.innerHTML = '';
    const textoArray = `Front end & Back end`.split('')
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
    // const textoArray = 'Front end'.split('')
    // textoArray.forEach((letra, i) => {
    //   setTimeout(() => elemento.innerHTML += letra, 100 * i);
    // });
    
}


  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }
const titulo = document.querySelector('h1');
typeWriter(titulo);


