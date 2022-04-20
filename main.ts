import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTBody: HTMLElement = document.getElementById("series")!;
let detalleSerieDiv: HTMLElement = document.getElementById("detalleSerie")!;

const totalSeasonAvgElm: HTMLElement = document.getElementById("seasonsAvg")!;

renderSeriesInTable(dataSeries);

totalSeasonAvgElm.innerHTML = `Season Average: ${getSeasonsAverage(dataSeries)}`;

document.addEventListener("DOMContentLoaded", () => {
    const rows: NodeListOf<HTMLElement> = document.querySelectorAll("tr");
    console.log(rows);
});

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) =>{
        let trElement = document.createElement("tr");
        trElement.onclick = () => onSelected(serie);
        trElement.innerHTML =  `<td id="id">${serie.id}</td>
                                <td id="name">${serie.name}</td>
                                <td id="channel">${serie.channel}</td>
                                <td id="seasons">${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });
}

function onSelected(serie: Serie): void{
    if (detalleSerieDiv.firstChild != null){
        detalleSerieDiv.removeChild(detalleSerieDiv.firstChild);
    }
    console.log(serie);
    let cardElement = document.createElement("div");
    cardElement.setAttribute("class","card");
    cardElement.setAttribute("style","width: 18rem;");
    cardElement.innerHTML = `   <img src="${serie.img}" class="card-img-top" alt="imagen">
                                <div class="card-body">
                                <h5>${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href="url">${serie.link}</a>
                                </div>`;
    detalleSerieDiv.appendChild(cardElement);
}

function getSeasonsAverage(series: Serie[]): number {
    let sum: number = 0;
    series.forEach((serie) => sum += serie.seasons);
    return series.length === 0 ? 0 : sum/series.length;
}

function getSerieById(series: Serie[], id: number): Serie {
    let serieEncontrada: Serie;
    let terminado: boolean = false;
    let i: number = 0;
    while (!terminado){
        if (series[i].id === id){
            serieEncontrada = series[i];
            terminado = true;
        }
        i += 1;
    }
    return serieEncontrada!;
}


