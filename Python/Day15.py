import re

ingList = open('../inputs/Day15.txt').read().split('\n')

ingredients = []
limit = 100
bestScore = 0
bestCalories = 0

for ing in ingList:
	parts = re.findall(r'(^\w+|\-?\d+)', ing)
	ingredients.append({
		'name': parts[0],
		'capacity': int(parts[1]),
		'durability': int(parts[2]),
		'flavor': int(parts[3]),
		'texture': int(parts[4]),
		'calories': int(parts[5]),
	})

for a in xrange(limit + 1):
	for b in xrange(limit + 1 - a):
		for c in xrange(limit + 1 - a - b):
			d = 100 - a - b - c

			capacity = max(0, ingredients[0]['capacity'] * a + ingredients[1]['capacity'] * b + ingredients[2]['capacity'] * c + ingredients[3]['capacity'] * d)
			durability = max(0, ingredients[0]['durability'] * a + ingredients[1]['durability'] * b + ingredients[2]['durability'] * c + ingredients[3]['durability'] * d)
			flavor = max(0, ingredients[0]['flavor'] * a + ingredients[1]['flavor'] * b + ingredients[2]['flavor'] * c + ingredients[3]['flavor'] * d)
			texture = max(0, ingredients[0]['texture'] * a + ingredients[1]['texture'] * b + ingredients[2]['texture'] * c + ingredients[3]['texture'] * d)
			
			calories = ingredients[0]['calories'] * a + ingredients[1]['calories'] * b + ingredients[2]['calories'] * c + ingredients[3]['calories'] * d

			score = capacity * durability * flavor * texture

			bestScore = max(bestScore, score)

			if calories == 500:
				bestCalories = max(bestCalories, score)

print "Part 1:", bestScore
print "Part 2:", bestCalories