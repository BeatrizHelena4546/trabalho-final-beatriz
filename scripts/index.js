$( document ).ready(function() {
  $('#horaInput').mask('99:99');
  $('#dataInput').mask('99/99/9999');

  ClassicEditor.create(document.querySelector("#myTextarea")).catch(error => {
    console.error(error);
  });

  $("#titleInput, #horaInput, #dataInput").on('change', function(){
    if($("#titleInput").val() !== '' && $('#horaInput').val() !== '' && $('#dataInput').val() !== '' && $('#horaInput').val() !== ':' && $('#dataInput').val() !== '//'){
      $('#AssignButton').removeClass( "buttonDisabled" );
      $('#AssignButton').prop('disabled', false);
    }else{
      $('#AssignButton').addClass( "buttonDisabled" );
      $('#AssignButtonut').prop('disabled', true);
    }
  });
})