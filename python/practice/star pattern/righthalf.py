
row_size = int(input("Enter row size: "))

for i in range(0,row_size):
    for j in range(0,row_size-i-1):
        print(" ",end="")
    for j in range(0,i+1):
        print("*",end="")
    print()