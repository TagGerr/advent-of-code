import re

words = open('../inputs/Day05.txt').read().split('\n')

nice1 = sum( 1 for w in words if re.search('[aeiou].*?[aeiou].*?[aeiou]', w) and re.search('([a-z])\\1', w) and not re.search('(ab|cd|pq|xy)', w) )
nice2 = sum( [1 for w in words if re.search('([a-z]{2}).*?\\1', w) and re.search('([a-z]).\\1', w)] )

print "Part 1:", nice1
print "Part 2:", nice2