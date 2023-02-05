var helloWorld = document.createElement('div');
helloWorld.innerHTML = 'Hello World';
helloWorld.style.position = 'absolute';
helloWorld.style.top = '50%';
helloWorld.style.left = '50%';
helloWorld.style.transform = 'translate(-50%, -50%)';
helloWorld.style.fontSize = '50px';
helloWorld.style.cursor = 'pointer';
helloWorld.onclick = function() {
  var click = document.createElement('div');
  click.innerHTML = 'Click!';
  click.style.position = 'absolute';
  click.style.top = Math.random() * 100 + '%';
  click.style.left = Math.random() * 100 + '%';
  click.style.transform = 'translate(-50%, -50%)';
  click.style.fontSize = '50px';
  document.body.appendChild(click);
  setTimeout(function() {
    document.body.removeChild(click);
  }, 2000);
};
document.body.appendChild(helloWorld);
