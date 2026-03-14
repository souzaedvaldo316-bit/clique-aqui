function mostrarFoto(){

document.getElementById("fotoAlbum").src = fotos[atual].img;

document.getElementById("legenda").textContent = fotos[atual].legenda;

}

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');
const music = document.getElementById('music');
const titulo = document.querySelector("h1");
const pergunta = document.querySelector("p");

let fotos = [
{
img: "firmo_album/firmo.jpg",
legenda: "Parabéeeeeeens nosso cássio"
},

{
img: "firmo_album/firmo2.jpg",
legenda: "Dia lendário (Copa x Festa Junina)"
},

{
img: "firmo_album/firmo3.jpg",
legenda: "Nós com pedrão"
},

{
img: "firmo_album/firmo4.jpg",
legenda: "Pacote calvície precoce plus"
},

{
img: "firmo_album/firmo5.jpg",
legenda: "O galã do 9º ano"
},

{
img: "firmo_album/firmo6.jpg",
legenda: "Assistindo Independentes em 144p"
},

{
img: "firmo_album/firmo7.jpg",
legenda: "Robróquis🔥"
},

{
img: "firmo_album/firmo8.jpg",
legenda: "Karatecas (se foi 5 vezes foi muito)"
},

{
img: "firmo_album/firmo9.jpg",
legenda: "caretas xd"
},

{
img: "firmo_album/firmo10.jpg",
legenda: "Se você for eu vou - Firmino, Victor"
},

{
img: "firmo_album/firmo11.jpg",
legenda: "A dupla com mais aura de Registro"
},

{
img: "firmo_album/firmo12.jpg",
legenda: "Nós com Eric"
},

{
img: "firmo_album/firmo13.jpg",
legenda: "Nós com Guizão e Enzo"
},

{
img: "firmo_album/firmo14.jpg",
legenda: "Nós com Sampai"
},

{
img: "firmo_album/firmo15.jpg",
legenda: "Nós formados com os manos universitários"
},

{
img: "firmo_album/firmo16.jpg",
legenda: "Nós com lendário Guizão²"
},

{
img: "firmo_album/firmo17.jpg",
legenda: "Primeiro AJ da lenda"
},

{
img: "firmo_album/firmo18.jpg",
legenda: "naosabemotirarfoto"
},

{
img: "firmo_album/firmo19.jpg",
legenda: "Obrigado por tudo, mano"
},

{
img: "firmo_album/firmo20.jpg",
legenda: "tmj sempre"
}
];

let atual = 0;
mostrarFoto();

yesBtn.addEventListener('click', () => {
    messageDiv.textContent = 'PARABÉNS FIRMINOOOOOOOO!';

    music.currentTime = 0;
    music.volume = 0.2;
    music.play();

    document.getElementById("album").style.display = "block";

    document.body.classList.add("fundo-ativo");

    // esconder elementos
    titulo.style.display = "none";
    pergunta.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    yesBtn.disabled = true;
    noBtn.disabled = true;

    showBackButton();
});

noBtn.addEventListener('click', () => {
    messageDiv.textContent = 'Então isso não é para você!';

    yesBtn.disabled = true;
    noBtn.disabled = true;

    showBackButton();
});

function showBackButton() {
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Voltar';
    backBtn.style.backgroundColor = '#ccc';
    backBtn.style.color = '#000';

    messageDiv.appendChild(backBtn);

    backBtn.addEventListener('click', () => {
        messageDiv.textContent = '';

        music.pause();
        music.currentTime = 0;

        document.getElementById("album").style.display = "none";

        document.body.classList.remove("fundo-ativo");

        titulo.style.display = "block";
        pergunta.style.display = "block";
        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";

        yesBtn.disabled = false;
        noBtn.disabled = false;

        backBtn.remove();
    });
}
function proximaFoto(){

if(atual < fotos.length - 1){
    atual++;
    mostrarFoto();
}

}
mostrarFoto();


function voltarFoto(){

if(atual > 0){
    atual--;
    mostrarFoto();
}

}
mostrarFoto();


