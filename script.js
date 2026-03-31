// FILMES
let filmes = [

    {
    titulo: "Sonic 3: O Filme",
    imagem: "SONIC3.jpg",
    descricao: "Em Sonic 3 - O Filme (2024), o ouriço azul se une a Tails e Knuckles para enfrentar Shadow, um rival misterioso e poderoso com poderes incomparáveis. Com a ameaça de vingança de Shadow contra a humanidade, o grupo faz uma aliança improvável com o Dr. Robotnik (Jim Carrey) para salvar o mundo."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "Arcane",
    imagem: "arcane.jpg",
    descricao: "Arcane (Netflix) é uma série de animação baseada no universo de League of Legends que narra a origem das irmãs Vi e Jinx. A trama se desenrola em meio à crescente tensão entre a cidade utópica de Piltover e a obscura e oprimida Zaun, focando em conflitos ideológicos, desigualdade social e o uso da tecnologia mágica Hextec."}

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();
