function piramide(n){
    for (let i=1;i<=n;i++){
        const espaco = ' '.repeat(n-i);
        const numero = i.toString().repeat(2*i-1)
        console.log(espaco+numero);
    }
}
piramide(5);