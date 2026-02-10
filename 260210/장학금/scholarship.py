midterm, final = map(int, input().split())

if midterm >= 90 and final >= 95:
    print(100000)
elif midterm >= 90 and (final >=90 and final < 95):
    print(50000)
else:
    print(0)
