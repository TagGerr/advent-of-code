instructions = open('../inputs/Day07.txt').read().split('\n')

wires = {}
for inst in instructions:
	left, right = inst.split(' -> ')
	wires[ right ] = left

operations = {
	'NOT' : '~',
	'AND' : '&',
	'OR' : '|',
	'RSHIFT' : '>>',
	'LSHIFT' : '<<',
}

def solveWire(wire, wires):
	try:
		return int(wires[ wire ])
	except:
		parts = []
		for p in wires[ wire ].split(' '):
			try:
				p = int(p)
			except:
				if p in operations:
					p = operations[p]
				else:
					p = solveWire(p, wires)

			parts.append(str(p))

		wires[ wire ] = eval(" ".join(parts))
		return wires[ wire ]

firstA = solveWire('a', wires.copy())

wires['b'] = firstA
secondA = solveWire('a', wires.copy())

print "Part 1:", firstA
print "Part 2:", secondA