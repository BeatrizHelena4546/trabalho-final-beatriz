$(document).ready(function () {
  $('#horaInput').mask('99:99');
  $('#dataInput').mask('99/99/9999');

  ClassicEditor.create(document.querySelector("#myTextarea")).catch(error => {
    console.error(error);
  });

  $("#titleInput, #horaInput, #dataInput").on('change', function () {
    if ($("#titleInput").val() !== '' && $('#horaInput').val() !== '' && $('#dataInput').val() !== '' && $('#horaInput').val() !== ':' && $('#dataInput').val() !== '//') {

      var data = new Date();
      data.setDate($('#dataInput').val().split('/')[0]);
      data.setMonth(($('#dataInput').val().split('/')[1]) - 1);
      data.setFullYear($('#dataInput').val().split('/')[2]);
      data.setHours($('#horaInput').val().split(':')[0])
      data.setMinutes($('#horaInput').val().split(':')[1])

      var today = new Date();
      today.setHours(today.getHours() + 1);

      console.log(data);
      console.log(today);      

      if (data >= today) {
        $('#AssignButton').removeClass("buttonDisabled");
        $('#AssignButton').prop('disabled', false);
      } else {
        $('#AssignButton').addClass("buttonDisabled");
        $('#AssignButtonut').prop('disabled', true);
      }


    } else {
      $('#AssignButton').addClass("buttonDisabled");
      $('#AssignButtonut').prop('disabled', true);
    }
  });
})