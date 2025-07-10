import sys
from collections import Counter

input = sys.stdin.readline
n = int(input())

text_list = [input().strip() for _ in range(n)]
counter = Counter(text_list)

value_list = list(counter.values())

print(max(value_list))