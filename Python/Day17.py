from itertools import combinations

sizes = open('../inputs/Day17.txt').read().split('\n')

eggnog = 150
containers = 0
smallestContainers = None

for s in xrange(1, len(sizes) + 1):
	for combo in combinations(sizes, s):
		total = sum([int(x) for x in combo])
		if total == eggnog:
			containers += 1

	if containers > 0 and not smallestContainers:
		smallestContainers = containers


print "Part 1:", containers
print "Part 2:", smallestContainers