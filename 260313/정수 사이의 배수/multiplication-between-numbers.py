a, b = map(int, input().split(" "))
sum = 0
cnt = 0

for num in range(a, b+1):
    if num % 5 == 0 or num % 7 == 0:
        sum += num
        cnt += 1

avr = sum / cnt

print(f"{sum} {avr:.1f}")

