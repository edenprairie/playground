print('''--------------------exception demo--------------------''')
def boxPrint(symbol, width, height):
    if len(symbol) != 1:
        raise Exception('symbol must be a single character')
    if width <=2:
        raise Exception('width must greater than 2')
    if height <=2:
        raise Exception('height must greater than 2')
    print(symbol * width)
    for i in range(height -2):
        print(symbol + (' ' * (width-2)) + symbol)
    print(symbol * width)


for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        boxPrint(sym, w, h)
    except Exception as err:
        print('An exception happend: ' + str(err))

def spam():
    bacon()
def bacon():
    raise Exception("this is an error")

spam()
