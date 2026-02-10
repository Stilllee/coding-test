age_a, gender_a = input().split()
age_b, gender_b = input().split()

age_a, age_b = int(age_a), int(age_b)

if (age_a >= 19 and gender_a == 'M') or (age_b >= 19 and gender_b == 'M'):
    print(1)
else:
    print(0)