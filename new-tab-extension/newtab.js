function showLiveDate() {
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');

    function updateLiveDate() {
      var now = new Date();

      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = now.toLocaleDateString(undefined, options);

      var time = now.toLocaleTimeString();

      dateElement.textContent = formattedDate;
      timeElement.textContent = time;

      requestAnimationFrame(updateLiveDate); // Request next animation frame
    }

    updateLiveDate(); // Initial call to start updating the date, day, and time
  }

  document.addEventListener('DOMContentLoaded', showLiveDate);