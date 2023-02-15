document.addEventListener('DOMContentLoaded', () => {
  const spinner = document.querySelector('.spinner__wheel');
  const button = document.querySelector('.spinner__button');
  const transparent = document.querySelector('.background__transparent');

  button.addEventListener('click', () => {
    // Button blocker
    transparent.classList.add('transparent-active');

    // Is spinning animation by CSS
    spinner.style.animation = 'spin 0.5s linear infinite';
    button.style.animation = 'spin 0.5s linear infinite';

    let sec = 1;
    const interval = setInterval(() => {
      spinner.style.animation = `spin ${sec}s linear infinite`;
      button.style.animation = `spin ${sec}s linear infinite`;

      if (sec === 2) {
        spinner.style.animation = '';
        button.style.animation = '';
        clearInterval(interval);
        createRandomDegree();
      }

      sec += 0.5;
    }, 3000);

    // Is finishing spin animation by JS
    function createRandomDegree() {
      let startDegree = 360;
      const degreesArray = [0, 45, 90, 135, 180, 226, 270, 315];
      const randomDegree = Math.floor(Math.random() * degreesArray.length);

      const interv = setInterval(() => {
        spinner.style.transform = `rotate(${startDegree}deg)`;
        button.style.transform = `rotate(${startDegree}deg)`;
        
        if (startDegree === degreesArray[randomDegree]) {
          spinner.style.transform = `rotate(${degreesArray[randomDegree]}deg)`;
          clearInterval(interv);
          transparent.classList.remove('transparent-active');
          showPrize(degreesArray[randomDegree]);
          return;
        }

        startDegree--;
      }, 1);
    }

    // Is showing slot text in a popup
    function showPrize(degree) {
      const popup = document.querySelector('.popup');
      const winPopup = document.querySelector('.popup__img-win');
      const losePopup = document.querySelector('.popup__img-lose');
      const decscription = document.querySelector('.popup__description');
      const winBtn = document.querySelector('.win-btn');
      const loseBtn = document.querySelector('.lose-btn');

      switch(degree) {
        case 0:
          popup.classList.remove('hide');
          losePopup.classList.remove('hide');
          loseBtn.addEventListener('click', () => {
            losePopup.classList.add('hide');
            popup.classList.add('hide');
          })
          break;
        case 45:
        case 226:
          decscription.textContent = 'Te espera un 25 giros gratis!';
          popup.classList.remove('hide');
          winPopup.classList.remove('hide');
          winBtn.addEventListener('click', () => {
            winPopup.classList.add('hide');
            popup.classList.add('hide');
          })
          break;
        case 90:
        case 315:
          decscription.textContent = 'Te espera un 50 giros gratis!';
          popup.classList.remove('hide');
          winPopup.classList.remove('hide');
          winBtn.addEventListener('click', () => {
            winPopup.classList.add('hide');
            popup.classList.add('hide');
          })
          break;
        case 135:
        case 270:
          decscription.textContent = 'Te espera un bono de hasta S/.300!';
          popup.classList.remove('hide');
          winPopup.classList.remove('hide');
          winBtn.addEventListener('click', () => {
            winPopup.classList.add('hide');
            popup.classList.add('hide');
          })
          break;
        case 180:
          decscription.textContent = 'Te espera un bono de hasta S/.1,000!';
          popup.classList.remove('hide');
          winPopup.classList.remove('hide');
          winBtn.addEventListener('click', () => {
            winPopup.classList.add('hide');
            popup.classList.add('hide');
          })
          break;
      }
    }
  });
});
