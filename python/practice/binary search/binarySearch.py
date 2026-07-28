def binary_search(arr,target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left+right)//2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid -1
    
    return -1



arr = [2,3,4,5,6,7,10,12,15]
target = 15


result = binary_search(arr,target)

if result != -1:
    print(f"Element fount at index {result}")
else:
    print("Element not found")