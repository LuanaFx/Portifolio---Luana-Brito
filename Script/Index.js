const tittle = document.querySelector('.tittle-apresentation');

function typeWrite (elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML= '';
  textoArray.forEach((letra,  i) => {
    setTimeout(() => elemento.innerHTML+=letra, 75*i);
    });
}
typeWrite(tittle);