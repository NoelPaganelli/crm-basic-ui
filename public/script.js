$("document").ready(function() {

  $("#count-contact").html($(".contact").length);
  if($(".contact").length > 1) {
    $("#contact-plurial").html("s");
  }
  if($(".contact").length <=1 ) {
    $("#contact-plurial").html("");
  }

  $('.avatar').click(function(){
     $(this).closest("table").find(".data-contact").toggle(1000);
  });

  $('#add-form').submit(function(event){
      if($('#add-firstname').val().length == 0 || $('#add-lastname').val().length == 0 || $('#add-email').val().length == 0 || $('#add-phone').val().length == 0) {
        $("#add-error").html('<div class="alert alert-danger" role="alert">Vous devez renseigner tout les champs du formulaire </div>');
        event.preventDefault();
      } else if ($('#add-phone').val().length < 10) {
        $("#add-error").html('<div class="alert alert-danger" role="alert">Vous devez mettre un numéro de téléphone valide</div>');
        event.preventDefault();
      }
  });

  $('.contact').find(".fa-pencil").click(function(){
    console.log($(this).data("position"));
    console.log($(this).data("property"));

    $("#update-property").val($(this).data("property"));
    $("#update-position").val($(this).data("position"));
  });

})
