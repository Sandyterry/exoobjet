let data = {
"Izaline" :{"nom" : "Dhalluin", "prenom" : "Izaline", "age" : "26", "phrase" :function() {console.log("one, two, three viva l'Algérie")}},
"Martin" :{"nom" : "Lagrelle", "prenom" : "Martin", "age" : "20", "phrase" :function() {console.log("phrase fétiche")}},
"Eleon" :{"nom" : "Lamps", "prenom" : "Eleon", "age" : "25", "phrase" :function() {console.log("Wouf")}},
"Cyrille" :{"nom" : "Deletré", "prenom" : "Cyrille", "age" : "31", "phrase" :function() {console.log("on fait quand de l'angular ?")}},
"Guillaume" :{"nom" : "Cabaret", "prenom" : "Guillaume", "age" : "31", "phrase" :function() {console.log("Erling Haaland !")}},
"Jamal" :{"nom" : "Taibi", "prenom" : "Jamal", "age" :"32", "phrase" :function() {console.log("Come on gunners")}},
"Roxane" :{"nom" : "Kirchmeyer", "prenom" : "Roxane", "age" : "26", "phrase" :function() {console.log("C’est merveilleux…")}},
"Ousmane" :{"nom" : "Soare", "prenom" : "Ousmane", "age" : "21", "phrase" :function() {console.log("Visca BARCA")}},
"Asma" :{"nom" : "Chebaiki", "prenom" : "Asma", "age" : "24", "phrase" :function() {console.log("c'est le week-end")}},
"Thomas" :{"nom" : "Vieira", "prenom" : "Thomas", "age" : "22", "phrase" : function() {console.log("l'Inconnu")}},
"Julien" :{"nom" : "Beauchant", "prenom" : "Julien", "age" : "21", "phrase" :function() {console.log("misca musca mickey mouuse")}},
"Sabrina" :{"nom" : "Calesse", "prenom" : "Sabrina", "age" : "30", "phrase" :function() {console.log("Hamdoullah ca va")}},
"Sandy" :{"nom" : "Terry", "prenom" : "Sandy", "age" : "39", "phrase" :function() {console.log("Bon chance")}},
"Yassine" :{"nom" : "Boudouh", "Yassine" : "Izaline", "age" : "31", "phrase" :function() {console.log("économie d'énergie")}},
"Yaya" :{"nom" : "Balde", "prenom" : "Yaya", "age" : "22", "phrase" :function() {console.log("of course")}},
}

data["Izaline"].passion = "Voyages"
data["Martin"].passion = "Montage video"
data["Eleon"].passion = "Jeux video"
data["Cyrille"].passion = "Jeux"
data["Guillaume"].passion = "Les IAs"
data["Jamal"].passion = "Foot"
data["Roxane"].passion = "Jeu de survie"
data["Ousmane"].passion = "Foot"
data["Asma"].passion = "Cuisiner"
data["Thomas"].passion = "Gaming"
data["Julien"].passion = "Gaming"
data["Sabrina"].passion = "Manger"
data["Sandy"].passion = "Dessin"
data["Yassine"].passion = "Voiture"
data["Yaya"].passion = "Sandy"



for (let key in data){
    let nom = data[key].nom;
    let prenom = data[key].prenom;
    let age = data[key].age;
    let passion = data[key].passion;

    console.log(`${nom} ${prenom} a ${age} ans et aime ${passion}` )
}
// nom prenom "a" age " ans et aime " passion

