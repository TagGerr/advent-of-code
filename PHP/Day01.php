<?php

$string = file_get_contents('../inputs/Day01.txt');

if( empty($string) ){
	exit("Unable to load input file");
}

$stringLength = strlen($string);
$floor = 0;
$basementPosition = null;

for($i = 0; $i < $stringLength; $i++){
	$floor += ($string{$i} == '(') ? 1 : -1;

	if($floor === -1 && is_null($basementPosition)){
		$basementPosition = $i + 1;
	}
}

print "
Part 1: {$floor}
Part 2: {$basementPosition}
";