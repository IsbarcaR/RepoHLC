function retraso(Cb){
    setTimeout(() => {
        Cb();
    }, 2000);
}

// Llamada asincrona con callback


retraso(() => console.log("mi callback"));