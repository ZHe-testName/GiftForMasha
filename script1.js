const greetingEl = document.querySelector('.greeting');
const containerEl = document.querySelector('.container');
const nameEl = document.querySelector('.name');

if (window.innerWidth < 1110) {
  document.body.removeChild(greetingEl);
  document.body.removeChild(containerEl);
  document.body.removeChild(nameEl);

  const lowWidthSpan = document.createElement('span');

  lowWidthSpan.innerText = 'Use more wide screen. (min. width = 1110px)';
  lowWidthSpan.classList.add('error');

  document.body.appendChild(lowWidthSpan);
} else {
  setTimeout(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = './script.js';
  
    document.body.appendChild(script);
  
    document.body.removeChild(greetingEl);
  }, 38000);
}