cnt_three, cnt_five = 0, 0

for _ in range(10):
    n = int(input())

    if n % 3 == 0:
        cnt_three += 1
    if n % 5 == 0:
        cnt_five += 1

print(cnt_three, cnt_five)