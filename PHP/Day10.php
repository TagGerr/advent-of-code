<?php

$number = file_get_contents('../inputs/Day10.txt');

if( empty($number) ){
	exit("Unable to load input file");
}

function lookAndSay($number) {
	$lastDigit = null;
	$digitCount = 1;
	$output = '';
	for($d = 0; $d < strlen($number); $d++){
		$digit = $number{$d};

		if($digit == $lastDigit){
			$digitCount++;
			continue;
		}

		if( !is_null($lastDigit) ){
			$output .= $digitCount . $lastDigit;
		}

		$lastDigit = $digit;
		$digitCount = 1;
	}
	$output .= $digitCount . $lastDigit;
	return $output;
}

for($c = 0; $c < 40; $c++){
	$number = lookAndSay($number);
}

$after40 = strlen($number);

for($c = 0; $c < 10; $c++){
	$number = lookAndSay($number);
}

$after50 = strlen($number);

print "
Part 1: {$after40}
Part 2: {$after50}
";