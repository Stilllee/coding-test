def solution(array):
    count = {}
    
    for num in array:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1
    
    max_count = max(count.values())
    
    if list(count.values()).count(max_count) > 1:
        return -1
    
    for key, value in count.items():
        if value == max_count:
            return key