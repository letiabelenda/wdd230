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

