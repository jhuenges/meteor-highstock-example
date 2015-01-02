/*
 * Function to draw the chart with local data
 */
function builtStockRemote() {


    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        $('#container-remote').highcharts('StockChart', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    })

}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.remoteData.rendered = function () {
    builtStockRemote();
}