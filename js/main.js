const spinner = document.querySelector('.spinner__wheel');
const button = document.querySelector('.spinner__button');

button.addEventListener('click', () => {

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
        return;
      }

      startDegree--;
    }, 1);
  }
  
});