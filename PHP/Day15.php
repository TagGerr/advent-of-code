<?php

$ingredientList = file('../inputs/Day15.txt');

if( empty($ingredientList) || !is_array($ingredientList) ){
	exit("Unable to load input file");
}

$bestScore = 0;
$bestCalories = 0;
$ingredients = array();
foreach($ingredientList as $line){
	preg_match('/^(?<name>[a-z]*): .+ (?<capacity>\-?[\d]+), .+ (?<durability>\-?[\d]+), .+ (?<flavor>\-?[\d]+), .+ (?<texture>\-?[\d]+), .+ (?<calories>\-?[\d]+)$/i', $line, $matches);
	$ingredients[] = array(
		'name' => $matches['name'],
		'capacity' => (int)$matches['capacity'],
		'durability' => (int)$matches['durability'],
		'flavor' => (int)$matches['flavor'],
		'texture' => (int)$matches['texture'],
		'calories' => (int)$matches['calories'],
	);
}

for($a = 1; $a <= 100; $a++){
	for($b = 1; $b <= 100 - $a; $b++){
		for($c = 1; $c <= 100 - $a - $b; $c++){
			$d = 100 - $a - $b - $c;

			$capacity = max(0, $ingredients[0]['capacity'] * $a + $ingredients[1]['capacity'] * $b + $ingredients[2]['capacity'] * $c + $ingredients[3]['capacity'] * $d);
			$durability = max(0, $ingredients[0]['durability'] * $a + $ingredients[1]['durability'] * $b + $ingredients[2]['durability'] * $c + $ingredients[3]['durability'] * $d);
			$flavor = max(0, $ingredients[0]['flavor'] * $a + $ingredients[1]['flavor'] * $b + $ingredients[2]['flavor'] * $c + $ingredients[3]['flavor'] * $d);
			$texture = max(0, $ingredients[0]['texture'] * $a + $ingredients[1]['texture'] * $b + $ingredients[2]['texture'] * $c + $ingredients[3]['texture'] * $d);

			$score = $capacity * $durability * $flavor * $texture;

			if($score > $bestScore){
				$bestScore = $score;
			}

			$calories = $ingredients[0]['calories'] * $a + $ingredients[1]['calories'] * $b + $ingredients[2]['calories'] * $c + $ingredients[3]['calories'] * $d;
			if($calories == 500 && $score > $bestCalories){
				$bestCalories = $score;
			}
		}
	}
}

print "
Part 1: {$bestScore}
Part 2: {$bestCalories}
";