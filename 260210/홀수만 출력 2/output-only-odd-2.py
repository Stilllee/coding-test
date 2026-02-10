a, b = map(int, input().split())

for i in rnage(b, a - 1, -1):
    if i % 2 != 0:
        print(i, end=' ')