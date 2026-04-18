<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// SMTP Configuration
$smtp_host = "w0210a67.kasserver.com";
$smtp_port = 465; // SSL
$smtp_user = "kontakt@meine2026.de";
$smtp_pass = "Nm@VKU-MCrHhQaG0vPHr";
$from_email = "kontakt@meine2026.de";
$from_name = "Tobias Nadjib Webseite";
// $to_email = "ankit.kumar221099@gmail.com";
$to_email = "tobi@meine2026.de";
$cc_email = "digamber@meine2026.de";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Only POST requests allowed"]);
    exit;
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON data"]);
    exit;
}

$type = $data["type"] ?? "kontakt";
$firstName = $data["firstName"] ?? "";
$lastName = $data["lastName"] ?? "";
$email = $data["email"] ?? "";
$message = $data["message"] ?? "";
$participationOptions = $data["participationOptions"] ?? [];
$donationAmount = $data["donationAmount"] ?? "";

$typeLabels = [
    "kontakt" => "Kontaktanfrage",
    "spenden" => "Spendenanfrage",
    "volunteer" => "Mitmachen / Volunteer",
    "event" => "Event-Anmeldung",
];

$title = $typeLabels[$type] ?? "Neue Nachricht";
$subject = $title . ": " . $firstName . " " . $lastName;
$fullName = trim($firstName . " " . $lastName);

// Generate details HTML
$detailsHtml = "";
if ($type === "spenden" && !empty($donationAmount)) {
    $detailsHtml .= "
      <tr>
        <td style=\"padding: 10px; border-bottom: 1px solid #eee;\"><strong>Gewünschter Spendenbetrag:</strong></td>
        <td style=\"padding: 10px; border-bottom: 1px solid #eee; color: #E30613; font-weight: bold;\">$donationAmount</td>
      </tr>
    ";
}

if ($type === "volunteer" && !empty($participationOptions)) {
    $optionsArr = [];
    foreach ($participationOptions as $opt) {
        if ($opt === "info") $optionsArr[] = "Informationen erhalten";
        elseif ($opt === "help") $optionsArr[] = "Mithelfen";
        elseif ($opt === "ideas") $optionsArr[] = "Ideen einbringen";
        else $optionsArr[] = $opt;
    }
    $options = implode(", ", $optionsArr);
    
    $detailsHtml .= "
      <tr>
        <td style=\"padding: 10px; border-bottom: 1px solid #eee;\"><strong>Interessen:</strong></td>
        <td style=\"padding: 10px; border-bottom: 1px solid #eee;\">$options</td>
      </tr>
    ";
}

$messageBlock = "";
if (!empty($message)) {
    $escapedMessage = htmlspecialchars($message);
    $formattedMessage = nl2br($escapedMessage);
    $messageBlock = "
                <div style=\"margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #E30613; border-radius: 4px;\">
                  <strong style=\"display: block; margin-bottom: 5px;\">Nachricht:</strong>
                  <p style=\"margin: 0; white-space: pre-wrap;\">$formattedMessage</p>
                </div>
    ";
}

$html_content = "
<!DOCTYPE html>
<html lang=\"de\">
<head>
  <meta charset=\"UTF-8\">
</head>
<body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9;\">
  <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden;\">
    <thead>
      <tr>
        <th style=\"background-color: #003056; color: #ffffff; padding: 20px; text-align: left;\">
          <h1 style=\"margin: 0; font-size: 24px;\">Tobias Nadjib 2026</h1>
          <p style=\"margin: 5px 0 0; font-weight: normal; opacity: 0.8;\">$title</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style=\"padding: 30px;\">
          <p style=\"margin-top: 0;\">Hallo Team,</p>
          <p>Es ist eine neue <strong>$title</strong> über die Webseite eingegangen:</p>
          
          <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin: 20px 0; border: 1px solid #eee; border-collapse: collapse;\">
            <tr>
              <td style=\"padding: 10px; border-bottom: 1px solid #eee; width: 40%;\"><strong>Name:</strong></td>
              <td style=\"padding: 10px; border-bottom: 1px solid #eee;\">$fullName</td>
            </tr>
            <tr>
              <td style=\"padding: 10px; border-bottom: 1px solid #eee;\"><strong>E-Mail:</strong></td>
              <td style=\"padding: 10px; border-bottom: 1px solid #eee;\"><a href=\"mailto:$email\" style=\"color: #003056;\">$email</a></td>
            </tr>
            $detailsHtml
          </table>

          $messageBlock

          <p style=\"margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 15px;\">
            Diese E-Mail wurde automatisch über das Kontaktformular auf <a href=\"https://meine2026.de\" style=\"color: #888;\">meine2026.de</a> gesendet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
";

function send_smtp_email($host, $port, $user, $pass, $from, $to, $cc, $subject, $html) {
    $timeout = 10;
    $socket = fsockopen("ssl://" . $host, $port, $errno, $errstr, $timeout);
    
    if (!$socket) {
        return "Socket Error: $errstr ($errno)";
    }

    $responses = [];
    function get_response($socket) {
        $res = "";
        while ($str = fgets($socket, 515)) {
            $res .= $str;
            if (substr($str, 3, 1) === " ") break;
        }
        return $res;
    }

    $responses[] = get_response($socket); // 220
    
    fwrite($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    $responses[] = get_response($socket); // 250
    
    fwrite($socket, "AUTH LOGIN\r\n");
    $responses[] = get_response($socket); // 334
    
    fwrite($socket, base64_encode($user) . "\r\n");
    $responses[] = get_response($socket); // 334
    
    fwrite($socket, base64_encode($pass) . "\r\n");
    $responses[] = get_response($socket); // 235
    
    fwrite($socket, "MAIL FROM: <$from>\r\n");
    $responses[] = get_response($socket); // 250
    
    fwrite($socket, "RCPT TO: <$to>\r\n");
    $responses[] = get_response($socket); // 250

    if (!empty($cc)) {
        fwrite($socket, "RCPT TO: <$cc>\r\n");
        $responses[] = get_response($socket); // 250
    }
    
    fwrite($socket, "DATA\r\n");
    $responses[] = get_response($socket); // 354
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: Tobias Nadjib Website <$from>" . "\r\n";
    $headers .= "To: $to" . "\r\n";
    if (!empty($cc)) {
        $headers .= "Cc: $cc" . "\r\n";
    }
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=" . "\r\n";
    $headers .= "Date: " . date("r") . "\r\n";
    
    fwrite($socket, $headers . "\r\n" . $html . "\r\n.\r\n");
    $responses[] = get_response($socket); // 250
    
    fwrite($socket, "QUIT\r\n");
    fclose($socket);
    
    foreach ($responses as $resp) {
        $code = substr($resp, 0, 3);
        if ($code[0] >= 4) return "SMTP Error: $resp";
    }
    
    return true;
}

$result = send_smtp_email($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_email, $to_email, $cc_email, $subject, $html_content);

if ($result === true) {
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send email", "error" => $result]);
}
?>
