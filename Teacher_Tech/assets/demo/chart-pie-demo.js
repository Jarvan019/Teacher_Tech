// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example

var pieChartData = [10 , 80];
var ctx = document.getElementById("myPieChart");
var pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Absent", "Present"],
    datasets: [{
      data: [10 , 80],
      backgroundColor: ['#dc3545','#28a745'],
    }],
  },
});

document.addEventListener("DOMContentLoaded", function() {
  function updatePieChartData(newData) {
      pieChart.data.datasets[0].data = newData;
      pieChart.update();
  }

  const incrementButton = document.getElementById('incrementBtnPie');
  const decrementButton = document.getElementById('decrementBtnPie');
  const attendSelector = document.getElementById('attendSelectorPie');

  incrementButton.addEventListener('click', function() {
      const selAttendType = attendSelector.value;
      const index = parseInt(selAttendType) - 1;
      pieChartData[index]++;
      updatePieChartData(pieChartData);
  });

  decrementButton.addEventListener('click', function() {
      const selAttendType = attendSelector.value;
      const index = parseInt(selAttendType) - 1;
      
      if (pieChartData[index] > 0) {
          pieChartData[index]--;
          updatePieChartData(pieChartData);
      }
  });
});



