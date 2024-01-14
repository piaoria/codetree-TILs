ctn = 0
add_val = 0
while True:
    n = int(input())
    if n >= 20 and n <= 29:
      ctn += 1
      add_val += n
    else:
      break
print(f"{add_val / ctn:.2f}")