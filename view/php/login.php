<?php
    include "./inc/head.php";
?>

<body>
    <!-- NAVBAR SECTION-->
<div class="animsition">
    <nav>
        <div class="nav-wrapper white">
            <a href="./index.php" class="brand-logo center black-text">
                Sanctuary Unit
            </a>
            <ul class="right">
                <li>
                    <a href="./Signup.php" class="waves-effect waves-light btn green">
                        Signup
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- NAVBAR SECTION-->
    <!-- FORM FOR NEW MEMBER-->
    <div class="col s12 m12 l12">
        <div class="container">
            <div class="card card__form animated">
                <div class="top__section green">
                    <div class="facebook">
                        <a class="fa fa-facebook" to="#"></a>
                    </div>
                </div>
                <div class="avatar">
                    <img src="../dist/img/avatar.svg" alt="user avatar" class="circle responsive-img" />
                </div>
                <div class="card-content">
                    <form action="POST">
                        <div class="input-field inputVal disabled">
                            <i class="material-icons prefix">assignment_ind</i>
                            <label for="RegNo" class="">Enter Reg Number:</label>
                            <input name="
                                RegNo" type="text" id="RegNo" class="validate"
                                maxlength="7" />
                            <span class="reg_err helper-text "></span>
                        </div>

                        <div class="input-field inputVal2">
                            <i class="material-icons prefix"> lock_outline</i>
                            <label for="password" class="">
                                Enter Password:
                            </label>
                            <input name="password" type="password" id="password" class="validate" />
                            <span class="helper-text pass_err"></span>
                        </div>
                        <button class="btn waves-effect waves-light green" id="login">
                            Login
                        </button>
                        <span class="signup-loading"></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    <?php
    include "./inc/footer.php";
    ?>
    <!-- JAVASCRIPTS FILES HERE -->
    <?php
    include "./inc/scripts.php";
    ?>
    <script src="../dist/js/Api.js"></script>
</body>

</html>