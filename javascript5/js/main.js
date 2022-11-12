console.log('Sample JavaScript #5 HW #17');

function createCarousel(slidesCount = 5) {
  //Завожу все переменные из HTML документа какие могут понадобиться
  let slides = document.querySelector('.slides');
  let slidesItem = document.querySelectorAll('.slides__item');
  let indicators = document.querySelector('.indicators');
  let indicator = document.querySelectorAll('.indicator');
  let controls = document.querySelector('.controls');
  let control = document.querySelectorAll('.control');
  let i = 0;
  let isPause = false;
  let interval = 3000;

  // число слайдов это число длины псевдомасива слайдов который завёл выше
  slidesCount = slidesItem.length;

  //основная функция мув которую будет выполнять интервал
  function move() {
    if (!isPause) {
      slidesItem[i].classList.toggle('active');
      i = i + slidesCount % slidesCount + 1;
      slidesItem[i].classList.toggle('active');
      console.log('active');
    }
  }

  //тут нужна переменная через let сетинтервал с последовательным тоглом текущего slidesItem[i + slidesCount % slidesCount] и тоглом некст +1,
  let iteration = setInterval(move, interval);

  //функция которая при нажатии некст принудительно листнет слайд и рестартнет сетинтервал который описан выше
  function next() {
    isPause = true;
    slidesItem[i].classList.toggle('active');
    i = i + slidesCount % slidesCount + 1;
    slidesItem[i].classList.toggle('active');
    console.log('next');
    setTimeout(() => { isPause = false }, interval);
  }

  //так же но на slideItem[i-1]
  function prev() {
    isPause = true;
    slidesItem[i].classList.toggle('active');
    i = i + slidesCount % slidesCount - 1;
    slidesItem[i].classList.toggle('active');
    console.log('prev');
    setTimeout(() => { isPause = false }, interval);
  }
  //функция паузы для события на кпопку паузы

  // отладить код выше, привязать индикаторы и события на кнопки. Описать стили
  // P.S короче некст и превойс подумать мб можно сократить внутри вместо кучи строк функцию мув, но сначала отладить.
  // slidesItem[i + slidesCount % slidesCount + 1]; - вот эту строчку переделать в i = i + slidesCount %. ..... везде

}

createCarousel(4);


//------------------------
