n = int(input())
nums = list(map(int, input().split()))
nums.reverse()

for i in nums:
    if(i % 2 == 0):
        print(i, end=" ")