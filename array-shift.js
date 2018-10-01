function panggilShift(){
    var kota = ['jakarta','depok','bogor','tangerang','surabaya'];
    console.log(kota);
    console.log('===============');

    var kota2 = kota.shift();
    console.log(kota2);

    return kota;

}

console.log(panggilShift())
