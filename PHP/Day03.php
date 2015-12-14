<?php

$directions = file_get_contents('../inputs/Day03.txt');

if( empty($directions) ){
	exit("Unable to load input file");
}

$directionCount = strlen($directions);
$santaVisits = 0;
$bothVisits = 0;

$houses = array(
	'all' => array('0,0' => 1),
	'santa' => array('0,0' => 1),
	'robot' => array('0,0' => 1),
);
$positions = array(
	'all' => array('x' => 0, 'y' => 0),
	'santa' => array('x' => 0, 'y' => 0),
	'robot' => array('x' => 0, 'y' => 0),
);

for($d = 0; $d < $directionCount; $d++){
	$delta = array(
		'x' => 0,
		'y' => 0,
	);
	switch($directions{$d}){
		case '^':
			$delta['y'] = 1;
			break;

		case 'v':
			$delta['y'] = -1;
			break;

		case '>':
			$delta['x'] = 1;
			break;

		case '<':
			$delta['x'] = -1;
			break;
	}
	$positions['all']['x'] += $delta['x'];
	$positions['all']['y'] += $delta['y'];
	$key = $positions['all']['x'] . ',' . $positions['all']['y'];
	$houses['all'][ $key ] = isset($houses['all'][ $key ]) ? $houses['all'][ $key ] + 1 : 1;

	$visitor = ($d % 2 == 0) ? 'santa' : 'robot';
	$positions[ $visitor ]['x'] += $delta['x'];
	$positions[ $visitor ]['y'] += $delta['y'];
	$key = $positions[ $visitor ]['x'] . ',' . $positions[ $visitor ]['y'];
	$houses[ $visitor ][ $key ] = isset($houses[ $visitor ][ $key ]) ? $houses[ $visitor ][ $key ] + 1 : 1;
}
$santaVisits = count($houses['all']);
$bothVisits = count(array_merge($houses['santa'], $houses['robot']));

print "
Part 1: {$santaVisits}
Part 2: {$bothVisits}
";