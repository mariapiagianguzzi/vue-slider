/* Istruzioni:
Ricreare lo slider di immagini ma questa volta con Vue
Bonus ufficiale:
Facciamo in modo che il nostro slider scorra automaticamente in avanti,
e ogni 3 secondi visualizzi un immagine differente.
Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata */



let app = new Vue ({
    el: "#app",
    data: {
        counter: 0,
        images: [
            "img/nature.jpg",
            "img/scogli.jpg",
            "img/tramonto.jpg",
            "img/vista.jpg",
        ],
    },
    created: function(){
        setInterval(this.prev, 3000);
        
    },
    methods: {
        next() {
            this.counter++;
            if(this.counter === this.images.length) {
                this.counter = 0;
            }
        },
        prev() {
            this.counter--;
            if (this.counter === -1){
                this.counter = this.images.length -1 ;
            }
            
        },
        
    }
})