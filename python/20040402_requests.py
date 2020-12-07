import requests, os
res = requests.get('http://www.gutenberg.org/cache/epub/1112/pg1112.txt')
print(type(res))
print(res.status_code)
print(len(res.text))
print(res.text[:250])

res = requests.get('http://inventwithpython.com/page_that_does_not_exist')
try:
    res.raise_for_status()
except Exception as err:
    print('error - ' + str(err))

#save to file
res = requests.get('http://www.gutenberg.org/cache/epub/1112/pg1112.txt')
res.raise_for_status()
playFile = open('2.log', 'wb')
for chunk in res.iter_content(100000):
    print(len(chunk))
    playFile.write(chunk)
playFile.close()
os.remove('2.log')
