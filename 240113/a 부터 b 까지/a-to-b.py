arr = input().split()

a = int(arr[0])
b = int(arr[1])

for i in range(a, b + 1):
    if a <= b:
        print(a, end = " ")
        if a % 2 == 1:
            a *= 2
        else:
            a += 3