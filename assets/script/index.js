//создаем переменную для массива
const producerAll = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

//путь к html элементу, куда будет помещаться информация о режиссерах
  let producerContainer = document.querySelector(".producer_container");

  //вызываем метод forEach у массива
  producerAll.forEach ((item) => {
    const producerItem = document.createElement("div"); //создаем новый элемент див, чтобы поместить туда элементы массива
    producerItem.className = 'producer_item_wrapper';  //добавляем класс для стилей
    producerItem.innerHTML = `
    <p class="producer_item_title">${item.name}</p>
    <p class="career">${item.career}</p>
    <a style="color: white;" class="link" href="${item.films}" target="_blank">Фильмография</a>`;

    producerContainer.appendChild(producerItem);
  })

  //выбираем в html элемент куда будем помещать данные о лучших фильмах
  let bestFilms = document.querySelector(".films_list");

  let topFilmsList = producerAll.map(function (elem) {
    const listFilms = document.createElement("span"); // создаем элемент в html куда будет помещаться инф о фильмах
    listFilms.innerHTML =                             // прописываем то, что добавляем в html разметку
    `<span class="best_films_list">${elem.top_rated_film}</span>`;
    containerForBestFilms.appendChild(listFilms);  // помещаем элементы в контейнер
})