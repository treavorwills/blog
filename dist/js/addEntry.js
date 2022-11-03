
// Creates new Entry
const newEntryHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#entry-title').value.trim();
    const entryBody = document.querySelector('#entry-body').value.trim();

    const response = await fetch('/api/entry', {
        method: 'POST',
        body: JSON.stringify({ title, entryBody }),
        headers: { 'Content-Type': 'application/json', },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
        console.log('save button! good');
    } else {
        alert(`Please enter a title and a body to save the post`);
        console.log('save button! bad');
    }
};

document.getElementById('save').addEventListener('click', newEntryHandler);
