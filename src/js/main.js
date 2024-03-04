
// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// klik diluar hamburger
// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

// // modal item box 1
const itemDetailModal = document.querySelector('.itemModal');

const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
//     btn.onclick = (e) => {
//         e.preventDefault();
//         itemDetailModal.style.display = 'flex';
//     };
// });

// MODAL BOX

// Function to open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }

  function closeMod() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.style.display = 'none';
    });
}
  
  // Function to close a specific modal
  window.onclick = function(event) {
    if (event.target && event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const closeIcons = document.querySelectorAll('.close');

    closeIcons.forEach(function(closeIcon) {
        closeIcon.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});








