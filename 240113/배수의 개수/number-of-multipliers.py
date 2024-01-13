ctn_a = 0
ctn_b = 0

for i in range(1, 11):
    n = int(input())
    if n % 3 == 0:
        ctn_a += 1
    if n % 5 == 0:
        ctn_b += 1

print(ctn_a, ctn_b)