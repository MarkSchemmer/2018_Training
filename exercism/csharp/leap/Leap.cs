using System;

public static class Leap
{
    public static bool IsLeapYear(int year) => year%4==0&&year%100!=0?true: year%400==0?true:false;
}