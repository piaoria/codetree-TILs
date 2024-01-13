sum_val = 0
ctn = 0
for i in range(1, 11):
    n = int(input())
    if n <= 200 and n >= 0:
        sum_val += n
        ctn += 1

print(sum_val, f"{sum_val / ctn:.1f}")