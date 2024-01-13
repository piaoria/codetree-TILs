n = int(input())
sum_val = 0

for i in range(1, n + 1):
    a = int(input())
    if a % 2 == 1 and a % 3 == 0:
        sum_val += a 

print(sum_val)