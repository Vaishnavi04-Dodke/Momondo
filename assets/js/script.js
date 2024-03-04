// Get all the list items
  var menuItems = document.querySelectorAll('.nav ul li');

  // Add click event listener to each list item
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Remove 'active' class from all list items
          menuItems.forEach(function(item) {
              item.querySelector('a').classList.remove('active');
          });
          // Add 'active' class to the clicked list item
          this.querySelector('a').classList.add('active');
      });
  });
  var buttons = document.querySelectorAll('.switch-button button');
  var forms = document.querySelectorAll('.search-form');
  
  // Add click event listener to each button
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Remove 'active' class from all buttons and forms
          buttons.forEach(function(btn) {
              btn.classList.remove('active');
          });
          forms.forEach(function(form) {
              form.classList.remove('active');
          });
          // Add 'active' class to the clicked button and show the corresponding form
          this.classList.add('active');
          var formId = this.getAttribute('data-form');
          document.getElementById(formId).classList.add('active');
      });
  });
  
  // Prevent form submission from refreshing the page
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your logic here to handle form submission without refreshing the page
      // For example, you can use AJAX to submit the form data asynchronously.
      console.log('Form submitted without refreshing the page');
  });
  