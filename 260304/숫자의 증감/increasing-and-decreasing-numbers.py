c, n = input().split(' ')
n = int(n)

if c == 'A':
    for i in range(1, n + 1):
        print(i, end=' ')
        n += 1
elif c == 'D':
    for i in range(n, 0, -1):
        print(i, end=' ')