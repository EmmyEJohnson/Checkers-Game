//dropdowns for .email-list and .rules

$(':not(#myDropdown)').click(function(e) {
  $('#myDropdown').hide();
});

$("#myDropdown").hide();
$(".dropbtn").click(function(e){
  e.stopPropagation
  $("#myDropdown").show('slow');
})

