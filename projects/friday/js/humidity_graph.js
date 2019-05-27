// Define variables
var dateFormat_humidity = 'MMMM DD YYYY';
var date_humidity = moment('April 01 2017', dateFormat_humidity);
var data_humidity = [randomBar(date_humidity, 30)];
var cfg_humidity = {
    type: 'bar',
    data: {
        datasets: [{
            label: '',
            borderColor: '#000',
            color: "#000000",
            fillColor: "#000000",
            backgroundColor: "#000000",
            data: data_humidity,
            type: 'line',
            pointRadius: 2,
            fill: false,
            lineTension: 0,
            borderWidth: 2,
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
                    labelString: 'Humidity (%)',
                    fontColor: "#000"
                },
                ticks: {
                    source: 'data',
                    autoSkip: true,
                    fontColor: "#000"
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
while (data_humidity.length < 10) {
    date_humidity = date_humidity.clone().add(-1, 'd');
    //if (date_humidity.isoWeekday() <= 10) {
        data_humidity.unshift(randomBar(date_humidity, data_humidity[data_humidity.length - 1].y));
    //}
}
//Create chart
ctx_humidity = document.getElementById('humidity_chart').getContext('2d');
ctx_humidity.canvas.width = 1000;
ctx_humidity.canvas.height = 300;
var chart_humidity = new Chart(ctx_humidity, cfg_humidity);
//Function add new data for "add new" button
function add_new_data_humidity() {
    for (i = 0; i < 5; i++) {
        date_humidity = date_humidity.clone().add(-1, 'd');
        //if (date_humidity.isoWeekday() <= 5) {
            data_humidity.unshift(randomBar(date_humidity, data_humidity[data_humidity.length - 1].y));
        //}
    }
    chart_humidity.update();
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
    var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
    return {
        t: date.valueOf(),
        y: close
    };
}


