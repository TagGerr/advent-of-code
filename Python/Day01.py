string = open('../inputs/Day01.txt').read()

floor = 0
basementPosition = 0

for move in enumerate(string, start = 1):
	floor += 1 if (move[1] == '(') else -1
	basementPosition = move[0] if floor == -1 and basementPosition == 0 else basementPosition

print "Part 1:", floor
print "Part 2:", basementPosition