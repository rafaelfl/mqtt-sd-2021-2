/*
 * Aplicação cliente que vai receber as propagandas e exibi-las na tela
 */

const mqtt = require('mqtt');

const sub = mqtt.connect('mqtt://test.mosquitto.org');

sub.on('connect', () => {
    console.log("Conectado ao broker MQTT");

    sub.subscribe("pizzasd", (err) => {
        if (err) {
            console.error("Deu ruim meu patrão!");
            console.error(err);
        }
    });
});

sub.on("message", (topic, message) => {
    if (topic === "pizzasd") {
        try{
            console.log("Recebi uma nova propaganda!");
            
            const ads = JSON.parse(message.toString());

            // exibir a propaganda na tela
            console.log(`[Anúncio] [${ads.titulo}] - ${ads.conteudo}`);
        } catch(e) {
            console.error(e);
        }
    }
});
