import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num_list = list(map(int, input().split()))
cmd_list = [int(input()) for _ in range(m)]

def lower_bound(tg):
    st = 0
    ed = n - 1
    min_idx = n

    while st <= ed:
        mid = (st + ed) // 2

        if tg <= num_list[mid]:
            min_idx = min(min_idx, mid)
            ed = mid - 1
        else:
            st = mid + 1
    
    return min_idx

def upper_bound(tg):
    st = 0
    ed = n - 1
    max_idx = -1

    while st <= ed:
        mid = (st + ed) // 2

        if tg >= num_list[mid]:
            max_idx = max(max_idx, mid)
            st = mid + 1
        else:
            ed = mid - 1

    return max_idx

for num in cmd_list:
    left = lower_bound(num)
    right = upper_bound(num)
    print(right - left + 1)