import sys
input = sys.stdin.readline

n, m = map(int, input().split())
text_dict = dict()

for num in range(n):
    text = input().strip()
    idx = num + 1
    text_dict[text] = str(idx)
    text_dict[str(idx)] = text

for _ in range(m):
    test_case = input().strip()
    print(text_dict[test_case])
