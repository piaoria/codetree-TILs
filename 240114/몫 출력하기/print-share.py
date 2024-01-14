ctn = 0

while True:
    n = int(input())
    if n % 2 == 1:
        ctn += 0
    else:
        print(n // 2)
        ctn += 1
    if ctn == 3:
        break