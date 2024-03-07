import { Node } from "./Node.js"
import { Compare,defaultCompare } from "./Util.js";

export class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }

    //Metodo Para inserir Na arvore
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            insertNode(this.root, key);
        }
    }

    // Metodo para encontrar um local correto para inserir o novo node
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key); // Se nao houver uma raiz a esquerda, insira o novo node
            } else {
                insertNode(node.left, key);
            }
        } else {
            if(node.right == null){
                node.right = new Node(key); // Se nao houver uma raiz a direita, insira o novo node
            }else{
                this.insertNode(node.right,key)
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);