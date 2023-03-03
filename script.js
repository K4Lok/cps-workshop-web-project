const container = document.getElementById('events');

let events = [];
fetch("https://backend.cpsumsu.org/api/events")
    .then(function(res) {
        return res.json()
    })
    .then(function(result) {
        console.log(result.data)
        events = result.data
        // createEventCards(events)
    })

function createEventCards(items) {
    let events = '';
    
    items.forEach(function(item) {
        events += ` <div>
                        <span>${item.event_type}</span>
                        <img src="${item.image}" alt="Post for ${item.name}">
                        <p>${item.date}</p>
                        <h3>${item.name}</h3>
                    </div>`
    })

    container.innerHTML = events;
}