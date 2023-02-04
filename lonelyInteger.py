#!/bin/python3

import math
import os
import random
import re
import sys

def lonelyinteger(a):
        for index, i in enumerate(a):
            if (a.count(a[index])==1):
                return(a[index])
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = lonelyinteger(a)

    fptr.write(str(result) + '\n')

    fptr.close()
