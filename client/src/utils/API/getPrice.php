<?php

$url = "http://localhost:8080/Bank-Widgets/client/src/utils";

$url_components = parse_url($url);

parse_str($url_components['query'], $params); 

$homePrice = $params["homePrice"];
$downPayment = $params["downPayment"];
$interestRate = $params["interestRate"];

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