#include <iostream>
using namespace std;

class stack{
    private:
        int size;
        int arr[];
    public:
        void push(int val){
            arr[size]=val;
            size++;
        }
        void pop(){
            cout << "poped element" << arr[size-1];
            size--;
        }
        void display(){
            int n = sizeOf(arr)/sizeOf(arr[0]);
            for(int i = 0; i<n; i++){
                cout << arr[i] << endl;
            }
        }
}

int main(){
    stack s(5);  

    s.push(5);
    s.push(4);
    s.push(3);
    s.pop();
    s.display();
}

