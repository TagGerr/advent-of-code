import re
import sys

instructions = open('../inputs/Day06.txt').read().split('\n')

lightsOn = 0
brightness = 0

lights = [ [0 for x in range(1000)] for y in range(1000) ]
brights = [ [0 for x in range(1000)] for y in range(1000) ]

for inst in instructions:
	parts = re.search('(?:toggle )?(\w+) (\d+),(\d+) through (\d+),(\d+)', inst).groups()
	action = parts[0]
	x1 = int(parts[1])
	y1 = int(parts[2])
	x2 = int(parts[3])
	y2 = int(parts[4])

	for y in range(y1, y2 + 1):
		for x in range(x1, x2 + 1):
			if action == 'on':
				lights[y][x] = 1
				brights[y][x] += 1
			elif action == 'off':
				lights[y][x] = 0
				brights[y][x] = max(0, brights[y][x] - 1)
			elif action == 'toggle':
				lights[y][x] = abs(lights[y][x] - 1)
				brights[y][x] += 2

lightsOn = sum(map(sum, lights))
brightness = sum(map(sum, brights))

print "Part 1:", lightsOn
print "Part 2:", brightness