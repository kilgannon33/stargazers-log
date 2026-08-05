const list = document.getElementById('starred-list');

async function loadEvents() {
  try {
    const response = await fetch('events.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const events = await response.json();

    events.forEach((event) => {
      const item = document.createElement('li');
      item.className = 'event';

      item.innerHTML = `
        <div class="event-header">
          <div>
            <div class="event-name">${event.name}</div>
            <div class="event-owner">Owner: ${event.owner}</div>
          </div>
          <div class="event-date">Starred: ${event.starred_at}</div>
        </div>
        <p>${event.description}</p>
        <div class="event-language">Language: ${event.language}</div>
      `;

      list.appendChild(item);
    });
  } catch (error) {
    console.error('Unable to load starred repositories:', error);
    list.innerHTML = '<li class="event">Unable to load starred repositories.</li>';
  }
}

loadEvents();
