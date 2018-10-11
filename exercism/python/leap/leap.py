#is_leap_year = lambda year : True if year%4==0 and year%100 != 0  year%400==0 else False  


def is_leap_year(year):
    if year%4==0 and year%100 != 0 :
        return True
    elif year%400==0:
        return True 
    else :
        return False  