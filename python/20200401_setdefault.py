import pprint
message = 'It was a bright cold day in April, and the clocks were striking thirteen.'
count = {} # empty dictionary

#count chars
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

#pretty print
pprint.pprint(count)

print('Hello'.center(20))
print('hello'.ljust(20))
print('hello'.rjust(20))

