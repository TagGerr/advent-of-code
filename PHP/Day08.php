<?php

$strings = file('../inputs/Day08.txt');

if( empty($strings) || !is_array($strings) ){
	exit("Unable to load input file");
}

$strings = array_map('trim', $strings);
$totalLength = array_sum(array_map('strlen', $strings));

$evalStrings = array();
$expandedStrings = array();
foreach($strings as $string){
	$evalStrings[] = eval('return ' . $string . ';');
	$expandedStrings[] = '"' . addslashes($string) . '"';
}

$evalLength = array_sum(array_map('strlen', $evalStrings));
$expandedLength = array_sum(array_map('strlen', $expandedStrings));

$part1 = $totalLength - $evalLength;
$part2 = $expandedLength - $totalLength;

print "
Part 1: {$part1}
Part 2: {$part2}
";