<?php	
	require __DIR__ . '/vendor/autoload.php';
	use Google\Cloud\Translate\TranslateClient;

	$cleverbotAPIKey = "CC3egBwqU_NtNp0dHBm9bYqSmJg";

	$translate = new TranslateClient([
	    'projectId' => 'rapid-pact-174516'
	]);

	$info = json_decode(file_get_contents('php://input'), true);
	$text = $info["text"];
	$target = $info["lang"];

	$translation = $translate->translate($text, [
	    'target' => 'en'
	]);

	$response = "uh oh"; # this should be cleverbot connection
	$clevResponse = file_get_contents("https://www.cleverbot.com/getreply?key=" . $cleverbotAPIKey . "&input=" . $translation["text"]);
	$clevText = json_decode($clevResponse, true)["output"] or $response;

	$translation = $translate->translate($clevText, [
	    'target' => $target
	]);

	echo $translation['text'];
?>

