inp = input().split()
c1, t1 = inp[0], int(inp[1])
inp = input().split()
c2, t2 = inp[0], int(inp[1])
inp = input().split()
c3, t3 = inp[0], int(inp[1])

if c1 == 'Y' and t1 >= 37:
    if (c2 == 'Y' and t2 >= 37) or (c3 == 'Y' and t3 >= 37):
        print('E')
    else:
        print('N')
else:
    if (c2 == 'Y' and t2 >= 37) and (c3 == 'Y' and t3 >= 37):
        print('E')
    else:
        print('N')       