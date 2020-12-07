import os

print('''--------------------os path functions--------------------''')
print(os.path.join('usr', 'bin', 'share'))
curDir = os.getcwd()
print(curDir)
os.chdir('/home/lihe')
print(os.getcwd())
os.chdir(curDir)
print(os.getcwd())
os.makedirs('temp/what', exist_ok=True)
os.removedirs('temp/what')
print(os.path.abspath('venv'))
print(os.path.abspath('./dev'))
print(os.path.isabs('./dev'))
print(os.path.isabs('/usr/bin'))
print(os.path.relpath('/usr/bin', '/usr/bin/this/that'))
print(os.path.relpath('/usr/bin/this/that', '/usr/bin'))
print(os.path.relpath('/usr/bin/this', '/usr/bin/that'))

the_path = '/home/lihe/1txt'
print(os.path.basename(the_path))
print(os.path.dirname(the_path))
print(os.path.split(the_path))
print(the_path.split(os.path.sep))

print(os.path.getsize('/20200402_path.py'))
total_size = 0
for file_name in os.listdir('/home/lihe/Projects/playground/python/'):
    total_size = total_size + os.path.getsize(file_name)
print(total_size)

print(os.path.exists('/home/lihe'))
print(os.path.exists('/home/lihe/notExist'))