var Floaty = function() {
    function onFocus() {
      setLabelActive(this.floatingLabel);
    }
    
    function onBlur() {
      setLabel(this);
    }
    
    function setLabelActive(label) {
      label.classList.add('floating-label-active');
    }
    
    function setLabelInactive(label) {
      label.classList.remove('floating-label-active');
    }
    
    function setLabel(input={}) {
      if (input.value && input.value.length) {
        setLabelActive(input.floatingLabel);
      } else {
        setLabelInactive(input.floatingLabel);
      }
    }
    
    var inputs = [].slice.call(document.querySelectorAll('[floating-label]'));
    inputs.forEach(input => {
      var inputId = input.id,
            placeholder = input.getAttribute('floating-label');
      
      var labelEl = document.createElement('label');
      
      labelEl.setAttribute('for', inputId);
      labelEl.innerHTML = placeholder;
      labelEl.classList.add('floating-label');
        
      input.floatingLabel = labelEl;
      input.parentNode.appendChild(labelEl);
      
      input.addEventListener('focus', onFocus);
      input.addEventListener('blur', onBlur);
      
      setLabel(input);
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    Floaty();
  });