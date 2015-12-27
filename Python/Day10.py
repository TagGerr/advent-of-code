from itertools import groupby

number = open('../inputs/Day10.txt').read()

def lookAndSay(number):
	newNumber = ''
	for num, nums in groupby(number):
		newNumber += str(len(list(nums))) + str(num)
	return newNumber

for _ in range(40):
	number = lookAndSay(number)

after40 = len(number)

for _ in range(10):
	number = lookAndSay(number)

after50 = len(number)

print "Part 1:", after40
print "Part 2:", after50