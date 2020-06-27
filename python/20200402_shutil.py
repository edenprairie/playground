import shutil, os
print('''--------------------shutil copy file or folder--------------------''')
shutil.copy('yahoo.py', 'about-main/a.py')
os.remove('about-main/a.py')

shutil.copytree('about-main', 'about-main-copy')
shutil.rmtree('about-main-copy') #remove folder and its files

shutil.copy('20200402_shutil.py', 'from.txt')
shutil.move('from.txt', 'to.txt') #rename
os.remove('to.txt')