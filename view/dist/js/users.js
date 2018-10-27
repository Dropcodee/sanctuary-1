const users = [
  {
    userDetails: {
      name: "Abraham Ugbeshe",
      webmail: "ugbeshe.abraham@lmu.edu.ng",
      reg_no: "1700172"
    }
  }
];
$(() => {
  console.log(users);
  $("#name").html(users[0].userDetails.name);
  $("#email").html(users[0].userDetails.webmail);
});
