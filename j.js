class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.current = null;
  }

  push(){
    let res = document.getElementById('res');
    let data = document.getElementById('data').value;
    if(!this.head){
      this.head = this.current = new Node(data);
    }else{
      let tmp = this.head;
      this.head = new Node(data,null,tmp);
      tmp.next = this.head;
    }
 res.innerHTML = '<img src="'+this.head.data+'" >';
    }
    up(){
      if(this.current && this.current.next){
      this.current = this.current.next;
    }
  }
    down(){
      if(this.current && this.current.prev){
      this.current = this.current.prev;
    }
  }
  showCurrent() {
    if (this.current)
    res.innerHTML = '<img src="'+this.current.data+'" >';
  }

}
let ll = new Stack();

function push(){
  ll.push();
  ll.showCurrent()
}

function up(){
  ll.up();
  ll.showCurrent()

}

function down(){
  ll.down();
  ll.showCurrent()

}
