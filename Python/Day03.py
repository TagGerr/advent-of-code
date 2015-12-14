string = open('../inputs/Day03.txt').read()

class Visitor:

	def __init__(self):
		self.houses = set(['0,0'])
		self.position = {'x': 0, 'y': 0}

	def move(self, direction):
		if(direction == '^'):
			self.position['y'] += 1

		elif(direction == 'v'):
			self.position['y'] -= 1

		elif(direction == '>'):
			self.position['x'] += 1

		elif(direction == '<'):
			self.position['x'] -= 1

		self.houses.add(str(self.position['x']) + ',' + str(self.position['y']))

santa1 = Visitor()
santa2 = Visitor()
robot = Visitor()

for index, direction in enumerate(string):
	santa1.move(direction)

	if index % 2 == 0:
		santa2.move(direction)
	else:
		robot.move(direction)

print "Part 1:", len(santa1.houses)
print "Part 2:", len(santa2.houses.union(robot.houses))