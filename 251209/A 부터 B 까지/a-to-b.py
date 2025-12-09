a, b = map(int, input().split())
n = a

while n <= b:
    print(n, end=" ")
    if n % 2 == 0:
        n += 3
    else:
        n *= 2