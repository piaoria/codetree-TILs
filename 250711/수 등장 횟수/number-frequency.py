import sys
from collections import Counter
input = sys.stdin.readline

n, m = map(int, input().split())

num_list = list(map(int, input().split()))
test_list = list(map(int, input().split()))

counter = Counter(num_list)

for test in test_list:
    print(counter[test], end =" ")