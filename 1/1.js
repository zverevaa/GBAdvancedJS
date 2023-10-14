"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  collection: [{
    title: "New Levels New Devils",
    artist: "Polyphia",
    year: "2018"
  }, {
    title: "Origin in Symmetry",
    artist: "Muse",
    year: "2001"
  }, {
    title: "Warhammer 40000: Mechanicus",
    artist: "Guillaume David",
    year: "2020"
  }, {
    title: "Herja",
    artist: "Danheim",
    year: "2018"
  }]
}

for (const el of musicCollection.collection) {
  console.log(`${el.title} - ${el.artist}(${el.year})`);
}
