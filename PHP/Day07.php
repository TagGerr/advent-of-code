<?php

$chain = file('../inputs/Day07.txt');

if( empty($chain) || !is_array($chain) ){
	exit('Unable to load input file');
}

$firstA = $secondA = 0;

for($run = 0; $run < 2; $run++){
	$wires = array();
	$copy = $chain;
	while( !empty($copy) ){
		$link = trim(array_shift($copy));
		$ops = array();
		$action = '';

		list($input, $output) = explode(' -> ', $link);
		$parts = explode(' ', $input);

		switch(count($parts)){
			case 1:
				$action = 'add';
				if($output == 'b' && $run == 1){
					$ops[] = $firstA;
				} else {
					$ops[] = $parts[0];
				}
				break;

			case 2:
				$action = strtolower($parts[0]);
				$ops[] = $parts[1];
				break;

			case 3:
				$action = strtolower(array_splice($parts, 1, 1)[0]);
				$ops = $parts;
				break;
		}

		foreach($ops as $key => $op){
			if( !is_numeric($op) ){
				if( isset($wires[ $op ]) ){
					$ops[ $key ] = $wires[ $op ];
				} else {
					$copy[] = $link;
					continue 2;
				}
			}
		}

		switch($action){
			case 'add':
				$wires[ $output ] = (int)$ops[0];
				break;

			case 'not':
				$wires[ $output ] = ~ $ops[0];
				break;

			case 'rshift':
				$wires[ $output ] = $ops[0] >> $ops[1];
				break;

			case 'lshift':
				$wires[ $output ] = $ops[0] << $ops[1];
				break;

			case 'and':
				$wires[ $output ] = $ops[0] & $ops[1];
				break;

			case 'or':
				$wires[ $output ] = $ops[0] | $ops[1];
				break;
		}
	}

	if($run == 0){
		$firstA = $wires['a'];
	} else {
		$secondA = $wires['a'];
	}
}

print "
Part 1: {$firstA}
Part 2: {$secondA}
";