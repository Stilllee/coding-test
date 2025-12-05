str_arr = ["apple", "banana", "grape", "blueberry", "orange"]

char = input()
cnt = 0

for str in str_arr:
    if str[2] == char or str[3] == char:
        print(str)
        cnt += 1

print(cnt)