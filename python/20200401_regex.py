import re

phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') #r'' raw string
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: 612-111-7890')
print(mo.group())

phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)') #group with ()
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: 612-111-7890')
print(mo.group(1))
print(mo.group(2))
print(mo.group(3))
print(mo.groups())
areaCode, mid, last = mo.groups()
print(f"areaCode={areaCode}, mid={mid}, last={last}")

print('''--------------------
escape ( and )''')
phoneNumberRegex = re.compile(r'(\(\d\d\d\))-(\d\d\d-\d\d\d\d)') #group with ()
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: (612)-111-7890')
print(mo.groups())

print('''--------------------
match multile''')
heroRegex = re.compile(r'Batman|Tina Fey')
mo1 = heroRegex.search('Batman and Tina Fey')
print(mo1.group())

mo2 = heroRegex.search('Tina Fey and Batmain')
print(mo2.group())

print('''--------------------
? for optional match''')
batRegex = re.compile(r'Bat(wo)?man')
mo3 = batRegex.search('The Adventures of Batman')
print(mo3.group())

mo4 = batRegex.search('The Adventures of Batwoman')
print(mo4.group())

print('''--------------------
* for 0 or multiple times''')
batRegex = re.compile(r'Bat(wo)*man')
mo5 = batRegex.search('The Adventures of Batman')
print(mo5.group())

mo6 = batRegex.search('The Adventures of Batwowowowoman')
print(mo6.group())

print('''--------------------
+ for 1 or multiple times''')
batRegex = re.compile(r'Bat(wo)+man')
mo7 = batRegex.search('The Adventures of Batman')
print(mo7) #None no match

mo8 = batRegex.search('The Adventures of Batwowowowoman')
print(mo8.group())

print('''--------------------
{n} for match exact n times''')
haRegex = re.compile(r'(Ha){3}')
mo9 = haRegex.search('Wa HaHaHa')
print(mo9.group())

mo10 = haRegex.search('Wa haha')
print(mo10)

print('''--------------------
greedy match { a, b } means a to b times''')
greedyHaRegex = re.compile(r'(Ha){3,5}')
moa = greedyHaRegex.search('What HaHaHaHaHa')
print(moa.group()) # HaHaHaHaHa

print('''--------------------
non greedy match''')
monGreedyHaRegex = re.compile(r'(Ha){3,5}?')
mob = monGreedyHaRegex.search('What HaHaHaHaHa')
print(mob.group()) #HaHaHa

print('''--------------------
find all''')
phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mc = phoneNumberRegex.findall('My cell number: 612-222-1234, home is: 612-111-7890')
print(mc)

phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)') #group with ()
md = phoneNumberRegex.findall('My cell number: 612-222-1234, home is: 612-111-7890')
print(md)

# https://docs.python.org/3/library/re.html
# \d
# \D
# \w
# \W
#

print('''--------------------
customize char category''')
vowelRegex = re.compile(r'[aeiouAEIOU]')
me = vowelRegex.findall('Robocop eats baby food. BABY FOOD')
print(me)

print('''--------------------
^ for starts with''')
beginWithRegex = re.compile(r'^How are you?')
print(beginWithRegex.search('Jay, How are you? ...') == None)
print(beginWithRegex.search('How are you, Jay?').group())

print('''--------------------
$ for ends with''')
endWithRegex = re.compile(r'\d$') #end with number
print(endWithRegex.search("I am No. 2").group())
print(endWithRegex.search("I am No. two") == None)

print('''--------------------
. for any char except line feed''')
atRegex = re.compile(r'.at')
print(atRegex.findall('The cat in the hat sat at the flat mat'))

print('''--------------------
.* for any word''')
nameRegex = re.compile(r'FirstName: (.*), LastName: (.*)')
print(nameRegex.search('FirstName: Jen, LastName: Ac').group(1))
print(nameRegex.search('FirstName: Jen, LastName: Ac').group(2))

print('''--------------------
.* + re.DOTALL including line feed''')
nonNewLineRegex = re.compile('.*')
print(nonNewLineRegex.search('Line 1\nLine 2').group())

newLineRegex = re.compile('.*', re.DOTALL)
print(newLineRegex.search('Line 1\nLine 2').group())

print('''--------------------
re.I or re.IGNORECASE to case insensitive''')
ignoreCaseRegex = re.compile('python', re.I)
print(ignoreCaseRegex.search('PYTHON').group())
print(ignoreCaseRegex.search('python').group())
print(ignoreCaseRegex.search('Python').group())
print(ignoreCaseRegex.search('PYThon').group())

print('''--------------------
sub to replace''')
namesRegex = re.compile(r'Agent \w+')
print(namesRegex.sub('CENSORED', 'Agent Alice gave secret document to Agent Bob.'))

agentNamesRegex = re.compile(r'Agent (\w)\w*')
print(agentNamesRegex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent Eve know Agent Bob was a double agent'))

print('''--------------------
combine flag''')
someRegex = re.compile('foo', re.IGNORECASE | re.DOTALL)

print('''--------------------
real phone number''')
realPhoneRegex = re.compile(r'''(
    (\d{3}|\(\d{3}\))? # area code
    (\s|-|\.)? # separator
    (\d{3}) # first 3 digits
    (\s|-|\.) # separator
    (\d{4}) # last 4 digits
    (\s*(ext|x|ext.)\s*(\d{2,5}))? # extension
    )''', re.VERBOSE)
print(realPhoneRegex.search('952-123-1111').group())
print(realPhoneRegex.search('(952)-123-1111').group())

print('''--------------------
real email''')
realEmailRegex = re.compile(r'''(
    [a-zA-Z0-9._%+-]+ # username
    @ # @ symbol
    [a-zA-Z0-9.-]+ # domain name
    (\.[a-zA-Z]{2,4}) # dot-something
    )''', re.VERBOSE)
print(realEmailRegex.search("james@s.com").group())