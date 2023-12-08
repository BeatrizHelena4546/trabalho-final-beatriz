function validateTime(event) {
  const currentDateTime = new Date();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const invalid = document.getElementById('invalid');

  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);

  const dateTime = new Date(year, month - 1, day, hours, minutes);

  const oneHourFromNow = new Date(currentDateTime);
  oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);

  if (dateTime <= oneHourFromNow) {
      invalid.style.display = 'flex';
  } else {
      invalid.style.display = 'none';
      const form = document.querySelector('form');
      if (form.checkValidity()) {
          form.submit();
      } else {
          
          form.reportValidity();
      }
  }

  
  event.preventDefault();
}

function validateTask() {

    var tituloTarefa = document.getElementById('title').value;

    if (tituloTarefa.trim() === '') {
      document.getElementById('title').classList.add('campo-invalido');
      document.getElementById('mensagemErroTitulo').textContent = 'The title of the task is required.';
    } else {
      document.getElementById('title').classList.remove('campo-invalido');
      document.getElementById('mensagemErroTitulo').textContent = '';
    }
  }