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

  // Collect form data
  const studentName = document.querySelector('input[placeholder="e.g. Kasun Perera"]').value;
  const grade = document.querySelectorAll('select')[0].value;
  const phoneNumber = document.querySelector('input[placeholder="+94 77 000 0000"]').value;
  const preferredTime = document.querySelectorAll('select')[1].value;

  // Format message for WhatsApp
  const message = `New Enrollment Request%0A%0AStudent Name: ${studentName}%0AGrade: ${grade}%0AParent Phone: ${phoneNumber}%0APreferred Time: ${preferredTime}%0ATimestamp: ${new Date().toLocaleString()}`;

  // WhatsApp number (Your number with country code, no + or spaces)
  const whatsappNumber = '94755327555'; // Sri Lanka: 94 + 755327555

  // Send to WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Hide form and show success message
  document.getElementById('modal-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'flex';

  // Open WhatsApp
  window.open(whatsappURL, '_blank');

  // Close modal after 3 seconds
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
