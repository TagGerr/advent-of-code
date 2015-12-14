<?php

$string = file_get_contents('../inputs/Day04.txt');

if( empty($string) ){
	exit("Unable to load input file");
}

$fiveZerosString = '';
$sixZerosString = '';
$num = 0;
while($fiveZerosString === '' || $sixZerosString === ''){
	$hash = md5($string . $num);

	if( empty($fiveZerosString) && substr($hash, 0, 5) === '00000'){
		$fiveZerosString = $num;
	}
	
	if( empty($sixZerosString) && substr($hash, 0, 6) === '000000'){
		$sixZerosString = $num;
	}

	$num++;
}

print "
Part 1: {$fiveZerosString}
Part 2: {$sixZerosString}
";