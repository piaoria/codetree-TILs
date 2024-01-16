arr = input().split()
a, b, c = int(arr[0]), int(arr[1]), int(arr[2])

while True:
    if a > c and b > c:
        c += c
    else:
        break
if c >= a and c <= b:
    print("YES")
else:
    print("NO")