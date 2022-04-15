import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTBody: HTMLElement = document.getElementById("series")!;

const totalSeasonAvgElm: HTMLElement = document.getElementById("seasonsAvg")!;

renderSeriesInTable(dataSeries);

totalSeasonAvgElm.innerHTML = `Season Average: ${getSeasonsAverage(dataSeries)}`;

function renderSeriesInTable(series: Serie[]) {
    console.log('Desplegando series');
    series.forEach((serie) =>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td class="name">${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });
}
function getSeasonsAverage(series: Serie[]) {
    let sum: number = 0;
    series.forEach((serie) => sum += serie.seasons);
    return series.length === 0 ? 0 : sum/series.length;
}

