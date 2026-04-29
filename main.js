// Function to open the enrolment modal
function openModal() { 
    document.getElementById('modal').classList.add('open'); 
}

// Function to close the enrolment modal
function closeModal() { 
    document.getElementById('modal').classList.remove('open'); 
    document.getElementById('modal-form').style.display = 'block'; 
    document.getElementById('success-msg').style.display = 'none'; 
}

// Function to simulate form submission
function submitForm() { 
    document.getElementById('modal-form').style.display = 'none'; 
    document.getElementById('success-msg').style.display = 'block'; 
}

// Function to simulate file downloading
function dlClick(e, name) { 
    e.preventDefault(); 
    alert('Downloading: ' + name + '\n\n(Note: Upload your PDF files to your GitHub repository and update the href="" attributes in the HTML to point to them.)'); 
}

// Event Listeners for closing the modal when clicking outside of it
document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) { 
            if(e.target === this) closeModal(); 
        });
    }
});
