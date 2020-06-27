import pprint, os
print('''--------------------save and import--------------------''')
#save
cats = [{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'white'}]
print(pprint.pformat(cats))
fileObj = open('myCats.py', 'w')
fileObj.write('cats = ' + pprint.pformat(cats) + '\n')
fileObj.close()

# now import the file
import myCats
print(myCats.cats[0])

os.remove('myCats.py')
