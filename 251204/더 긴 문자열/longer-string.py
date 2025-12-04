a, b = map(str, input().split())

len_a = len(a)
len_b = len(b)

if len_a > len_b:
    print(a, len_a)
elif len_b > len_a:
    print(b, len_b)
else:
    print("same")