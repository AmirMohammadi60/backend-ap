/* // Event-Listener für den Button "Daten Speichern"
document.getElementById("datenspeichern").addEventListener("click", function() {
  // Abrufen der eingegebenen Daten
  var anrede = document.getElementById("anrede").value;
  var vorname = document.getElementById("vorname").value;
  var nachname = document.getElementById("nachname").value;

  // Erstellen des CSV-Datensatzes
  var csvData = anrede + "," + vorname + "," + nachname + "\n";

  // Schreiben des Datensatzes in die CSV-Datei
  var file = new File([csvData], "personen.csv", {type: "text/csv;charset=utf-8"});
  saveAs(file);
}); */

const anrede = document.getElementById("anrede").value;
const vorname = document.getElementById("vorname").value;
const nachname = document.getElementById("nachname").value;

// Daten in ein Objekt speichern
const daten = { Anrede: anrede, Vorname: vorname, Nachname: nachname };

// Daten in eine CSV-Zeile umwandeln
const csv = `${daten.Anrede}, ${daten.Vorname}, ${daten.Nachname}\n`;

// CSV-Datei schreiben
const fs = require("fs");
fs.appendFile("personen.csv", csv, function (err) {
  if (err) throw err;
  console.log("Daten erfolgreich in die CSV-Datei geschrieben.");
});


  

/* <---------------------------in golang geschriben------------------------>
package main

import (
    "encoding/csv"
    "os"
)

func main() {
    // Daten sammeln
    var anrede string
    var vorname string
    var nachname string

    // Daten aus HTML-Formular einlesen
    anrede = r.FormValue("anrede")
    vorname = r.FormValue("vorname")
    nachname = r.FormValue("nachname")

    // Daten in ein Objekt speichern
    daten := []string{anrede, vorname, nachname}

    // CSV-Datei öffnen
    file, err := os.OpenFile("personen.csv", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    // CSV-Writer erstellen
    writer := csv.NewWriter(file)
    defer writer.Flush()

    // Daten in eine CSV-Zeile schreiben
    err = writer.Write(daten)
    if err != nil {
        panic(err)
    }
} */