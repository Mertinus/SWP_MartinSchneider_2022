localStorage.setItem('name', 'Jack');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name'); 

//sessionStorage funktioniert gleich, wird aber nach schließen des tabs automatisch gelöscht

//cookies sind gut um daten auch an den server zu senden
document.cookie = 'name=Herbert';
document.cookie = 'lastname=Bert';
console.log(document.cookie);
