let url = document.location.href;
let nome = url.substring(url.indexOf('#') + 1, url.length-1);



let x = 0;
        function rbtn() {
            x++
            document.getElementById('no').style.marginTop = Math.floor(Math.random() * 1000) + 1+"px"
            document.getElementById('no').style.marginLeft= Math.floor(Math.random() * 800) + 1+"px"
            document.getElementById('ten').innerHTML = "tentativas :"+x
        }

    




function chan(){
    document.querySelector("html").innerHTML=`
<head>
    <h1 id="nome">${nome.toUpperCase()}</h1>
    <h3>Bora sair?</h3>
    <h4 id="ten"></h4>
</head>

<body>
    <script>
let x = 0;
        function rbtn() {
            x++
            document.getElementById('no').style.marginTop = Math.floor(Math.random() * 1000) + 1+"px"
            document.getElementById('no').style.marginLeft= Math.floor(Math.random() * 800) + 1+"px"
            document.getElementById('ten').innerHTML = "tentativas :"+x
        }

    </script>
   
        <button id="si">SIM</button>
        <button id="no" onclick="rbtn()" >NÃO</button>

    <style>
         @media only screen and (max-device-width: 480px) {
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

        }

        #si {
            margin-top: 200px;
            position: absolute;
            height: 80px;
            width: 150px;
            margin: 30px;
            margin-left: 300px;
            font-size: 40px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 40px;
            display: block;
        }

        #no {
            position: absolute;
            z-index: 2;
            margin-top: 200px;
            text-decoration: none;
            height: 80px;
            width: 150px;
            margin: 30px;
            margin-left: 500px;
            font-size: 40px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 40px;
            display: block;
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

        }

        #si {
            margin-top: 200px;
            position: absolute;
            height: 80px;
            width: 150px;
            margin: 30px;
            margin-left: 580px;
            font-size: 40px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 40px;
            display: block;
        }

        #no {
            position: absolute;
            z-index: 2;
            margin-top: 200px;
            text-decoration: none;
            height: 80px;
            width: 150px;
            margin: 30px;
            margin-left: 790px;
            font-size: 40px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 40px;
            display: block;
        }

        .btn {
          
            height: 100%;
            width: 100%;
        }
         }
    </style>
</body>

    `
}



function Rmusic() { 
    switch (Math.floor(Math.random() * 10) + 1) {
        case 1:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: The Cure - The Caterpillar</h3>
            <a href="https://www.youtube.com/watch?v=nzxJ5YvYfx4">clique aqui para abrir ela</a>
            `
            break;
        case 2:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: The Cure - The Lovecatsr</h3>
            <a href="https://www.youtube.com/watch?v=mcUza_wWCfA">clique aqui para abrir ela</a>
            `
            break;
        case 3:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: Alice Gas - Ferrai</h3>
            <a href="https://www.youtube.com/watch?v=uKOf1FQZNEQ">clique aqui para abrir ela</a>
            `
            break;
        case 4:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: p4rk - i hate it here</h3>
            <a href="https://youtu.be/LZdnaWB5-b4?t=54">clique aqui para abrir ela</a>
            `
            break;
        case 5:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: Sophiaaaahjkl;8901 - CHEMICAL BURN</h3>
            <a href="https://www.youtube.com/watch?v=QgKWVxGAwfI">clique aqui para abrir ela</a>
            `
            break;
        case 6:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: ericdoa - fantasize </h3>
            <a href="https://www.youtube.com/watch?v=N9_hsXleJgs">clique aqui para abrir ela</a>
            `
            break;
        case 7:
            document.querySelector("body > div").innerHTML=`
            <h3>musica:glaive - minnesota is a place that exists</h3>
            <a href="https://www.youtube.com/watch?v=dUIQvqqq-cg">clique aqui para abrir ela</a>
            `
            break;
        case 8:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: 100 gecs - mememe</h3>
            <a href="https://www.youtube.com/watch?v=1Bw2dTY3SsQ">clique aqui para abrir ela</a>
            `
            break;
        case 9:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: joji - Run </h3>
            <a href="https://www.youtube.com/watch?v=7qo7ESpyDNY">clique aqui para abrir ela</a>
            `
            break;
        case 10:
            document.querySelector("body > div").innerHTML=`
            <h3>musica: Lil Peep - big city blues </h3>
            <a href="https://www.youtube.com/watch?v=6ViiarPAoYY">clique aqui para abrir ela</a>
            `
            break;
        default:
            break;
    }
}




let nomeARR = ['giovanna','maythe'];
if (nomeARR.includes(nome) == true) {
    console.log(nome);
    chan();
} else {
    if(url.length>36){
 window.alert('o que vc ta fazendo?')
    }
}
