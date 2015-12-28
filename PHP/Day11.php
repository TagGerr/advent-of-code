<?php

$input = file_get_contents('../inputs/Day11.txt');

$passwords = array();
while(true){
	$sequentialLetters = false;
	for($i = 0; $i < strlen($input) - 2; $i++){
		$letter = $input{$i};
		if($input{$i + 1} == ++$letter && $input{$i + 2} == ++$letter){
			$sequentialLetters = true;
			break;
		}
	}

	$disallowedCharacters = preg_match_all('/[iol]/', $input) === 0;

	$pairedLetters = preg_match_all('/([a-z])\1/', $input) === 2;

	if($sequentialLetters && $disallowedCharacters && $pairedLetters){
		$passwords[] = $input;
		if(count($passwords) == 2){
			break;
		}
	}

	$input++;
}

print "
Part 1: {$passwords[0]}
Part 2: {$passwords[1]}
";