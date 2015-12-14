from hashlib import md5

string = open('../inputs/Day04.txt').read()

fiveZeros = ''
sixZeros = ''
num = 1

while fiveZeros == '' or sixZeros == '':
	hashed = md5(string + str(num)).hexdigest()

	if fiveZeros == '' and hashed[:5] == '00000':
		fiveZeros = num

	if sixZeros == '' and hashed[:6] == '000000':
		sixZeros = num

	num += 1

print "Part 1:", fiveZeros
print "Part 2:", sixZeros