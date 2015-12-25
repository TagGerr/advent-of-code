strings = open('../inputs/Day08.txt').read().split('\n')

part1 = sum( len(string) - len(eval(string)) for string in strings )
part2 = sum( (2 + len(string.replace("\\", "\\\\").replace("\"", "\\\""))) - len(string) for string in strings )

print "Part 1:", part1
print "Part 2:", part2