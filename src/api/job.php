<?php

header("Content-Type: application/json");

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$position = $_POST["position"];
$message = $_POST["message"];

// رفع الملف
$cvPath = "";

if (isset($_FILES["cv"])) {

    $fileName = time() . "_" . $_FILES["cv"]["name"];
    $target = "../uploads/" . $fileName;

    move_uploaded_file($_FILES["cv"]["tmp_name"], $target);

    $cvPath = $target;
}

// حفظ البيانات (مبدئيًا في ملف)
$file = "../applications.txt";

$log = "Name: $name | Email: $email | Phone: $phone | Position: $position | CV: $cvPath | Message: $message\n";

file_put_contents($file, $log, FILE_APPEND);

// إرسال إيميل (اختياري)
mail(
    "your-email@gmail.com",
    "New Job Application",
    $log
);

echo json_encode([
    "success" => true
]);