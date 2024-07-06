const arrowItem = document.querySelector('.navigation__dropdown-items--arrow');
const asideContent = document.querySelector('.navigation__dropdown-content-aside');

arrowItem.addEventListener('mouseenter', function() {
    asideContent.style.display = 'flex';
});

arrowItem.addEventListener('mouseleave', function() {
    asideContent.style.display = 'none';
});

asideContent.addEventListener('mouseenter', function() {
    asideContent.style.display = 'flex';
});

asideContent.addEventListener('mouseleave', function() {
    asideContent.style.display = 'none';
});

const inputChecked = document.querySelector('.pricing__switch');

inputChecked.addEventListener('change', function(e) {
    const checkbox = this.querySelector('input[type="checkbox"]');
    const yearlyElements = document.querySelectorAll('.offer__yearly');
    const priceElements = document.querySelectorAll('.offer__price');
    const switchButtons = document.querySelectorAll('.pricing__time');
    const priceContainers = document.querySelectorAll('.offer__item-price');
   console.log(priceContainers);
    const originalPrices = Array.from(priceElements).map(el => parseInt(el.innerHTML));
    
   priceContainers.forEach(cont => {
    if(checkbox.checked) {
        cont.style.paddingBottom = '28px'
    } else {
        cont.style.paddingBottom = '13px'
    }
   })
    
    yearlyElements.forEach(el => {
        if(checkbox.checked) {
            el.style.display = 'block';
         
          
        } else {
            el.style.display = 'none';
            
           
        }
    })
    priceElements.forEach((el,index) => {
        if(checkbox.checked) {
            el.innerHTML = originalPrices[index] - 10;
        } else {
            el.innerHTML = originalPrices[index] + 10;
        }
    })
    if (checkbox.checked) {
        switchButtons[0].classList.remove('pricing__time--bold');
        switchButtons[1].classList.add('pricing__time--bold');
    } else {
        switchButtons[0].classList.add('pricing__time--bold');
        switchButtons[1].classList.remove('pricing__time--bold');
    }
})


const arrows = document.querySelectorAll('.question__item-icon')
const descriptions = document.querySelectorAll('.question__item-description');

arrows.forEach((arrow,index) => {
    arrow.addEventListener('click', function() {
        
        descriptions.forEach((desc, descIndex) => {
            if(descIndex !== index) {
                desc.classList.remove('question__item-description--active');
                arrows[descIndex].classList.remove('question__item-icon--rotated');
            }
        })
        descriptions[index].classList.toggle('question__item-description--active');
        this.classList.toggle('question__item-icon--rotated');
        
    })
})