<?php
session_start();
if (!empty($_POST['fio']) && !empty($_POST['phone'])) {
   echo "Привет " . $_POST['fio'];
} else {
   $_SESSION['message'] = "Заполняйте все поля!";
   header("Location:/");
}