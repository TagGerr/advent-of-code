<?php

$input = file_get_contents('../inputs/Day12.txt');

$json = json_decode($input);

$part1 = sumJson($json);
$part2 = sumJson($json, true);

print "
Part 1: {$part1}
Part 2: {$part2}
";

function sumJson($element, $noRed = false){
	$sum = 0;

	if( is_numeric($element) ){
		return (int)$element;
	}

	if( is_array($element) ){
		foreach($element as $ak => $av){
			$sum += sumJson($av, $noRed);
		}
	}

	if( is_object($element) ){
		foreach($element as $ok => $ov){
			if($noRed && $ov === 'red'){
				return 0;
			}
			$sum += sumJson($ov, $noRed);
		}
	}

	return $sum;
}