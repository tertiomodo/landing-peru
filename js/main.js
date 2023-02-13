const spinner = document.querySelector('.spinner__wheel');
const button = document.querySelector('.spinner__button');

button.addEventListener('click', () => {

  spinner.style.animation = 'spin 0.5s linear infinite';

  let secound = 1;
  const interval = setInterval(() => {

    spinner.style.animation = `spin ${secound}s linear infinite`;

    if (secound === 2) {
      spinner.style.animation = '';
      clearInterval(interval);
      randomNum();
      console.log('interval is cleaning');
    }
    console.log(secound);
    secound += 0.5;
  }, 3000);

  function randomNum() {
    let degree = Math.round(Math.random() * 360);
    switch(degree) {
      case 0:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 45:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 90:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 135:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 180:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 226:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 270:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      case 315:
        spinner.style.transform = `rotate(${degree}deg)`;
        break;
      default:
        randomNum();
    }
  }
  
})