n = int(input())
ctn = 0

while True:
    if n == 1:
        break
    if n % 2 == 0:
        n = n // 2
        ctn += 1
    else:
        n = 3 * n + 1
        ctn += 1


print(ctn)