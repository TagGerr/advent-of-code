presents = open('../inputs/Day02.txt').read().split('\n')

paper = 0
ribbon = 0

for present in presents:
	dims = [int(n) for n in sorted(present.split('x'), key=int)]
	paper += (2 * dims[0] * dims[1]) + (2 * dims[1] * dims[2]) + (2 * dims[2] * dims[0]) + (dims[0] * dims[1])
	ribbon += (2 * dims[0]) + (2 * dims[1]) + (dims[0] * dims[1] * dims[2])

print "Part 1:", paper
print "Part 2:", ribbon