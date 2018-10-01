function panggilObject(){
    var mobil = {
                'type' : 'sedan',
                'harga' : 200000000,
                'warna' : 'hitam',
                'tahun' : [2011,2012,2013,2014]
    };

    //console.log(mobil);
    //console.log(mobil.type, mobil.warna)
    //console.log(mobil.tahun[1])

    /*Object.keys(mobil).forEach(function(key) {
          console.log(key+': '+mobil[key]);
      });*/
      for(var i=0; i<mobil.tahun.length; i++){
          console.log(mobil.tahun[i])
      }
}

panggilObject();
