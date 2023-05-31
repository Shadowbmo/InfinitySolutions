 // Get DOM Elements
 const modal = document.querySelector('#my-modal');
 const modalBtn = document.querySelector('#modal-btn');
 const closeBtn = document.querySelector('.close');

  // Get DOM Elements
  const modal2 = document.querySelector('#my-modal2');

 // Events
 closeBtn.addEventListener('click', closeModal);
 window.addEventListener('click', outsideClick);

 // Open
 function openModal() {
     modal.style.display = 'block';
 }

 // Close
 function closeModal() {
     modal.style.display = 'none';
 }

 function openModal2() {
    modal2.style.display = 'block';
}

// Close
function closeModal2() {
    modal2.style.display = 'none';
}



 // Close If Outside Click
 function outsideClick(e) {
     if (e.target == modal) {
         modal.style.display = 'none';
     }
 }