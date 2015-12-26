from itertools import permutations

strings = open('../inputs/Day09.txt').read().split('\n')

locations = set()
distances = {}
for line in strings:
	(source, to, dest, eq, distance) = line.split(' ')

	locations.add(source)
	locations.add(dest)

	distances[(source, dest)] = int(distance)
	distances[(dest, source)] = int(distance)

allDistances = []
for path in permutations(locations):
	allDistances.append(sum( distances[p] for p in zip(path, path[1:]) ))

print "Part 1:", min(allDistances)
print "Part 2:", max(allDistances)