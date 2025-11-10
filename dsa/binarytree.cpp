#include <iostream>
using namespace std;

class Node {
public:
    char data;
    Node* left;
    Node* right;

    Node(char val) {
        data = val;
        left = right = nullptr;
    }
};
class BinaryTree {
private:
    void inorderTraversal(Node* root) {
        if (!root) return;
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }

    void preorderTraversal(Node* root) {
        if (!root) return;
        cout << root->data << " ";
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
};

int main(){
    BinaryTree tree;
}
