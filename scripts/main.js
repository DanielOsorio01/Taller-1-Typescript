import { dataSeries } from './data.js';
var seriesTBody = document.getElementById("series");
var totalSeasonAvgElm = document.getElementById("seasonsAvg");
renderSeriesInTable(dataSeries);
totalSeasonAvgElm.innerHTML = "Season Average: ".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td class=\"name\">").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var sum = 0;
    series.forEach(function (serie) { return sum += serie.seasons; });
    return series.length === 0 ? 0 : sum / series.length;
}
