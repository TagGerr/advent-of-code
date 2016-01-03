import re

sues = open('../inputs/Day16.txt').read().split('\n')

realSue = {
	'children': 3,
	'cats': 7,
	'samoyeds': 2,
	'pomeranians': 3,
	'akitas': 0,
	'vizslas': 0,
	'goldfish': 5,
	'trees': 3,
	'cars': 2,
	'perfumes': 1,
}

firstSue = 0
secondSue = 0

def firstMatch(sue):
	return all(realSue[comp] == val for comp, val in sue.items())

def secondMatch(sue):
	for comp, val in sue.items():
		if comp in ('cats', 'trees'):
			if realSue[comp] >= val:
				return False
		elif comp in ('pomeranians', 'goldfish'):
			if realSue[comp] <= val:
				return False
		else:
			if realSue[comp] != val:
				return False

	return True

for sue in sues:
	number, comp1, val1, comp2, val2, comp3, val3 = re.search('Sue (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)', sue).groups()
	sue = {
		comp1: int(val1),
		comp2: int(val2),
		comp3: int(val3),
	}
	
	if firstSue == 0 and firstMatch(sue):
		firstSue = number

	if secondSue == 0 and secondMatch(sue):
		secondSue = number


print "Part 1:", firstSue
print "Part 2:", secondSue 