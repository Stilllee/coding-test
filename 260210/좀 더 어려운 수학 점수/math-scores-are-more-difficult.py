math_a, eng_a = map(int, input().split())
math_b, eng_b = map(int, input().split())

if math_a > math_b or (math_a == math_b and eng_a > eng_b):
    print('A')
else:
    print('B')