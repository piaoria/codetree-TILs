arr1 = input().split()
arr2 = input().split()
arr3 = input().split()

if arr1[0] == "Y" and arr2[0] == "Y" and int(arr1[1]) >= 37 and int(arr2[1]) >= 37:
    print("E")
elif arr1[0] == "Y" and arr3[0] == "Y" and int(arr1[1]) >= 37 and int(arr3[1]) >= 37:
    print("E")
elif arr2[0] == "Y" and arr3[0] == "Y" and int(arr2[1]) >= 37 and int(arr3[1]) >= 37:
    print("E")
else:
    print("N")