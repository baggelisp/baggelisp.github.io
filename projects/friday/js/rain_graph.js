// Define variables
var dateFormat_rain = 'MMMM DD YYYY';
var date_rain = moment('April 01 2017', dateFormat_rain);
var data_rain = [randomBar_rain(date_rain, 30)];
var cfg_rain = {
    type: 'bar',
    data: {
        datasets: [{
            label: '',
            borderColor: '#000',
            color: "#000000",
            fillColor: "#000000",
            backgroundColor: "#000000",
            data: data_rain,
            // data: [0,0,0,0,1,1,1,1,1,0],
            //type: 'line',
            pointRadius: 2,
            fill: false,
            lineTension: 0,
            borderWidth: 1,
        }]
    },

    options: {
        reverse:true,
        legend: { display: false },
        animation: {
            easing: 'linear',
            duration: 300,
          },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    
                    unit: 'minute'
                },
                distribution: 'series',
                ticks: {
                    source: 'data',
                    autoSkip: true,
                    fontColor: "#000"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Rain (Yes/No)',
                    fontColor: "#000"
                },
                ticks: {
                    display: false
                }
            }]
        },
        tooltips: {
            intersect: false,
            mode: 'index',
            callbacks: {
                label: function (tooltipItem, myData) {
                    var label = myData.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += parseFloat(tooltipItem.value).toFixed(2);
                    return label;
                }
            }
        }
    }
};


// Push to data 10 values
while (data_rain.length < 10) {
    date_rain = date_rain.clone().add(1, 'd');
    if (date_rain.isoWeekday() <= 10) {
        data_rain.push(randomBar_rain(date_rain, data_rain[data_rain.length - 1].y));
    }
}
//Create chart
ctx_rain = document.getElementById('rain_chart').getContext('2d');
ctx_rain.canvas.width = 1000;
ctx_rain.canvas.height = 300;
var chart_rain = new Chart(ctx_rain, cfg_rain);
//Function add new data for "add new" button
function add_new_data_rain() {
    for (i = 0; i < 5; i++) {
        date_rain = date_rain.clone().add(-10, 'd');
        if (date_rain.isoWeekday() <= 5) {
            data_rain.push(randomBar_rain(date_rain, data_rain[data_rain.length - 1].y));
        }
    }
    chart_rain.update();
}

function randomNumber_rain(min, max) {
    return Math.round(Math.random()); //retrun 0 or 1 --only for rain--
}

function randomBar_rain(date, lastClose) {
    var open = randomNumber_rain(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = randomNumber_rain(open * 0.95, open * 1.05).toFixed(2);
    return {
        t: date.valueOf(),
        y: close
    };
}


