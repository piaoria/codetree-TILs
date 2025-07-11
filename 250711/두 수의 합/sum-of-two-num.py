import sys
from collections import Counter
input = sys.stdin.readline

n, k = map(int, input().split())
num_list = list(map(int, input().split()))

counter = Counter(num_list)

result = 0
for num in counter:
    diff = k - num

    if diff == num:
        result += counter[diff] - 1
    else:
        result += counter[diff]

print(result // 2)