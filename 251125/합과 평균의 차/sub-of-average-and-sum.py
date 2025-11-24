a, b, c = map(int, input().split())
sum = a + b + c
avr = sum // 3
print(sum, avr, (sum-avr), sep="\n")