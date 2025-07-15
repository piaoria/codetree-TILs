import sys

input = sys.stdin.readline

n, m = map(int, input().split())

num_list = list(map(int, input().split()))
cmd_list = [int(input()) for _ in range(m)]

def binary_search(tg, lst, left, right):

    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == tg:
            return mid + 1

        if tg < lst[mid]:
            right = mid - 1

        elif tg > lst[mid]:
            left = mid + 1
    
    return -1

for num in cmd_list:
    print(binary_search(num, num_list, 0, n - 1))