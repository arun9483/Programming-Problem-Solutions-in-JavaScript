#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference
{
  private:
    vector<int> elements;

  public:
    int maximumDifference;

    Difference(vector<int> elements)
    {
        this->elements = elements;
    }
    void computeDifference()
    {
        int min = this->elements[0], max = this->elements[0];
        int length = this->elements.size();
        int i;
        for (i = 1; i < length; i++)
        {
            if (min > this->elements[i])
                min = this->elements[i];
            if (max < this->elements[i])
                max = this->elements[i];
        }
        this->maximumDifference = max - min;
    }
};

int main()
{
    int N;
    cin >> N;

    vector<int> a;

    for (int i = 0; i < N; i++)
    {
        int e;
        cin >> e;

        a.push_back(e);
    }

    Difference d(a);

    d.computeDifference();

    cout << d.maximumDifference;

    return 0;
};