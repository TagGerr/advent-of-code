<?php

$words = file('../inputs/Day05.txt');

if( empty($words) || !is_array($words) ){
	exit("Unable to load input file");
}

$firstRules = 0;
$secondRules = 0;
foreach($words as $word){
	$word = trim($word);

	if(preg_match_all('/[aeiou]/', $word) >= 3){
		if( preg_match('/([a-z])\1/', $word) ){
			if( !preg_match('/(ab|cd|pq|xy)/', $word) ){
				$firstRules++;
			}
		}
	}

	if( preg_match('/([a-z]{2}).*?\1/', $word) ){
		if( preg_match('/([a-z]).\1/', $word) ){
			$secondRules++;
		}
	}
}

print "
Part 1: {$firstRules}
Part 2: {$secondRules}
";