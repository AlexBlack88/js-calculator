var view = document.getElementById('display');

function addToDisplay(a){
  view.value += a;
  if(a === 'c') {
    view.value = '';
  }
}

function sqr(x){
  x = view.value;
  x = Math.sqrt(x);
  view.value = x;
 }

function backspace(){
  var n = view.value;
  var len = n.length -1;
  var newN = n.substring(0, len);
  view.value = newN;
}

function result(){
  a = view.value;
  a = eval(a);
  view.value = a;
}