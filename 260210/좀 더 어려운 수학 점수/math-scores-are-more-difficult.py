math_a, eng_a = map(int, input().split())
math_b, eng_b = map(int, input().split())

if math_a > math_b:
    print('A')
elif math_b > math_a:
    print('B')
else:
    if eng_a > eng_b:
        print('A')
    else:
        print('B')