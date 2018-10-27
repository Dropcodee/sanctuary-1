<?php 

    if (isset($_POST['reg_no']) && !empty($_POST['reg_no'])) {
        $reg_no = $_POST['reg_no'];
        $arr = ["reg_no" => $reg_no];
        echo json_encode($arr);
    } else {
        echo '{"err": "Couldn\'t not find"}';
    }
?>
