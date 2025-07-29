let queue = [];
let score = 0;

function createCustomer() {
  const items = ['burger', 'fries', 'drink'];
  const order = items[Math.floor(Math.random() * items.length)];
  return { order };
}

function updateQueueDisplay() {
  const container = document.getElementById('customerQueue');
  container.innerHTML = '';
  queue.forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'customer';
    div.innerText = `#${i + 1}\nWant: ${c.order}`;
    container.appendChild(div);
  });
}

function serveCustomer(item) {
  if (queue.length === 0) return;
  const customer = queue[0];
  if (customer.order === item) {
    queue.shift();
    score += 10;
  } else {
    score -= 5;
  }
  updateQueueDisplay();
  document.getElementById('score').innerText = 'Score: ' + score;
}

function gameLoop() {
  if (queue.length < 3) {
    queue.push(createCustomer());
    updateQueueDisplay();
  }
  setTimeout(gameLoop, 3000);
}

gameLoop();
