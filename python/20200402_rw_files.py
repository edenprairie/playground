import os

print('''--------------------file functions--------------------''')
helloFile = open('/home/lihe/Projects/playground/python/20200402_rw_files.py')
helloContent = helloFile.read()
print(helloContent)

linesFile = open('/home/lihe/Projects/playground/python/20200402_rw_files.py')
lines = linesFile.readlines()
print(lines)

baconFile = open('bacon.txt', 'w')
baconFile.write('Hello, world!')
baconFile.close()

baconFile = open('bacon.txt', 'a')
baconFile.write('Bacon is not vegetable')
baconFile.close()

baconFile = open('bacon.txt')
print(baconFile.read())
baconFile.close()

os.remove('bacon.txt')