// VALIDATION FOR NEW MEMBERS
$(() => {
  $(document).on("click", "#submit", e => {
    e.preventDefault();
    let userName = $("#user_name").val();
    let newRegNo = $("#newReg").val();
    let dateOfBirth = $("#DOB").val();
    let userDept = $("#Dept").val();
    let userReasons = $("#reasons").val();
    let userPassword = $("#password_new").val();
    let checkPassword = $("#checkPass").val();
    let checkTerms = $("#check_terms").val();
    let nameError = $(".nameClass");
    if (userName === "") {
      $(nameError).addClass("error__input animated shake");
      console.log("empty");
    }
  });
});
