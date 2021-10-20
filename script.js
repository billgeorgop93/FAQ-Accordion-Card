document.querySelectorAll('.accordion-question').forEach((item) => { //Select every question to do
    item.addEventListener('click', (event) => {
      console.log('click!');
      let accCollapse = item.nextElementSibling;

      if (!item.classList.contains('collapsing')) {
        // Open item at the accordion
        if (!item.classList.contains('open')) {
          console.log('toggle accordion button');

          accCollapse.style.display = 'block';
          let accHeight = accCollapse.clientHeight ;
          console.log (accHeight);

          setTimeout(() => {
            accCollapse.style.height = accHeight + 'px';
            accCollapse.style.display = '';
          }, 1);

          accCollapse.classList = 'accordion-collapse collapsing';

          setTimeout(() => {
            console.log('open accordion answer');
            accCollapse.classList = 'accordion-collapse collapse open';
          }, 300);
        }
        // Close accordion item
        else {
            // Remove the 'collapse open' from .accordion-collapse, add 'collapsing'
            accCollapse.classList = 'accordion-collapse collapsing';

            setTimeout(() =>{
              accCollapse.style.height = '0px';
            }, 1);

            // After x amount of time, remove 'collapsing' class and add 'collapse' class
            setTimeout(() => {
              console.log('close accordion answer');
              accCollapse.classList = 'accordion-collapse collapse';
              accCollapse.style.height = '';
            }, 300);
        }
        item.classList.toggle('open');
      }
    });
});