n = int(input())
sum_val = 0

for i in range(1, 101):
    if sum_val <= n:
        sum_val += i
    if sum_val >= n:
        break

print(i)