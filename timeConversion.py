#!/bin/python3

import math
import os
import random
import re
import sys

def timeConversion(s):
    meridium = s[-2:]
    hour = int(s[:2])
    # print(hour)
    if(meridium == "AM"):
        if(hour==12):
            hour = hour - 12
    elif(meridium =="PM"):
        if(hour!=12):
            hour = hour + 12
    
    if(hour<12):
        s = s[:0] + str(hour) + s[2:] 
        s = "0" + s
    else:
        s = s[:0] + str(hour) + s[2:] 
    s= s[:-2]
    return s
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
