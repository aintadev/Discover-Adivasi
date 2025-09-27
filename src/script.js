let familyTree = JSON.parse(localStorage.getItem('discoverAdivasiFamilyTree')) || [];
let fakeRecords = [];

const familyForm = document.getElementById('family-form');
const familyTreeContainer = document.getElementById('family-tree');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const resultTitle = document.getElementById('result-title');
const resultDetails = document.getElementById('result-details');
const resultSource = document.getElementById('result-source');
const notification = document.getElementById('notification');
const treeCount = document.getElementById('tree-count');

function renderFamilyTree() {
    treeCount.textContent = `${familyTree.length} members`;
    
    if (familyTree.length === 0) {
        familyTreeContainer.innerHTML = '<p class="tree-placeholder">Your family tree will appear here. Start adding members!</p>';
        return;
    }

    let treeHTML = '';
    familyTree.forEach((member) => {
        treeHTML += `
            <div class="tree-item">
                <div class="tree-name">${member.name}</div>
                <div class="tree-details">
                    <span class="tree-ethnicity">${member.ethnicity}</span>
                    ${member.details}
                </div>
            </div>
        `;
    });
    
    familyTreeContainer.innerHTML = treeHTML;
}

function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

familyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const ethnicity = document.getElementById('ethnicity').value;
    const details = document.getElementById('details').value;
    
    familyTree.push({
        name,
        ethnicity,
        details
    });
    
    renderFamilyTree();
    familyForm.reset();
    
    showNotification('Family member added successfully!', 'success');
});

saveBtn.addEventListener('click', function() {
    localStorage.setItem('discoverAdivasiFamilyTree', JSON.stringify(familyTree));
    showNotification('Family tree saved successfully!', 'success');
});

resetBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to reset your family tree? This cannot be undone.")) {
        familyTree = [];
        localStorage.removeItem('discoverAdivasiFamilyTree');
        renderFamilyTree();
        showNotification('Family tree has been reset!', 'success');
    }
});

searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        showNotification('Please enter a name to search!', 'error');
        return;
    }
    
    if (fakeRecords.length === 0) {
        showNotification('Database loading... please try again.', 'error');
        return;
    }
    
    let record = fakeRecords.find(r => 
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (!record) {
        record = fakeRecords[Math.floor(Math.random() * fakeRecords.length)];
    }
    
    const modifiedName = searchTerm + " (aka " + record.name + ")";
    
    resultTitle.textContent = modifiedName;
    
    let detailsHTML = `
        <p><strong>Age:</strong> ${record.age}</p>
        <p><strong>Occupation:</strong> ${record.occupation}</p>
        <p><strong>Notable Achievements:</strong></p>
        <ul>
    `;
    
    record.notable_achievements.forEach(achievement => {
        detailsHTML += `<li>${achievement}</li>`;
    });
    
    detailsHTML += `</ul><p>${record.description}</p>`;
    
    resultDetails.innerHTML = detailsHTML;
    resultSource.textContent = record.source;
    
    resultContainer.style.display = 'block';
    
    resultContainer.scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        fakeRecords = data.records;
    })
    .catch(error => {
        console.error('Error loading database:', error);
        showNotification('Error loading historical records database', 'error');
    });

document.addEventListener('DOMContentLoaded', function() {
    renderFamilyTree();
});
