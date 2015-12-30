<?php

ini_set('memory_limit', '512M');
$rules = file('../inputs/Day13.txt');

if( empty($rules) || !is_array($rules) ){
	exit("Unable to load input file");
}

$rules = array_map('trim', $rules);

$options = array();
foreach($rules as $rule){
	preg_match('/([a-z]+) would (gain|lose) ([0-9]+) happiness units by sitting next to ([a-z]+)\./i', $rule, $matches);
	$person = $matches[1];
	$neighbor = $matches[4];
	$happiness = $matches[3] * ($matches[2] === 'gain' ? 1 : -1);

	if( empty($options[ $person ]) ){
		$options[ $person ] = array();
	}
	$options[ $person ][ $neighbor ] = (int)$happiness;
}
$people = array_keys($options);

$originalBest = findBestArrangement($people, $options);

foreach($people as $person){
	$options[ $person ]['self'] = 0;
	$options['self'][ $person ] = 0;
}
$people = array_keys($options);

$includingMeBest = findBestArrangement($people, $options);

print "
Part 1: {$originalBest}
Part 2: {$includingMeBest}
";

function findBestArrangement($people, $options){
	$best = 0;
	$arrangements = permute($people);
	foreach($arrangements as $seating){
		$total = 0;
		$seatCount = count($seating);
		for($s = 0; $s < $seatCount; $s++){
			$left = $s - 1;
			if($left < 0){
				$left = $seatCount - 1;
			}

			$right = $s + 1;
			if($right >= $seatCount){
				$right = 0;
			}
			
			$total += $options[ $seating[$s] ][ $seating[$left] ] + $options[ $seating[$s] ][ $seating[$right] ];
		}
		$best = max($best, $total);
	}
	return $best;
}

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
		unset($copy, $head, $remaining, $tail);
	}
	return $permutations;
}