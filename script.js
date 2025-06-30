function randomStarter(max) { return Math.random() * max; }
function createFloating(className, src, size, duration) {
  const el = document.createElement('img');
  el.src = src;
  el.className = className;
  el.style.width = size + 'px';
  el.style.left = randomStarter(window.innerWidth) + 'px';
  el.style.top = window.innerHeight + 'px';
  el.style.animation = `floatUp ${duration}s linear`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration*1000);
}
function initAnimation(theme) {
  setInterval(() => {
    if (theme === 'romantic') {
      const type = Math.random() < 0.5 ? 'heart' : 'rose';
      const img = type === 'heart'
        ? 'https://i.imgur.com/o7UjVY2.png'
        : 'https://i.imgur.com/3fj8X0x.png';
      const size = randomStarter(40) + 30;
      createFloating(type, img, size, randomStarter(5) + 4);
    }
    else if (theme === 'funny') {
      const img = 'https://i.imgur.com/1JXmxLZ.png';
      createFloating('emoji', img, randomStarter(50)+30, randomStarter(4)+3);
    }
  }, 700);
}