
let url = document.location.href;
let nome = url.substring(url.indexOf('#') + 1, url.length-1);




  let x = 0;
  function rbtn() {
      x++
      document.getElementById('no').style.marginTop = Math.floor(Math.random() * 400) + 1+"px"
      document.getElementById('no').style.marginLeft= Math.floor(Math.random() * 400) + 1+"px"
      document.getElementById('ten').innerHTML = "tentativas :"+x
      window.scrollBy(1000,1000)
  }

function chan() {

    document.querySelector("html").innerHTML =`
    <h1 id="nome">${nome}</h1>
    <h3>Bora sair?</h3>
    <h4 id="ten"></h4>
            <button id="si" onclick="window.location.href ='https://surveyheart.com/form/634cc50c734fee61aa81f596'">SIM</button>
            <button id="no" onclick="rbtn()" >NÃO</button>
    
        <style>
        @media only screen and (max-device-width: 480px) {
            body {
                background-color: rgb(255, 152, 169);
            }
    
            h1 {
                font-size: 70px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                margin-top: 150px;
                margin-bottom: 1px;
                text-align: center;
            }
    
            h3 {
                font-size: 50px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                margin-top: 1px;
                text-align: center;
                margin-bottom: 1px;
    
                display: block;
                margin-left: auto;
                margin-right: auto;
    
            }
    
            h4 {
                font-size: 30px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                display: block;
                margin-left: auto;
                margin-right: auto;
    
            }
    
            #si {
    
                margin-top: 200px;
                height: 80px;
                width: 150px;
                margin: 30px;
                font-size: 40px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                border: none;
                border-radius: 40px;
                display: block;
                margin-left: auto;
                margin-right: auto;
    
            }
    
            #no {
    
                margin-top: 200px;
                height: 80px;
                width: 150px;
                margin: 30px;
                font-size: 40px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                border: none;
                border-radius: 40px;
                display: block;
                margin-left: auto;
                margin-right: auto;
    
            }   
    
            .btn {
    
                height: 100%;
                width: 100%;
            }
        }
    
        @media only screen and (min-device-width: 550px) {
            body {
                background-color: rgb(255, 152, 169);
            }
    
            h1 {
                font-size: 120px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                margin-top: 150px;
                margin-bottom: 1px;
                text-align: center;
            }
    
            h3 {
                font-size: 60px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                margin-top: 1px;
                text-align: center;
                margin-bottom: 1px;
    
            }
    
            h4 {
                font-size: 30px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                color: rgb(255, 255, 255);
                margin-top: 1px;
                text-align: center;
                display: block;
                margin-left: auto;
                margin-right: auto;
    
            }
    
            #si {
    
                margin-top: 200px;
                height: 80px;
                width: 150px;
                margin: 30px;
                font-size: 40px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                border: none;
                border-radius: 40px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                background-color: rgb(255, 255, 255);
    
            }
    
            #no {
    
                margin-top: 200px;
                height: 80px;
                width: 150px;
                margin: 30px;
                font-size: 40px;
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
                border: none;
                border-radius: 40px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                background-color: rgb(255, 255, 255);
    
            }
    
            .btn {
    
                height: 100%;
                width: 100%;
    
            }
    
    
        }
        </style>
    `
}



function Rmusic() {
    switch (Math.floor(Math.random() * 10) + 1) {
        case 1:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: The Cure - The Caterpillar</h3>
            <a href="https://www.youtube.com/watch?v=nzxJ5YvYfx4">clique aqui para abrir ela</a>
            `
            break;
        case 2:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: The Cure - The Lovecatsr</h3>
            <a href="https://www.youtube.com/watch?v=mcUza_wWCfA">clique aqui para abrir ela</a>
            `
            break;
        case 3:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: Alice Gas - Ferrai</h3>
            <a href="https://www.youtube.com/watch?v=uKOf1FQZNEQ">clique aqui para abrir ela</a>
            `
            break;
        case 4:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: p4rk - i hate it here</h3>
            <a href="https://youtu.be/LZdnaWB5-b4?t=54">clique aqui para abrir ela</a>
            `
            break;
        case 5:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: Sophiaaaahjkl;8901 - CHEMICAL BURN</h3>
            <a href="https://www.youtube.com/watch?v=QgKWVxGAwfI">clique aqui para abrir ela</a>
            `
            break;
        case 6:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: ericdoa - fantasize </h3>
            <a href="https://www.youtube.com/watch?v=N9_hsXleJgs">clique aqui para abrir ela</a>
            `
            break;
        case 7:
            document.querySelector("body > div").innerHTML = `
            <h3>musica:glaive - minnesota is a place that exists</h3>
            <a href="https://www.youtube.com/watch?v=dUIQvqqq-cg">clique aqui para abrir ela</a>
            `
            break;
        case 8:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: 100 gecs - mememe</h3>
            <a href="https://www.youtube.com/watch?v=1Bw2dTY3SsQ">clique aqui para abrir ela</a>
            `
            break;
        case 9:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: joji - Run </h3>
            <a href="https://www.youtube.com/watch?v=7qo7ESpyDNY">clique aqui para abrir ela</a>
            `
            break;
        case 10:
            document.querySelector("body > div").innerHTML = `
            <h3>musica: Lil Peep - big city blues </h3>
            <a href="https://www.youtube.com/watch?v=6ViiarPAoYY">clique aqui para abrir ela</a>
            `
            break;
        default:
            break;
    }
}




let nomeARR = ['giovanna','maythe','isabela'];
if (nomeARR.includes(nome) == true) {
    console.log(nome);
    chan();
} else {
    if(url.length>36){
      nome = 'invalido, kek?';
        chan();
    }
}
