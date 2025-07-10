import sys
from collections import defaultdict
input = sys.stdin.readline

n, m = map(int, input().split())

num_list = list(map(int, input().split()))
test_list = list(map(int, input().split()))

counter = defaultdict(int)

for num in num_list:
    counter[num] += 1

for test in test_list:
    print(counter[test], end =" ")