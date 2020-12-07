import zipfile, shutil, os
print('''--------------------create zip file--------------------''')
newZip = zipfile.ZipFile('new.zip', 'w')
newZip.write('20200402_shutil.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.write('20200402_shelve.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.write('20200402_path.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()

print('''--------------------read zip file--------------------''')
readZip = zipfile.ZipFile('new.zip')
print(readZip.namelist())
fileInfo = readZip.getinfo('20200402_shutil.py')
print(fileInfo.file_size)
print(fileInfo.compress_size)
readZip.extractall(path='unzipped')
readZip.close()

os.remove('new.zip')
shutil.rmtree('unzipped')