import sys
input = sys.stdin.readline

n, m = map(int, input().split())

num_list = list(map(int, input().split()))
cmd_list = list(map(int, input().split()))

def lower_bound(tg):
    st = 0
    ed = n-1
    min_idx = n

    while st <= ed:
        mid = (st + ed) // 2
        if tg <= num_list[mid]:
            min_idx = min(min_idx, mid)
            ed = mid - 1
        else:
            st = mid + 1
    
    return min_idx + 1

def upper_bound(tg):
    st = 0
    ed = n-1
    min_idx = n

    while st <= ed:
        mid = (st + ed) // 2
        if tg < num_list[mid]:
            min_idx = min(min_idx, mid)
            ed = mid - 1
        else:
            st = mid + 1
    
    return min_idx + 1

    
for cmd in cmd_list:
    lower_res = lower_bound(cmd)
    upper_res = upper_bound(cmd)

    if lower_res == upper_res:
        print(-1)
    else:
        print(lower_res)