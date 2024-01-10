arr = input().split()

middle = int(arr[0])
final = int(arr[1])

if middle >= 90 and final >= 95:
    print("100000")
elif middle >= 90 and final >= 90:
    print("50000")
else:
    print("0")