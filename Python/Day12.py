import json

data = open('../inputs/Day12.txt').read()
data = json.loads(data)

def countNumbers(obj, skipReds = False):
	total = 0

	if isinstance(obj, int):
		total += obj
	elif isinstance(obj, list):
		total += sum( countNumbers(o, skipReds) for o in obj )
	elif isinstance(obj, dict):
		if skipReds and 'red' in obj.values():
			total = 0
		else:
			total += sum( countNumbers(o, skipReds) for o in obj.values() )

	return total

allNumbers = countNumbers(data)
noRedNumbers = countNumbers(data, True)

print "Part 1:", allNumbers
print "Part 2:", noRedNumbers