const buscar = () => {
    const aux = document.getElementById("pk_name");
    let pk_input = aux.value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/"+pk_input;
    console.log(url)


    fetch(url).then((res)=>{
        return res.json();
    }
    ).then((data)=>{
        let pk_img = data.sprites.other.dream_world.front_default;
        let pk_type = data.types[0].type.name;
        let pk_weight = (data.weight*0.1).toFixed(2);
        let pk_height = (data.height*0.1).toFixed(2);
        let pk_move = data.abilities;
        change_image(pk_img);
        change_stats(pk_type, pk_weight, pk_height);
        clear_moves()
        change_moves(pk_move)
    }
    )
}

const change_image = (url) =>{
    const pk_img=document.getElementById("canvas");
    pk_img.src = url;
    
}

const change_stats = (pk_type, pk_weight, pk_height) =>{
    const pk_stats1 = document.getElementById("estadisticas_1");
    const pk_stats2 = document.getElementById("estadisticas_2");
    const pk_stats3 = document.getElementById("estadisticas_3");
    
    let aux1 = "Tipo: "+ pk_type;
    let aux2 = "Peso: "+ pk_weight+" kg";
    let aux3 = "Altura: "+ pk_height+" m";

    pk_stats1.textContent=aux1;
    pk_stats2.textContent=aux2;
    pk_stats3.textContent=aux3;

}

const change_moves = (pk_move) =>{
    let aux = pk_move.length
    const pk_move1 = document.getElementById("move_1");
    const pk_move2 = document.getElementById("move_2");
    const pk_move3 = document.getElementById("move_3");
    const pk_move4 = document.getElementById("move_4");

    console.log(pk_move, aux)
    
    if (aux >= 1){
        pk_move1.textContent=pk_move[0].ability.name
    }
    if (aux >= 2){
        pk_move2.textContent=pk_move[1].ability.name
    }
    if (aux >= 3){
        pk_move3.textContent=pk_move[2].ability.name
    }
    if (aux >= 4){
        pk_move4.textContent=pk_move[3].ability.name
    }

}

const clear_moves = () =>{
    const pk_move1 = document.getElementById("move_1");
    const pk_move2 = document.getElementById("move_2");
    const pk_move3 = document.getElementById("move_3");
    const pk_move4 = document.getElementById("move_4");

    pk_move1.textContent=''
    pk_move2.textContent=''
    pk_move3.textContent=''
    pk_move4.textContent=''
}