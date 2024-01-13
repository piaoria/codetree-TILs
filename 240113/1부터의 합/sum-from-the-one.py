n = int(input())
add_val = 0

for i in range(1, 101):
    if add_val <= n:
        add_val += i
    if add_val >= n:
        break

print(i)