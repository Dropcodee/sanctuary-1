<?php
    include "./inc/head.php";
?>
<body class="bodydiv">

    <!-- DIV CONTAINER FOR THE TYPED JS CONTENT-->
    <div class="animsition">
        <div class="container">
            <div class="col s12 m12 l12">
                <div class="landing__wrapper animated bounceIn delay-1s">
                    <img src="../dist/img/Sanctuary.png" alt="Sanctuary logo" class="animated bounce" id="logoImg">
                    <div class="landing__content">
                        <span class="typed"></span>
                        <h5>MOTTO: SERVICE TO GOD</h5>

                        <a href="./Signup.php" class="animsition-link">
                            <button class="btn-large green waves-effect waves-dark"> Welcome</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
    include "./inc/scripts.php";
    ?>
    <script src="../dist/js/typesMin.js"></script>
    <script src="../dist/js/Typed.js"></script>
</body>

</html>