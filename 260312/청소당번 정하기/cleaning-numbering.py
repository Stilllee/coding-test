n = int(input())

classroom, corridor, toilet = 0, 0, 0

for i in range(1, n+1):
    if i % 12 == 0:
        toilet += 1
    elif i % 3 == 0:
        corridor += 1
    elif i % 2 == 0:
        classroom += 1

print(classroom, corridor, toilet)