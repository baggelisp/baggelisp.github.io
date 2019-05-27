// Define variables
// var dateFormat_temperature = 'MMMM DD YYYY';
var dateFormat_temperature = 'h:mm:ss a';
var date_temperature = moment('April 01 2017', dateFormat_temperature);
var data_temperature = [randomBar(date_temperature, 30)];
var cfg_temperature = {
    type: 'bar',
    data: {
        datasets: [{
            label: '',
            borderColor: '#000',
            color: "#000000",
            fillColor: "#000000",
            backgroundColor: "#000000",
            data: data_temperature,
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
                    labelString: 'Temperature (C)',
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
while (data_temperature.length < 10) {
    //************************************ 
   // var date_temperature = moment('April 01 2017', dateFormat_temperature);
    date_temperature = date_temperature.clone().add(-1, 'd');
    //date_temperature.unshift(date_temperature[0].add(-1, 'd'));
    //if (date_temperature.isoWeekday() <= 10) {
        data_temperature.unshift(randomBar(date_temperature, data_temperature[data_temperature.length - 1].y));
    //}
}
//Create chart
//ctx_temperature = document.getElementById('temperature_chart').getContext('2d');
//document.querySelector(".panel-main")
//////////////////////////////////////////
//ctx_temperature = document.querySelector(".temperature").getContext('2d');
ctx_temperatureAll = document.querySelectorAll(".temperature");
// ctx_temperature.each(function(){

// });
///////////////////////////////////
// ctx_temperature.canvas.width = 1000;
// ctx_temperature.canvas.height = 300;
//var chart_temperature = new Chart(ctx_temperature, cfg_temperature);
// ctx_temperatureAll.each(function(){
//     var $this = $(this);
//     var ctxx=this.getContext('2d');
//     var chart_temperature = new Chart(ctxx, cfg_temperature);
for (i = 0; i < ctx_temperatureAll.length; i++) {
    var ctx=ctx_temperatureAll[i].getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 300;
    var chart_temperature = new Chart(ctx, cfg_temperature);
}

// });
//Function add new data for "add new" button
function add_new_data_temperature() {
    for (i = 0; i < 5; i++) {
        date_temperature = date_temperature.clone().add(-1, 'd');
        //if (date_temperature.isoWeekday() <= 5) {
            data_temperature.unshift(randomBar(date_temperature, data_temperature[data_temperature.length - 1].y));
        //}
    }
    chart_temperature.update();
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


