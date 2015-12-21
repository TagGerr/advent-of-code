<?php

ini_set('memory_limit', '288M');

$instructions = file('../inputs/Day06.txt');

if( empty($instructions) || !is_array($instructions) ){
	exit("Unable to load input file");
}

$lights = array();
for($y = 0; $y < 1000; $y++){
	for($x = 0; $x < 1000; $x++){
		$lights[ $y ][ $x ] = 0;
	}
}
$brights = $lights;

foreach($instructions as $inst){
	$inst = trim($inst);
	preg_match('/^(?:turn )?(\w*) (\d*?),(\d*?) through (\d*?),(\d*?)$/', $inst, $matches);
	list($all, $action, $x1, $y1, $x2, $y2) = $matches;

	for($y = $y1; $y <= $y2; $y++){
		for($x = $x1; $x <= $x2; $x++){
			switch($action){
				case 'on':
					$lights[ $y ][ $x ] = 1;
					$brights[ $y ][ $x ] += 1;
					break;

				case 'off':
					$lights[ $y ][ $x ] = 0;
					$brights[ $y ][ $x ] = max(0, $brights[ $y ][ $x ] - 1);
					break;

				case 'toggle':
					$lights[ $y ][ $x ] = abs($lights[ $y ][ $x ] - 1);
					$brights[ $y ][ $x ] += 2;
					break;
			}
		}
	}
}

$lightsOn = array_sum(array_map('array_sum', $lights));
$brightness = array_sum(array_map('array_sum', $brights));

print "
Part 1: {$lightsOn}
Part 2: {$brightness}
";