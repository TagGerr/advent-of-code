<?php

$paths = file('../inputs/Day09.txt');

if( empty($paths) || !is_array($paths) ){
	exit("Unable to load input file");
}

$paths = array_map('trim', $paths);

$places = array();
$times = array();
foreach($paths as $path){
	list($source, $to, $dest, $eq, $time) = explode(' ', $path);
	if( !in_array($source, $places) ){
		$places[] = $source;
	}
	if( !in_array($dest, $places) ){
		$places[] = $dest;
	}

	$times[ $source ][ $dest ] = $time;
	$times[ $dest ][ $source ] = $time;
}

$allPaths = permute($places);

$distances = array();
foreach($allPaths as $path){
	$distance = 0;
	for($i = 1; $i < count($path); $i++){
		$distance += $times[ $path[ $i - 1 ] ][ $path[ $i ] ];
	}
	$distances[] = $distance;
}

$shortestPath = min($distances);
$longestPath = max($distances);

print "
Part 1: {$shortestPath}
Part 2: {$longestPath}
";


function permute($list) {
	if(count($list) == 1){
		return array($list);
	}

	$permutations = array();
	for($l = 0; $l < count($list); $l++){
		$copy = $list;
		$head = array_splice($copy, $l, 1);
		$remaining = permute($copy);
		foreach($remaining as $tail){
			$permutations[] = array_merge($head, $tail);
		}
	}
	return $permutations;
}