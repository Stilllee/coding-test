str = input()

len_str = len(str)

str = str[:1] + 'a' + str[2:]
str = str[:len_str - 2] + 'a' + str[len_str - 1:]

print(str)