function selecionar(){
    var distrito = document.querySelector('select#cidade').value

    if (distrito == 'Rio'){
        document.getElementById('escolha').innerHTML = "<img class='foto' src='img/rio.jpg'>"
        escolha.innerHTML += `<p id='regiao'> vc é carioca</p>`
    } else if(distrito == 'Sampa'){
        document.getElementById('escolha').innerHTML = `<img class='foto' src ='img/sao.png'>`
        escolha.innerHTML += `<p id='regiao'>vc é paulista</p>`
    } else if(distrito == 'Minas'){
        document.getElementById('escolha').innerHTML = `<img class='foto' src ='img/minas.jpeg'>`
        escolha.innerHTML += `<p id='regiao'>vc é mineiro</p>`
    } else{
        document.getElementById('escolha').innerHTML = "<img class='foto' src='img/download.jpg'>" 
        escolha.innerHTML +=`<p id='regiao'>vc nasceu errado</p>`
    }
}
