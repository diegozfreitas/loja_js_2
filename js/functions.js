
function exibir_categoria(categoria){
    var produtos = document.querySelectorAll(".box_produto")

    for (let i = 0; i <= produtos.length; i++) {
        if(produtos[i].classList.contains(categoria)){
            produtos[i].style.display = 'block'
        }else{
            produtos[i].style.display = 'none'
        }
    }
}

var imagensProdutos = document.querySelectorAll(".box_produto img")
imagensProdutos.forEach((img)=>{
    img.addEventListener("mousemove", ()=>{
        img.style.transform = "scale(1.5)";
        img.style.zIndex = "1000";
    })
    img.addEventListener("mouseleave", ()=>{
        img.style.transform = "scale(1)";
        img.style.zIndex = "unset";
    })
})


var itensMenu = document.querySelector('.menu').querySelectorAll('a');
itensMenu.forEach((item)=>{
    item.addEventListener("mousemove", ()=>{
        item.style.color = "#fceb71"
    })
    item.addEventListener("mouseleave", ()=>{
        item.style.color = "#FFF"
    })

})