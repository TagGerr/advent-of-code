import re

stats = open('../inputs/Day14.txt').read().split('\n')

reindeer = []
timeLimit = 2503

def distanceTraveled(deer, time):
	return deer['speed'] * (time / deer['total'] * deer['fly'] + min(time % deer['total'], deer['fly']))

for stat in stats:
	parts = re.findall(r'(^\w+|\d+)', stat)
	reindeer.append({
		'name': parts[0],
		'speed': int(parts[1]),
		'fly': int(parts[2]),
		'rest': int(parts[3]),
		'total': int(parts[2]) + int(parts[3]),
		'points': 0,
	})

for s in xrange(1, timeLimit + 1):
	distances = []
	for r in reindeer:
		distances.append(distanceTraveled(r, s))

	maxDistance = max(distances)
	for k, d in enumerate(distances):
		if d == maxDistance:
			reindeer[k]['points'] += 1

furthest = max(distances)
mostPoints = max([r['points'] for r in reindeer])

print "Part 1:", furthest
print "Part 2:", mostPoints
