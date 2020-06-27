import logging
logging.basicConfig(filename='1.log', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

#logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

logging.debug('starting...')

def factorial(n):
    logging.debug('n! ...')
    total = 1
    for i in range(1, n+1):
        total *= i
        logging.debug(f'i={i}, total={total}')
    logging.debug(f'{n}! = {total}')
    return total


factorial(5)
# logging to file
factorial(8)