<?php

$sizes = file('../inputs/Day17.txt');

if( empty($sizes) || !is_array($sizes) ){
	exit("Unable to load input file");
}

$eggnog = 150;
$length = pow(2, count($sizes));

$part1 = 0;
$ways = array();
for($i = 1; $i < $length; $i++){
	$keys = array_filter(str_split(str_pad(decbin($i), 20, '0', STR_PAD_LEFT)));
	$total = 0;
	foreach($keys as $key => $junk){
		$total += (int)$sizes[ $key ];
	}
	if($total == $eggnog){
		$part1++;
		$countKey = count($keys);
		$ways[ $countKey ] = isset($ways[ $countKey ]) ? $ways[ $countKey ] + 1 : 1;
	}
}
ksort($ways);
$part2 = array_shift($ways);

print "
Part 1: {$part1}
Part 2: {$part2}
";