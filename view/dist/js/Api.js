// VALIDATION FOR NEW MEMBERS
$("#myForm").submit(function(e) {
  e.preventDefault();
  // get all the inputs into an array.
  var $inputs = $("#myForm :input");

  // not sure if you wanted this, but I thought I'd add it.
  // get an associative array of just the values.
  let values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
    console.log(values);
  });
});
$(() => {
  $(document).on("keyup", "#signup", () => {
    let userName = $("#userName");
  });
});
