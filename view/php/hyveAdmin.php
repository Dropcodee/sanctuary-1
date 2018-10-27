<?php
    include "./inc/head.php";
?>

<body>
    <!-- Navbar goes here -->
    <div class="navbar-fixed">
        <nav class="white">
            <!-- navbar content here  -->
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large black-text"><i class="material-icons">menu</i></a>
        </nav>
    </div>
    <!-- Page Layout here -->

    <ul id="slide-out" class="sidenav">
        <li>
            <div class="user-view">
                <div class="background">
                    <img src="../dist/img/bgnav.jpg">
                </div>
                <a href="#user"><img class="circle user__logo" src="../dist/img/avatar.svg"></a>
                <a href="#name"><span class="white-text name" id="name"></span></a>
                <a href="#email"><span class="white-text email" id="email"></span></a>
            </div>
        </li>
        <li><a href="#profile__edit"><i class="material-icons">cloud</i>Edit Profile</a></li>
        <li><a href="#attendance"><i class="material-icons">people_outline</i> Members Attendance</a></li>
        <li>
            <div class="divider"></div>
        </li>
        <li><a href="#allusers"><i class="material-icons">people</i>Members</a></li>
        <li><a class="waves-effect" href="#!">
                <i class="material-icons">lock_outline</i>Logout</a></li>
    </ul>

    <div class="update__wrapper">
        <!-- EDIT PROFILE BEGINS-->
        <div class="col s12 m12 l12">
            <header id="profile__edit" class="center-align section scrollspy">
                <h4>Edit Your Profile.</h4>
                <hr class="custom__divider" />
            </header>
            <div class="card card__form animated fadeInUp delay-1s">
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
                                <div class="input-field">
                                    <i class="material-icons prefix">business</i>
                                    <select>
                                        <option value="" disabled selected>Select Hall Of Residence</option>
                                        <option value="1">Daniel Hall</option>
                                        <option value="2">Abraham Hall</option>
                                        <option value="3">Joseph Hall</option>
                                        <option value="3">Issac Hall</option>
                                        <option value="3">Dorcas Hall</option>
                                        <option value="3">Sarah Hall</option>
                                        <option value="3">Abigal Hall</option>
                                        <option value="3">Deborah Hall</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field inputVal_password">
                                    <i class="material-icons prefix">business</i>
                                    <input type="text" id="room_no" class="validate" />
                                    <label for="room_no" class="active">
                                        Enter Room Number:
                                    </label>
                                    <span class="helper-text room_err"></span>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field">
                                    <i class="material-icons prefix">wc</i>
                                    <select>
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field">
                                    <i class="material-icons prefix">cake</i>
                                    <label for="Date_of_birth">Date Of Birth</label>
                                    <input type="text" class="datepicker">
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field">
                                    <i class="material-icons prefix">class</i>
                                    <select>
                                        <option value="" disabled selected>Select Department</option>
                                        <option value="1">Daniel Hall</option>
                                        <option value="2">Abraham Hall</option>
                                        <option value="3">Joseph Hall</option>
                                        <option value="3">Issac Hall</option>
                                        <option value="3">Dorcas Hall</option>
                                        <option value="3">Sarah Hall</option>
                                        <option value="3">Abigal Hall</option>
                                        <option value="3">Deborah Hall</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col s12 m6 l6">
                                <div class="input-field">
                                    <i class="material-icons prefix">import_export</i>
                                    <select>
                                        <option value="" disabled selected>Select Level</option>
                                        <option value="1">100L</option>
                                        <option value="2">200L</option>
                                        <option value="3">300L</option>
                                        <option value="3">400L</option>
                                        <option value="3">500L</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col s12">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text">
                                        <span class="helper-text">Place your profile picture here</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button class="btn-large waves-effect waves-light green right large" id="submit">
                            Update
                        </button>
                        <span class="signup-loading"></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- EDIT PROFILE ENDS-->

    <!--ATTENDANCE PORTAL FOR USERS-->
    <div class="attendance__wrapper">
        <div class="col s12 m12 l12">
            <div class="container">
                <header id="attendance" class="center-align section scrollspy">
                    <h3>Member Attendance.</h3>
                    <hr class="custom__divider">
                </header>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registration Number</th>
                            <th>Webmail</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Abraham Ugbeshe</td>
                            <td>1700172</td>
                            <td>ugbeshe.abraham@lmu.edu.ng</td>
                            <td>40%</td>
                        </tr>
                        <tr>
                            <td>Owolabi Jousha</td>
                            <td>1600172</td>
                            <td>owolabi.oluwasegun@lmu.edu.ng</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td>Simon Joseph</td>
                            <td>1500335</td>
                            <td>joseph.simon@lmu.edu.ng</td>
                            <td>20%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--ATTENDANCE PORTAL FOR USERS-->

    <!-- ALL UNIT MEMBERS -->
    <div class="users__wrapper">
        <div class="col s12 m12 l12">
            <div class="container">
                <header id="allusers" class="center-align section scrollspy">
                    <h3>ALL UNIT MEMBERS.</h3>
                    <hr class="custom__divider">
                </header>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registration Number</th>
                            <th>Webmail</th>
                            <th>Date Of Birth</th>
                            <th>Hall Of Residence</th>
                            <th>Room No</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Abraham Ugbeshe</td>
                            <td>1700172</td>
                            <td>ugbeshe.abraham@lmu.edu.ng</td>
                            <td>09-24-1999</td>
                            <td>Abraham Hall</td>
                            <td>F302</td>

                        </tr>
                        <tr>
                            <td>Owolabi Jousha</td>
                            <td>1600172</td>
                            <td>owolabi.oluwasegun@lmu.edu.ng</td>
                            <td>09-24-1999</td>
                            <td>Abraham Hall</td>
                            <td>B305</td>

                        </tr>
                        <tr>
                            <td>Simon Joseph</td>
                            <td>1500335</td>
                            <td>joseph.simon@lmu.edu.ng</td>
                            <td>09-24-1999</td>
                            <td>Abraham Hall</td>
                            <td>E302</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- ALL UNIT MEMBERS -->
    <!-- Footer-->
    <?php
    include "./inc/footer.php";
    ?>
    <!-- Footer-->
    </div>
    <?php
    include "./inc/scripts.php";
    ?>
    <script src="../dist/js/users.js"></script>
</body>

</html>