n = int(input())

if n >= 3000:
    print('book')
elif n < 3000 and n >= 1000:
    print('mask')
elif n < 1000 and n >= 500:
    print('pen')
else:
    print('no')