n = int(input())
sum_val = 0
ctn = 0

for i in range(1, n + 1):
    a = int(input())
    sum_val += a
    ctn += 1

print(sum_val, f"{sum_val / ctn:.1f}")