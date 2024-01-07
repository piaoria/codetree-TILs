arr = input().split()
cm = int(arr[0])
kg = int(arr[1])
m = cm / 100
m = m*m
BMI = kg // m
print(int(BMI))
if BMI >= 25:
    print("Obesity")