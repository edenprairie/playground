import os

for folder,  sub_folders, files in os.walk('.'):
    print(f'current folder is {folder}')
    for sub_folder in sub_folders:
        print(f'Sub folder in {folder} : {sub_folder}')
    for file in files:
        print(f'Sub folder in {folder} : {file}')
