function panggilSplice(){
    var kota = ['jakarta', 'bogor', 'depok', 'tangerang', 'bekasi'];
    console.log(kota);
    //kota.splice(2,0,'bandung');
    kota.splice(2,1);
    return kota;
}

console.log(panggilSplice());
