def solution(slice, n):
    pizza = 0
    pieces = 0
    
    while pieces < n:
        pizza += 1
        pieces += slice
    
    return pizza