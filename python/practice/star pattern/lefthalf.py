
row_size = int (input("Enter the number of rows: "))

for i in range(0,row_size):
    for j in range(0,i+1):
        print("*",end=" ")
    print()