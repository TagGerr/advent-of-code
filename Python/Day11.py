import re
import sys

password = open('../inputs/Day11.txt').read()

def nextPassword(password):
	letters = list(password[::-1])
	for l in range(len(letters)):
		if letters[l] == 'z':
			letters[l] = 'a'
		else:
			letters[l] = chr(ord(letters[l]) + 1)
			break
	return ''.join(letters[::-1])

def validPassword(password):
	if re.search('[iol]', password) == None and len(re.findall(r'([a-z])\1', password)) >= 2:
		for c in range(len(password) - 2):
			if ord(password[c]) == ord(password[c + 1]) - 1 and ord(password[c + 1]) == ord(password[c + 2]) - 1:
				return True
	return False

while True:
	password = nextPassword(password)
	if validPassword(password):
		break

firstPassword = password

while True:
	password = nextPassword(password)
	if validPassword(password):
		break

secondPassword = password

print "Part 1:", firstPassword
print "Part 2:", secondPassword