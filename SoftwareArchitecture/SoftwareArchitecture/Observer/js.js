

//Observer Design Pattern
class ObserverPattern {
  constructor(){
    this.observers = []
  }
  subscribe(observer){
    this.observers.push(observer)
  }
  notify (change){
    this.observers.forEach(observer => observer(change))
  }
}

//1- Create a instance of ObserverPattern class
var observerInstance = new ObserverPattern ()

//2- Subscribe to observers after clicking on the button
$('#add').click(() => {
  let input = document.createElement('input');
  input.type = 'text';
  $('#observers').append(input);
  
  let observer = value => ( input.value = value )
  observerInstance.subscribe(observer)
})

//3- Notify input changes to observers
$('#observable').keyup( e => observerInstance.notify(e.target.value) )

