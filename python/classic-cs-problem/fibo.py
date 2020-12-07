def fib2(n: int) -> int:
    if n < 2:
        return n
    return fib2(n-1) + fib2(n-2)

from typing import Dict
memo: Dict[int, int] = {0:0, 1:1}

def fib3(n: int) -> int:
    if n not in memo:
        memo[n] = fib3(n-1) + fib3(n-1)
    return memo[n]

for i in range(11):
    print(fib2(i))
print('----------')
for i in range(21):
    print(fib3(i))