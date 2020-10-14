import { getFromLocalStorage } from '../helper-functions.js';



const restartButton = document.querySelector('button');
const outcome = getFromLocalStorage('RESULTS');
console.log(outcome)
const pokeName = outcome.map((item) => {
    return item.pokemon;
});

const encountered = outcome.map((item) => {
    return item.encounters;
});

const captured = outcome.map((item) => {
    return item.captured;
});


var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Encountered',
            data: encountered,
            backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)',
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)',
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myOtherChart').getContext('2d');

var myOtherChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)',
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)',
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 9)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

restartButton.addEventListener('click', () => {

    localStorage.clear();
    window.location.href = '../index.html';
   
    
});
