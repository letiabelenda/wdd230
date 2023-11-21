// Rentals table
document.addEventListener('DOMContentLoaded', function () {
    fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
        const rentalsTable = document.getElementById('rentalsTable');
  
        data.rentals.forEach(rental => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${rental.rentalType}</td>
            <td>${rental.maxPersons}</td>
            <td>$${rental.halfDayPrice.walkIn}</td>
            <td>$${rental.fullDayPrice.reservation}</td>
          `;
          rentalsTable.appendChild(row);
        });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
  
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const date = document.getElementById('rentalDate').value;
      const period = document.getElementById('rentalPeriod').value;
      const rentalType = document.getElementById('rentalType').value;
      const numberOfRentals = document.getElementById('numberOfRentals').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const homeLocation = document.getElementById('homeLocation').value;
      const cruiseLine = document.getElementById('cruiseLine').value;
      const specialAccommodations = document.getElementById('specialAccommodations').value;

      window.location.href = "gracias.html";
    });
});
