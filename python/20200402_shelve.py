import shelve, os
print('''--------------------save variable to file--------------------''')
#save
shelfFile = shelve.open('mydata')
cats = ['Zophie', 'Pooka', 'Simon']
shelfFile['cats'] = cats
shelfFile.close()

#load
shelfFile = shelve.open('mydata')
print(type(shelfFile))
print(shelfFile['cats'])
shelfFile.close()

os.remove('mydata')