<?php

$reindeerStats = file('../inputs/Day14.txt');

if( empty($reindeerStats) || !is_array($reindeerStats) ){
	exit("Unable to load input file");
}

$allReindeer = array();
foreach($reindeerStats as $line){
	preg_match('/^(?<name>[A-Z][a-z]+) .+? (?<speed>[\d]+) .+? (?<flight>[\d]+) .+? (?<rest>[\d]+) .+$/', $line, $matches);
	$reindeer = new Reindeer($matches['name'], $matches['speed'], $matches['flight'], $matches['rest']);
	$allReindeer[] = $reindeer;
}

$totalTime = 2503;

$maxDistance = 0;
for($s = 0; $s < $totalTime; $s++){
	foreach($allReindeer as $reindeer){
		$reindeer->tick();
		$maxDistance = max($maxDistance, $reindeer->distance);
	}

	foreach($allReindeer as $reindeer){
		if($reindeer->distance == $maxDistance){
			$reindeer->score++;
		}
	}
}

$highestScore = 0;
foreach($allReindeer as $reindeer){
	$highestScore = max($highestScore, $reindeer->score);
}

print "
Part 1: {$maxDistance}
Part 2: {$highestScore}
";





class Reindeer {
	public $name;
	public $speed;
	public $flightTime;
	public $restTime;

	public $distance = 0;
	public $score = 0;

	private $_cycleTime;
	private $_time = 0;

	public function __construct($name, $speed, $flight, $rest) {
		$this->name = $name;
		$this->speed = $speed;
		$this->flightTime = $flight;
		$this->restTime = $rest;

		$this->_cycleTime = $flight + $rest;
	}

	public function tick() {
		if( $this->isFlying() ){
			$this->distance += $this->speed;
		}
		$this->_time++;
	}

	public function isFlying() {
		$cycleSeconds = $this->_time % $this->_cycleTime;
		return $cycleSeconds < $this->flightTime;
	}
}