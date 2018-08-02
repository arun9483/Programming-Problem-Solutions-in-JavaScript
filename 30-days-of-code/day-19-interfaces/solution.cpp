#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;
class AdvancedArithmetic
{
  public:
    virtual int divisorSum(int n) = 0;
};

class Calculator : public AdvancedArithmetic
{
  public:
    int divisorSum(int n)
    {
        int sum = 0, i = 2;
        for (i = 2; i <= n / 2; i++)
        {
            if (n % i == 0)
            {
                sum += i;
            }
        }
        if (n > 1)
        {
            return sum + 1 + n;
        }
        else
        {
            return 1;
        }
    }
};

int main()
{
    int n;
    cin >> n;
    AdvancedArithmetic *myCalculator = new Calculator();
    int sum = myCalculator->divisorSum(n);
    cout << "I implemented: AdvancedArithmetic\n"
         << sum;
    return 0;
}
