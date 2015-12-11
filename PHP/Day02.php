<?php

$presents = file('../inputs/Day02.txt');

if( empty($presents) || !is_array($presents) ){
	exit("Unable to load input file");
}

$paper = 0;
$ribbon = 0;
foreach($presents as $present){
	preg_match('/^([0-9]*)x([0-9]*)x([0-9]*)$/', $present, $matches);
	array_shift($matches);
	sort($matches);
	list($length, $width, $height) = $matches;
	$paper += (2 * $length * $width) + (2 * $width * $height) + (2 * $height * $length) + ($length * $width);
	$ribbon += (2 * $length) + (2 * $width) + ($length * $width * $height);
}

print "
Part 1: {$paper}
Part 2: {$ribbon}
";