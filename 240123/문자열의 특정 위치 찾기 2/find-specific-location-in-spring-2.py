# arr 문자열 5개 초기화
arr = ['apple', 'banana', 'grape', 'blueberry', 'orange']

# input()값 선언
alpha = input()

# 문자열 개수 변수 선언
cnt = 0

# list의 요소를 for문으로 돌려 요소 3 or 4번째 문자와 alpha 요소 같은지 확인, 들어있다면 해당 요소 print 후 카운트
for i in arr:
    if alpha == i[2] or alpha == i[3]:
        print(i)
        cnt += 1

print(cnt)