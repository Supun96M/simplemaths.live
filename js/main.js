// Open modal
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
  resetForm();
}

// Reset form and hide success message
function resetForm() {
  document.getElementById('modal-form').style.display = 'block';
  document.getElementById('success-msg').style.display = 'none';
  document.getElementById('modal-form').reset();
}

// Submit form
function submitForm() {
  const form = document.getElementById('modal-form');
  const inputs = form.querySelectorAll('input, select');
  
  // Basic validation
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value || input.value === 'Select Grade' || input.value === 'Select Time') {
      isValid = false;
    }
  });

  if (!isValid) {
    alert('Please fill in all fields');
    return;
  }

  // Hide form and show success message
  document.getElementById('modal-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'flex';

  // Optional: Close modal after 3 seconds
  setTimeout(() => {
    closeModal();
  }, 3000);
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
