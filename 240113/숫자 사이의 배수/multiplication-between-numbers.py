arr = input().split()

a = int(arr[0])
b = int(arr[1])
sum_val = 0
ctn = 0

for i in range(a, b + 1):
    if i % 5 == 0 or i % 7 ==0:
        sum_val += i
        ctn += 1

print(sum_val, f"{sum_val / ctn:.1f}")