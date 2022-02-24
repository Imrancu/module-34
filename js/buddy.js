const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => showBuddy(data))
}
const showBuddy = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        // console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerHTML = `Name: ${buddy.name.first} ${buddy.name.last}, Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}