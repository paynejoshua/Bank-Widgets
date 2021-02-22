<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, Data');
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);
    echo "received data";
    print_r($data);

$homePrice = $data -> homePrice;
$downPayment = $data -> downPayment;
$interestRate = $data -> interestRate;

$client = new http\Client;
$request = new http\Client\Request;



$request->setRequestUrl('https://shaisachs-mortgage-payments-v1.p.rapidapi.com/payments');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString([
	'price' => $homePrice,
	'downPayment' => $downPayment,
	'interestRate' => $interestRate
]));

$request->setHeaders([
	'x-rapidapi-key' => '21acf3ee9cmsh43ea2bb31469b34p1aac81jsn732637b64531',
	'x-rapidapi-host' => 'shaisachs-mortgage-payments-v1.p.rapidapi.com'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();

