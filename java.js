let calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
  //   console.log('clicet');
  let employeesCount = document.getElementById('employees-count').valueAsNumber;
  let employeeMakePerDay = document.getElementById(
    'employee-make-per-day'
  ).valueAsNumber;
  let dayReservations =
    document.getElementById('day-reservations').valueAsNumber;
  //   console.log('employees-count', employeesCount);
  //   console.log('employee-make-per-day', employeeMakePerDay);
  //   console.log('day-reservations', dayReservations);
  let bakeryTotal = employeesCount * employeeMakePerDay;
  let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

  //   logInfo = {
  //     bakeryTotal,
  //     isBakeryGonnaMakeIt,
  //   };
  //   console.log(logInfo);

  let resultsDiv = document.getElementById('results');
  //   console.log(resultsDiv);
  resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti: </strong>${bakeryTotal} Kepalu</p>`;
  resultsDiv.innerHTML += `<p>
      
      <strong> Jai reikia speti pagaminti: </strong>${dayReservations} Kepalu
    </p>`;
  resultsDiv.innerHTML += `<p><strong>Ar spes pagaminti:</strong>${
    isBakeryGonnaMakeIt ? 'taip' : 'ne'
  }</p>`;
});

document
  .getElementById('employees-count')
  .addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;
    if (inputValue < 0) {
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      event.target.classList.remove('error');
      event.target.nextElementSibling.classList.remove('show');
    }
  });
document.getElementById('reset').addEventListener('click', function () {
  //   console.log('cliket');
  document.getElementById('employees-count').value = 0;
  document.getElementById('employee-make-per-day').value = 0;
  document.getElementById('day-reservations').value = 0;
  document.getElementById('results').innerHTML = '<p>Kolkas nieko nera.</p>';
});
