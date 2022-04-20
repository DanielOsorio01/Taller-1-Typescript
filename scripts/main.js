import { dataSeries } from './data.js';
var seriesTBody = document.getElementById("series");
var detalleSerieDiv = document.getElementById("detalleSerie");
var totalSeasonAvgElm = document.getElementById("seasonsAvg");
renderSeriesInTable(dataSeries);
totalSeasonAvgElm.innerHTML = "Season Average: ".concat(getSeasonsAverage(dataSeries));
document.addEventListener("DOMContentLoaded", function () {
    var rows = document.querySelectorAll("tr");
    console.log(rows);
});
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.onclick = function () { return onSelected(serie); };
        trElement.innerHTML = "<td id=\"id\">".concat(serie.id, "</td>\n                                <td id=\"name\">").concat(serie.name, "</td>\n                                <td id=\"channel\">").concat(serie.channel, "</td>\n                                <td id=\"seasons\">").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function onSelected(serie) {
    if (detalleSerieDiv.firstChild != null) {
        detalleSerieDiv.removeChild(detalleSerieDiv.firstChild);
    }
    console.log(serie);
    var cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("style", "width: 18rem;");
    cardElement.innerHTML = "   <img src=\"".concat(serie.img, "\" class=\"card-img-top\" alt=\"imagen\">\n                                <div class=\"card-body\">\n                                <h5>").concat(serie.name, "</h5>\n                                <p class=\"card-text\">").concat(serie.description, "</p>\n                                <a href=\"url\">").concat(serie.link, "</a>\n                                </div>");
    detalleSerieDiv.appendChild(cardElement);
}
function getSeasonsAverage(series) {
    var sum = 0;
    series.forEach(function (serie) { return sum += serie.seasons; });
    return series.length === 0 ? 0 : sum / series.length;
}
function getSerieById(series, id) {
    var serieEncontrada;
    var terminado = false;
    var i = 0;
    while (!terminado) {
        if (series[i].id === id) {
            serieEncontrada = series[i];
            terminado = true;
        }
        i += 1;
    }
    return serieEncontrada;
}
