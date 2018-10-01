function panggilNestedArray(){
    var dataNama = [["motor1","motor2"],
                    ["bola1","bola2","bola3"],
                    ["pesawat1","pesawat2","pesawat3","pesawat4"]];

    console.log(dataNama.length);
    for(var i=0; i<dataNama.length; i++){
        for(var j=0; j<dataNama[i].length; j++){
            console.log(dataNama[i][j]);
        }
    }
}

panggilNestedArray();
