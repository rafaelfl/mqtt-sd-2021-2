/*
 * Sistema administrativo para o cadastro das propagandas da Pizzaria SD
 */

// broker público MQTT - test.mosquitto.org

const mqtt = require('mqtt');

const pub = mqtt.connect('mqtt://test.mosquitto.org');

const ads1 = {
    titulo: "Aproveite a promoção, Matheus!",
    conteudo: "Compre uma pizza pra galera e ganhe uma pizza gratis! Apenas R$ 10,00",
};

const ads2 = {
    titulo: "Tris, tira esse escorpião do bolso!",
    conteudo: "Promoção de hamburger, R$ 15,00! Compre um e ganhe mais um!",
};

pub.on('connect', () => {
    console.log("Conectado ao broker MQTT");
    
    pub.publish("pizzasd", JSON.stringify(ads1), {qos: 2, retain: true});

    console.log("Propaganda publicada com sucesso!");

    pub.end();
});



