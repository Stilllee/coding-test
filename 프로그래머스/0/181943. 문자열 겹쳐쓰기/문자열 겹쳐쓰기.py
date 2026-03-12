def solution(my_string, overwrite_string, s):
    answer = ''
    l = len(overwrite_string)
    
    front = my_string[:s]
    middle = overwrite_string
    back = my_string[s + l:]
    
    answer = front + middle + back
    
    return answer