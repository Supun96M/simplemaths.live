// Open calling app directly
function openModal() {
  const phoneNumber = '0755327555';
  window.location.href = `tel:${phoneNumber}`;
}

// Close modal (not needed for direct call)
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Not needed anymore
function resetForm() {
  // Empty
}

// Not needed anymore
function submitForm() {
  // Empty
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});
