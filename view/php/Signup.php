<?php
    include "./inc/head.php";
?>

<body id="signup__body">
    <!-- NAVBAR SECTION-->
    <div class="animsition">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper white">
                    <a href="./index.php" class="brand-logo center black-text">
                        Sanctuary Unit
                    </a>
                    <ul class="right">
                        <li>
                            <a href="./login.php" class="waves-effect waves-light btn green animsition-link">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- NAVBAR SECTION-->
        <!-- FORM FOR NEW MEMBER-->
        <div class="col s12 m12 l12">
            <div class="card card__form">
                <div class="top__section green">
                    <div class="facebook">
                        <a class="fa fa-facebook" to="#"></a>
                    </div>
                </div>
                <div class="avatar">
                    <img src="../dist/img/avatar.svg" alt="user avatar" class="circle responsive-img" />
                </div>
                <div class="card-content">
                    <form action="">
                        <div class="row">
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input type="text" class="validate" id="surname">
                                    <span class="helper-text surname_err"></span>
                                    <label for="icon_prefix">Surname:</label>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_firstname">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input type="text" class="validate" id="firstname">
                                    <span class="helper-text firstname_err"></span>
                                    <label for="icon_prefix">First name:</label>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_reg">
                                    <i class="material-icons prefix">assignment_ind</i>
                                    <label for="RegNo">Enter Reg Number:</label>
                                    <input type="text" id="reg_no" class="validate" maxlength="7" />
                                    <span class="helper-text reg_err"></span>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_webmail">
                                    <i class="material-icons prefix">assignment_ind</i>
                                    <label for="webmail">Webmail:</label>
                                    <input type="email" id="webmail" class="validate" />
                                    <span class="helper-text webmail_err"></span>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field">
                                    <i class="material-icons prefix">account_circle</i>
                                    <select name="member" id="member" style="margin: 0px;">
                                        <option value="New Member">New Member</option>
                                        <option value="Existing Member">Existing Member</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_reasons">
                                    <i class="material-icons prefix"> bubble_chart</i>
                                    <textarea id="reasons" class="materialize-textarea"></textarea>
                                    <span class="helper-text reasons_err"></span>
                                    <label for="reasons">
                                        Reasons for joining
                                    </label>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_password">
                                    <i class="material-icons prefix"> lock_outline</i>
                                    <label htmlFor="password" class="active">
                                        Enter Password:
                                    </label>
                                    <input type="password" id="pass" class="validate" />
                                    <span class="helper-text pass_err"></span>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_checkPass">
                                    <i class="material-icons prefix"> lock_outline</i>
                                    <label htmlFor="checkPass" class="active">
                                        Re-Type Password:
                                    </label>
                                    <input type="password" id="checkPass" class="validate" />
                                    <span class="helper-text checkpass_err"></span>
                                </div>
                            </div>
                            <div class="col s12">
                                <span class="helper-text err center"></span>
                            </div>

                        </div>
                        <button class="btn waves-effect waves-light green right large" id="submit">
                            Sign Up
                        </button>
                        <span class="signup-loading"></span>
                    </form>
                </div>
            </div>
        </div>
        <!-- FORM FOR NEW MEMBER-->
        <!-- FOOTER SECTION-->
        <?php
        include "./inc/footer.php"
        ?>
        <!-- FOOTER SECTION-->
    </div>
    <!-- JAVASCRIPTS FILES HERE -->
    <?php
    include "./inc/scripts.php";
    ?>
    <script src="../dist/js/Api.js"></script>
</body>

</html>