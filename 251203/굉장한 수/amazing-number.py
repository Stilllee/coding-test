n = int(input())

isOdd = (n % 2 != 0)
isAmazingNum = (isOdd and n % 3 == 0) or (not isOdd and n % 5 == 0)

if isAmazingNum:
    print("true")
else:
    print("false")