<?php

$input = file('../inputs/Day16.txt');

if( empty($input) || !is_array($input) ){
	exit("Unable to load input file");
}

$part1 = 0;
$part2 = 0;

$options = array(
	'children'		=>	3,
	'cats'			=>	7,
	'samoyeds'		=>	2,
	'pomeranians'	=>	3,
	'akitas'		=>	0,
	'vizslas'		=>	0,
	'goldfish'		=>	5,
	'trees'			=>	3,
	'cars'			=>	2,
	'perfumes'		=>	1,
);

foreach($input as $aunt){
	$score = 0;
	$exact = 0;

	$aunt = trim($aunt);
	list($sue, $rest) = explode(': ', $aunt, 2);
	list($name, $number) = explode(' ', $sue);
	$compounds = explode(', ', $rest);

	foreach($compounds as $compound){
		list($item, $count) = explode(': ', $compound);
		if( isset($options[ $item ]) ){
			switch($item){
				case 'cats':
				case 'trees':
					if($count > $options[ $item ]){
						$exact++;
					}
					break;

				case 'pomeranians':
				case 'goldfish':
					if($count < $options[ $item ]){
						$exact++;
					}
					break;

				default:
					if($count == $options[ $item ]){
						$exact++;
					}
			}

			if($count == $options[ $item ]){
				$score++;
			}
		}
	}

	if($score == 3){
		$part1 = $number;
	}

	if($exact == 3){
		$part2 = $number;
	}
}

print "
Part 1: {$part1}
Part 2: {$part2}
";