arr = input().split()

a = int(arr[0])
b = int(arr[1])
i = 1

if a >= 1:
    for i in range(1, b + 1, 1):
        print(a, end = "")
        i += 1
else:
    print("0")