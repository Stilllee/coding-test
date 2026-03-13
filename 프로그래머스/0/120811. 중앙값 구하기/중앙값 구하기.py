def solution(array):
    array.sort()
    center = len(array) // 2
    return array[center]