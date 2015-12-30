from itertools import permutations
import re

rules = open('../inputs/Day13.txt').read().split('.\n')

def findBestArrangement(people, happiness):
	best = 0
	for seating in permutations(people):
		total = 0
		for s in xrange(0, len(seating)):
			left = s - 1
			if left < 0:
				left = len(seating) - 1
			right = s + 1
			if right >= len(seating):
				right = 0

			total += happiness[(seating[s], seating[left])] + happiness[(seating[s], seating[right])]

		best = max(best, total)
	return best

people = set()
happiness = {}

for rule in rules:
	parts = re.search('(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)', rule).groups()
	person = parts[0]
	neighbor = parts[3]
	amount = int(parts[2]) * (1 if parts[1] == 'gain' else -1)
	people.add(person)
	happiness[(person, neighbor)] = amount

originalBest = findBestArrangement(people, happiness)

for person in people:
	happiness[(person, 'self')] = 0
	happiness[('self', person)] = 0
people.add('self')

includingMeBest = findBestArrangement(people, happiness)

print "Part 1:", originalBest
print "Part 2:", includingMeBest