// VALIDATION FOR NEW MEMBERS
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var webmailValidate = /^([\w-\.]+@(?!lmu.edu.ng)([\w-]+\.)+[\w-]{2,4})?$/;
var regValidate = /[0-9]/;
$(() => {
  $(document).on("click", "#submit", e => {
    e.preventDefault();
    let surname = $("#surname").val(),
      firstname = $("#firstname").val(),
      RegNo = $("#reg_no").val(),
      webmail = $("#webmail").val(),
      member = $("#member").val(),
      reasons = $("#reasons").val(),
      password = $("#pass").val(),
      checkPass = $("#checkPass").val();
    if (
      surname === "" ||
      firstname === "" ||
      RegNo === "" ||
      webmail === "" ||
      reasons === "" ||
      password === "" ||
      checkPass === ""
    ) {
      M.toast({
        html: "All fields required",
        classes: "toast__failed"
      });
    } else if (surname.length < 3) {
      $(".surname_err")
        .html("Surname length must be greater than 2 characters")
        .addClass("red-text");
      M.toast({
        html: "Surname length must be greater than 2 characters",
        classes: "toast__failed"
      });
    } else if (firstname.length < 3) {
      $(".firstname_err")
        .html("Firstname length too short")
        .addClass("red-text");
      M.toast({
        html: "Firstname length too short",
        classes: "toast__failed"
      });
    } else if (!regValidate.test(RegNo)) {
      $(".reg_err")
        .html("Registration number must be a number")
        .addClass("red-text");
      M.toast({
        html: "Registration number must be a number",
        classes: "toast__failed"
      });
    } else if (!emailReg.test(webmail)) {
      $(".webmail_err")
        .html("Please enter a valid webmail")
        .addClass("red-text");
      M.toast({
        html: "Please enter a valid webmail",
        classes: "toast__failed"
      });
    } else if (webmailValidate.test(webmail)) {
      $(".webmail_err")
        .html("Webmail must end with @lmu.edu.ng")
        .addClass("red-text");
      M.toast({
        html: "Webmail must end with @lmu.edu.ng",
        classes: "toast__failed"
      });
    } else if (reasons.length < 30) {
      $(".reasons_err")
        .html("Write more reasons to join, don't be shy")
        .addClass("red-text");
      M.toast({
        html: "Write more things, don't be shy",
        classes: "toast__failed"
      });
    } else if (password.length < 8) {
      $(".pass_err")
        .html("Your password too is short")
        .addClass("red-text");
      M.toast({
        html: "Your password too is short",
        classes: "toast__failed"
      });
    } else if (checkPass !== password) {
      $(".checkpass_err")
        .html("Confirm password don't match")
        .addClass("red-text");
      M.toast({
        html: "Confirm password don't match",
        classes: "toast__failed"
      });
    } else {
      var fullname = surname + firstname;
      $(".surname_err")
        .html("")
        .removeClass("red-text");
      $(".firstname_err")
        .html("")
        .removeClass("red-text");
      $(".reg_err")
        .html("")
        .removeClass("red-text");
      $(".webmail_err")
        .html("")
        .removeClass("red-text");
      $(".reasons_err")
        .html("")
        .removeClass("red-text");
      $(".pass_err")
        .html("")
        .removeClass("red-text");
      $(".checkpass_err")
        .html("")
        .removeClass("red-text");
      $("#submit").addClass("disabled");
      $("input").attr("disabled", true);
      $(".signup-loading").show();
      $.ajax({
        method: "POST",
        url: "https://sanc-server.herokuapp.com/public/add",
        data: {
          name: fullname,
          reg_no: RegNo,
          webmail: webmail,
          membership: member,
          reasons: reasons,
          password: checkPass
        },
        cache: false,
        success: res => {
          var data_signup = jQuery.parseJSON(res);
          if (data_signup.error) {
            console.log(data_signup.error);
            M.toast({
              html: data_signup.error.err_text,
              classes: "toast__failed rounded"
            });
            $("#submit")
              .html("Sign Up")
              .removeClass("disabled");
            $(".signup-loading").hide();
            $("input").attr("disabled", false);
          } else {
            console.log(data_signup.success);
            M.toast({
              html: data_signup.success.success_text,
              classes: "toast__sending rounded"
            });
            $(".signup-loading").hide();
            $("input").attr("disabled", false);
            $(".show_err").html("");
            // window.location = "login.html";
          }
        },
        error: function() {
          M.toast({
            html: "Sorry Sanctuary Unit couldn't connect to the server",
            classes: "toast__success rounded"
          });

          $("#submit")
            .html("Sign Up")
            .removeClass("disabled");
          $("input").attr("disabled", false);
          $(".signup-loading").hide();
        }
      });
    }
  });
});
// VALIDATION FOR NEW MEMBERS

// VALIDATION FOR LOGIN FORM
$(function() {
  let re, reg_no, password;
  $(document).on("keyup", "#RegNo, #password", function(e) {
    e.preventDefault();
    reg_no = $("#RegNo").val();
    password = $("#password").val();
    re = /[0-9]/;
    if (reg_no !== "") {
      $(".reg_err")
        .html("Enter Reg Number:")
        .removeClass("red-text");
      $(".inputVal")
        .addClass("success__input")
        .removeClass("error__input animated shake");
      $(".show_err").html("");
      if (!re.test(reg_no)) {
        $(".reg_err")
          .html("Reg no 1700172:")
          .addClass("red-text");
        $(".inputVal")
          .addClass("error__input animated shake")
          .removeClass("valid");
        $(".show_err").html("");
      }
      if (reg_no.length < 7) {
        $(".reg_err")
          .html("Reg no invalid:")
          .addClass("red-text");
        $(".inputVal").addClass("error__input animated shake");
        $(".show_err").html("");
      }
    }
    if (password !== "") {
      $(".pass_err")
        .html("Enter Password:")
        .removeClass("red-text");
      $(".inputVal2")
        .addClass("success__input")
        .removeClass("error__input animated shake");
      $(".show_err").html("");
      if (password.length < 8) {
        $(".pass_err")
          .html("Password length invalid:")
          .addClass("red-text");
        $(".inputVal2")
          .addClass("error__input animated shake")
          .removeClass("valid");
        $(".show_err").html("");
      }
    }
  });
  $(document).on("click", "#login", function(e) {
    e.preventDefault();
    reg_no = $("#RegNo").val();
    password = $("#password").val();
    re = /[0-9]/;
    if (reg_no === "") {
      $(".reg_err")
        .html("Reg number required:")
        .addClass("red-text active");
      $(".inputVal").addClass("error__input animated shake");
      $(".show_err").html("");
    } else if (password === "") {
      $(".pass_err")
        .html("Password required:")
        .addClass("red-text active");
      $(".inputVal2")
        .addClass("error__input animated shake")
        .removeClass("valid");
      $(".show_err").html("");
    } else if (!re.test(reg_no)) {
      $(".reg_err")
        .html("Reg no 1700172:")
        .addClass("red-text active");
      $(".inputVal")
        .addClass("error__input animated shake")
        .removeClass("valid");
      $(".show_err").html("");
    } else {
      $(".inputVal").removeClass("error__input animated shake");
      $(".inputVal2")
        .removeClass("error__input animated shake")
        .addClass("vaild");
      $("#login").addClass("disabled");
      $("input").attr("disabled", true);
      $(".signup-loading").show();
      $.ajax({
        method: "POST",
        url: "https://sanc-server.herokuapp.com/public/login",
        data: { reg_no: reg_no, password: password },
        cache: false,
        success: function(data) {
          var data_login = jQuery.parseJSON(data);
          if (data_login.error) {
            console.log(data_login.error);
            M.toast({
              html: data_login.error.err_text,
              classes: "toast__failed rounded"
            });
            $("#login")
              .html("Login")
              .removeClass("disabled");
            $(".signup-loading").hide();
            $("input").attr("disabled", false);
          } else {
            console.log(data_login.success);
            M.toast({
              html: data_login.success.success_text,
              classes: "toast__sending rounded"
            });
            $(".signup-loading").hide();
            $("input").attr("disabled", false);
            $(".show_err").html("");
            window.location = "index.html";
          }
        },
        error: function() {
          M.toast({
            html: "Sorry Sanctuary Unit couldn't connect to the server",
            classes: "toast__success rounded"
          });

          $("#login")
            .html("Login")
            .removeClass("disabled");
          $("input").attr("disabled", false);
          $(".signup-loading").hide();
        }
      });
    }
  });
});
// VALIDATION FOR LOGIN FORM
