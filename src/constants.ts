/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { IMenuItem } from './data/types/interfaces/mobileMenu';

export const GOOGLE_TABLE_USE = false;

/* eslint-disable import/prefer-default-export */
export const TEACHERS = [
  'Зеленський Олександр Станіславович',
  'Корж Ірина Миколаївна',
  'Мацвійко Валентина Володимирівна',
  'Сом Тетяна Миколаївна',
  'Івашута Наталія Михайлівна',
  'Солодуненко Тетяна Леонідівна',
  'Дитюк Олена Іванівна',
  'Літушко Ірена Миколаївна',
  'Труба Світлана Петрівна',
  'Савенко Лариса Ростиславівна',
  'Герасименко Світлана Петрівна',
  'Волошина Марина Сергіївна',
  'Ревко Алла Олександрівна',
  'Мірошник Любов Володимирівна',
  'Береговець Наталія Василівна',
  'Йовенко Юлія Вікторівна',
  'Герасименко Віктор Олександрович',
  'Примак Людмила Григорівна',
  'Савченко Алла Іванівна',
  'Масльонка Володимир Григорович',
  'Тарасенко Олена Миколаївна',
  'Мартинова Юлія Сергіївна',
  'Батицька Оксана Анатоліївна',
  'Прищепа Ольга Григорівна',
  'Кононенко Ольга Іванівна',
  'Кононенко Валентина Григорівна',
  'Йовенко Олена Василівна',
  'Пильник Світлана Володимирівна',
  'Орсагош Оксана Валеріївна',
  'Оснач Лариса Миколаївна',
  'Зеленська Наталія Василівна',
  'Коса Тетяна Михайлівна',
  'Зеленська Галина Олексіївна',
  'Міна Алла Миколаївна',
  'Богдан Олена Іванівна',
  'Мурза Світлана Миколаївна',
  'Чала Світлана Борисівна',
  'Вишненко Діана Петрівна',
  'Корявець Лариса Володимирівна',
  'Башта Алла Миколаївна',
  'Бугай Павло Віталійович',
  'Литвякова Наталія Вікторівна',
  'Пилипенко Лариса Віталіївна',
  'Чава Сергій Анатолійович',
  'Плеса Інна Вікторівна',
  'Чава Марія Омелянівна',
  'Парандич Любов Олександрівна',
  'Федоренко Юрій Михайлович',
  'Турченяк Ліна Петрівна',
  'Безродна Олена Феодосіївна',
  'Кузуб Галина Федорівна',
  'Таценко Світлана Вікторівна',
  'Гуща Ірина Віталіївна',
  'Дуденко Олена Юріївна',
  'Савчук Любов Василівна',
  'Веремій Світлана Миколаївна',
  'Передерій Олена Пилипівна',
  'Гнилуша Лілія Володимирівна',
  'Мозоль Олена Володимирівна',
  'Лавренець Юлія Миколаївна',
  'Лапко Юлія Миколаївна',
  'Димитришина Ярина Дмитрівна',
  'Атрощенко Зоя Володимирівна',
  'Долиненко Вікторія Андріївна',
  'Гнилуша Олександр Олександрович',
  'Титаренко Альона Сергіївна',
  'Потапова Альона Олегівна',
  'Герасименко Марія Петрівна',
  'Анюховська Людмила Петрівна',
  'Бойко Лідія Анатоліївна',
  'Глушко Тамара Михайлівна',
  'Гуз Ірина Анатоліївна',
  'Давиденко Микола Григорович',
  'Давиденко Ольга Віталіївна',
  'Дороган Наталія Михайлівна',
  'Звєрєв Василь Юрійович',
  'Кашперська Людмила Василівна',
  'Компанець Любов Григорівна',
  'Купріян Людмила Володимирівна',
  'Лопата Олена Миколаївна',
  'Мельник Валентина Михайлівна',
  'Орсагош Руслан Ілліч',
  'Пилипенко Ольга Павлівна',
  'Підвербна Любов Василівна',
  'Пономарчук Валентина Олексіївна',
  'Сало Алла Володимирівна',
  'Ткаченко Ярина Василівна',
  'Турченяк Петро Йосипович',
  'Халімон Олександр Анатолійович',
  'Чала Віра Іванівна',
  'Шемендюк Любов Іванівна',
  'Шиш Наталія Василівна',
  'Павленко Наталія Володимирівна',
  'Бабак Володимир Григорович',
  'Саповець Ніна Василівна',
  'Івахненко Олександр Миколайович',
  'Ющенко Ольга Станіславівна',
  'Брюква Ольга Миколаївна',
  'Ніколаєнко Юлія Олександрівна'
];

export const REASONS = [
  { title: 'Лікарняний', label: 'ТН' },
  { title: 'Відпустка основна', label: '' },
  { title: 'Відпустка по пологам', label: 'ВП' },
  { title: 'Відпустка без збереження', label: 'НА' }
];

export const COURSES_TABLE_COLLS = [
  { field: 'Позначка часу', title: 'Уведено' },
  { field: 'Електронна адреса', title: 'Email' },
  { field: 'Працівник, який пройшов курсову підготовку', title: 'ПІБ' },
  { field: 'Назва курсів, семінару, вебінару тощо', title: 'Тема' },
  { field: 'Кількість годин', title: 'Всього годин' },
  { field: 'З них з інклюзії', title: 'з інклюзії' },
  {
    field: 'З них з надання психологічної підтримки учасникам освітнього процесу',
    title: 'з надання психологічної підтримки'
  },
  { field: 'Тип документа', title: 'Тип документа' },
  { field: 'Номер документа (якщо номера немає, вкажіть "бн" без лапок)', title: 'Номер' },
  { field: 'Дата видачі документа', title: 'Дата документу' },
  {
    field: 'Назва організації чи платформи, на базі якої проходила підготовка, навчання',
    // eslint-disable-next-line prettier/prettier
    title: "Суб'єкт підвищення"
  },
  { field: 'Форма навчання', title: '' },
  { field: 'Фотокопія сертифікату, свідоцтва тощо', title: 'Документ' },
  { field: 'Програма курсів, заходу', title: 'Програма' },
  { field: 'Потребує зарахування рішенням педради', title: 'Потреба в зарахуванні' },
  { field: 'Рішення педради про зарахування', title: 'Педрада' },
  { field: 'Рік атестації', title: 'Рік атестації' }
];

export const GOLOVA = 'Орсагош Оксані Валеріївні';
export const ZAKLAD = 'Куликівського ліцею';

export const MENU: IMenuItem[] = [
  {
    id: '0',
    N: '1',
    Title: 'Публічна інформація...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '10',
        N: '10',
        Title: 'Статут закладу',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/file/d/10r19fgnB2rxJR5hlwuSgob_8rr5NAC1d/view',
        children: []
      },
      {
        id: '11',
        N: '11',
        Title: 'Ліцензії на провадження освітньої діяльності...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '12',
        N: '12',
        Title: 'Структура, органи управління та кадровий склад закладу...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '13',
        N: '13',
        Title: 'Освітня програма',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/open?id=1ho6FQhl38iqba_jNdxaOJtm3d3cXVws3&usp=drive_fs',
        children: []
      },
      {
        id: '14',
        N: '14',
        Title: 'Територія обслуговування',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/open?id=1HsHSO0fikdWJZ9eseiaVcprj9Nyx6uej',
        children: []
      },
      {
        id: '15',
        N: '15',
        Title: 'Ліцензований обсяг та фактична кількість осіб...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '16',
        N: '16',
        Title: 'Матеріально-технічне забезпечення закладу освіти...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '17',
        N: '17',
        Title: 'Моніторинг якості освіти...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '18',
        N: '18',
        Title: 'Річний звіт про діяльність закладу',
        FathMenu: '1',
        show: '1',
        link: '/site/page.html?titlePages=%D0%A0%D1%96%D1%87%D0%BD%D0%B8%D0%B9%20%D0%B7%D0%B2%D1%96%D1%82%20%D0%BF%D1%80%D0%BE%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D1%96%D1%81%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BA%D0%BB%D0%B0%D0%B4%D1%83&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '19',
        N: '19',
        Title: 'Правила прийому до закладу',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/open?id=12LNW2day2j2ir0d7bBSd_r83i53E0Nrt',
        children: []
      },
      {
        id: '20',
        N: '20',
        Title: 'Інша інформація про заклад...',
        FathMenu: '1',
        show: '1',
        link: '/site/page.html?titlePages=Інша%20інформація%20про%20заклад&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '21',
        N: '21',
        Title: 'Критерії оцінювання',
        FathMenu: '1',
        show: '1',
        link: '/site/page.html?titlePages=%D0%9A%D1%80%D0%B8%D1%82%D0%B5%D1%80%D1%96%D1%97%20%D0%BE%D1%86%D1%96%D0%BD%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '22',
        N: '22',
        Title: 'Фінансова звітність',
        FathMenu: '1',
        show: '1',
        link: '/site/page.html?titlePages=Фінансова%20інформація&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '23',
        N: '23',
        Title: 'Положення та порядки',
        FathMenu: '1',
        show: '1',
        link: '/site/page.html?titlePages=Положення%20та%20порядки&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '24',
        N: '24',
        Title: 'Орієнтовний план підвищення кваліфікації...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '25',
        N: '25',
        Title: 'Угоди, меморандуми...',
        FathMenu: '1',
        show: '1',
        link: '#',
        children: []
      },
      {
        id: '47',
        N: '51',
        Title: 'Закупівлі...',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/drive/folders/1-TrElJWCJxZ89SBddKFJhsdgVIP181bn?usp=sharing',
        children: []
      },
      {
        id: '48',
        N: '52',
        Title: 'Фінансовий звіт за вересень-грудень 2022',
        FathMenu: '1',
        show: '1',
        link: 'https://docs.google.com/document/d/1B8h-7RAop4_CWA7oqOWw3jCyqXY0xT1_?rtpof=true&usp=drive_fs',
        children: []
      },
      {
        id: '57',
        N: '59',
        Title: 'Атестація педагогічних працівників',
        FathMenu: '1',
        show: '1',
        link: './page.html?titlePages=Атестація%20педагогічних%20працівників%202023-2024%20н.р.&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '69',
        N: '71',
        Title: 'Фінансовий звіт за 2023 рік',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/drive/folders/1-qGZWWSQsuThiO8eOp-0828zhGBU3jnj?usp=sharing',
        children: []
      },
      {
        id: '74',
        N: '76',
        Title: 'Кошторис на 2024 рік',
        FathMenu: '1',
        show: '1',
        link: 'https://drive.google.com/drive/folders/1bZscqs3dMBH1dXlYWP8P2JXpZINBAiZR?usp=sharing',
        children: []
      }
    ]
  },
  {
    id: '1',
    N: '2',
    Title: 'НУШ...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '55',
        N: '57',
        Title: 'Навчальні програми 5-6 кл.НУШ',
        FathMenu: '2',
        show: '1',
        link: 'https://drive.google.com/drive/folders/1Zkyzc6SYQ-Np0JjT0XCjrWimc2h_Q-FE?usp=sharing',
        children: []
      }
    ]
  },
  {
    id: '2',
    N: '3',
    Title: 'Виховна робота...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '27',
        N: '27',
        Title: 'Президентська республіка',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=Самоврядування&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '38',
        N: '41',
        Title: 'Для класного керівника',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=%D0%92%D0%B8%D1%85%D0%BE%D0%B2%D0%BD%D0%B0%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B0&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '39',
        N: '42',
        Title: 'Самоврядування',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=%D0%A1%D0%B0%D0%BC%D0%BE%D0%B2%D1%80%D1%8F%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '40',
        N: '43',
        Title: 'Національно-патріотичне виховання',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=Дякуємо%20захисникам%20та%20захисницям%20України!&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '41',
        N: '44',
        Title: 'Правове виховання...',
        FathMenu: '3',
        show: '1',
        link: '#',
        children: [
          {
            id: '42',
            N: '45',
            Title: 'Правова допомога',
            FathMenu: '44',
            show: '1',
            link: '/site/page.html?titlePages=Правова%20допомога&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
            children: []
          }
        ]
      },
      {
        id: '52',
        N: '32',
        Title: 'Сокіл "Джура" 2021',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=%C2%AB%D0%A1%D0%BE%D0%BA%D1%96%D0%BB%C2%BB%20(%C2%AB%D0%94%D0%B6%D1%83%D1%80%D0%B0%C2%BB)&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '53',
        N: '40',
        Title: 'Сокіл "Джура" 2022',
        FathMenu: '3',
        show: '1',
        link: '/site/page.html?titlePages=%C2%AB%D0%A1%D0%BE%D0%BA%D1%96%D0%BB%C2%BB%20(%C2%AB%D0%94%D0%B6%D1%83%D1%80%D0%B0%C2%BB)%202022&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '54',
        N: '56',
        Title: 'Сокіл "Джура" 2023',
        FathMenu: '3',
        show: '1',
        link: './page.html?titlePages=%C2%AB%D0%A1%D0%BE%D0%BA%D1%96%D0%BB%C2%BB%20(%C2%AB%D0%94%D0%B6%D1%83%D1%80%D0%B0%C2%BB)%202023&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      }
    ]
  },
  {
    id: '3',
    N: '4',
    Title: 'Олімпіади, конкурси...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '30',
        N: '30',
        Title: 'Всеукраїнські олімпіади ІІ етап...',
        FathMenu: '4',
        show: '1',
        link: '#',
        children: [
          {
            id: '58',
            N: '60',
            Title: '2021-2022 н.р.',
            FathMenu: '30',
            show: '1',
            link: 'https://drive.google.com/drive/folders/1dOy7-Q5FQVit2NF4523xyTjAcqB4dlGA?usp=sharing',
            children: []
          },
          {
            id: '59',
            N: '61',
            Title: '2022-2023 н.р.',
            FathMenu: '30',
            show: '1',
            link: 'https://drive.google.com/drive/folders/1ef__l9PhA61BJR4EdQ0Q-FkbLnOnckRO?usp=sharing',
            children: []
          },
          {
            id: '60',
            N: '62',
            Title: '2023-2024 н.р.',
            FathMenu: '30',
            show: '1',
            link: 'https://drive.google.com/drive/folders/17MpFM0yI_jNtLFGgvoqYicf17DzsU8pr?usp=sharing',
            children: []
          },
          {
            id: '61',
            N: '63',
            Title: 'Раніше',
            FathMenu: '30',
            show: '1',
            link: 'https://drive.google.com/drive/folders/1dveiTtWveHc-pJwu195tZKjrlixoLo2Y?usp=sharing',
            children: []
          }
        ]
      },
      {
        id: '31',
        N: '31',
        Title: 'Всеукраїнські олімпіади ІІІ етап...',
        FathMenu: '4',
        show: '1',
        link: '#',
        children: [
          {
            id: '62',
            N: '64',
            Title: '2023-2024 н.р.',
            FathMenu: '31',
            show: '1',
            link: '#',
            children: [
              {
                id: '63',
                N: '65',
                Title: 'к. ім. Яцика',
                FathMenu: '64',
                show: '1',
                link: 'https://docs.google.com/document/d/1gJkANwGN1BVFH_IUYZjU5ufuL7E0Dor1',
                children: []
              },
              {
                id: '64',
                N: '66',
                Title: 'Українська мова та література',
                FathMenu: '64',
                show: '1',
                link: 'https://docs.google.com/document/d/1gf72TRawnYXC8bStDt2mbKCYB3lU6bMT',
                children: []
              },
              {
                id: '65',
                N: '67',
                Title: 'Англійська мова',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/open?id=1hJjuDQDgS6QKhJfHzOeUw6T8Oyy-0HQd&usp=drive_fs',
                children: []
              },
              {
                id: '66',
                N: '68',
                Title: 'Астрономія',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/open?id=1hN7yUHgn6aZwGBpz9eijztsr9yzu75mg&usp=drive_fs',
                children: []
              },
              {
                id: '67',
                N: '69',
                Title: 'Біологія',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/open?id=1hMkZZFXQYoPM6dYvts6pQ725rx8U6au0&usp=drive_fs',
                children: []
              },
              {
                id: '68',
                N: '70',
                Title: 'Історія',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/open?id=1hNzccpL6RYiDl4tL6q96Zo1KuDgfkIfw&usp=drive_fs',
                children: []
              },
              {
                id: '70',
                N: '72',
                Title: 'Фізика',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/drive/folders/1iHYhurihObZxjVoENez4fRoskawI5kdZ?usp=sharing',
                children: []
              },
              {
                id: '71',
                N: '73',
                Title: 'Правознавство',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/drive/folders/1iIBa7hNxDImdq0tLNSktcBRM8S4HDJhE?usp=sharing',
                children: []
              },
              {
                id: '72',
                N: '74',
                Title: 'Математика',
                FathMenu: '64',
                show: '1',
                link: 'https://drive.google.com/drive/folders/1iBTXHcBiSu4bRMzMuPZprIYyFw90_mfB?usp=sharing',
                children: []
              },
              {
                id: '73',
                N: '75',
                Title: 'Географія',
                FathMenu: '64',
                show: '1',
                link: 'https://docs.google.com/document/d/1TMLOncxFMplcrsecOlcb2b5zWMet4wSP/edit?usp=sharing&ouid=107211966436332045560&rtpof=true&sd=true',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '4',
    N: '5',
    Title: 'Учням, батькам...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '6',
        N: '7',
        Title: 'Розклад уроків на сайті NZ',
        FathMenu: '5',
        show: '1',
        link: 'https://nz.ua/school2458/schedule',
        children: []
      },
      {
        id: '28',
        N: '28',
        Title: 'Психологічна служба',
        FathMenu: '5',
        show: '1',
        link: 'https://sites.google.com/view/lavrenec/%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0',
        children: []
      },
      {
        id: '36',
        N: '38',
        Title: 'Графік контрольних робіт',
        FathMenu: '5',
        show: '1',
        link: 'https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQTK48uxo6YoQC1rmQVmfIDDf1V60MCvGfzYukgVxuY-Cr0p0hS6PdPatJ-XB5_FdgRXDwiJMXppIXw/pubhtml?gid=0&single=true',
        children: []
      },
      {
        id: '37',
        N: '39',
        Title: 'Сьогодні в меню',
        FathMenu: '5',
        show: '1',
        link: '/site/menu.html',
        children: []
      },
      {
        id: '46',
        N: '50',
        Title: 'Розклад уроків',
        FathMenu: '5',
        show: '1',
        link: 'https://drive.google.com/file/d/1mLDJJ6QnO9jN_OF9qXSO2vBegTvNM4oB/view?usp=sharing',
        children: []
      },
      {
        id: '56',
        N: '58',
        Title: 'Розклад дзвінків',
        FathMenu: '5',
        show: '1',
        link: '/site/page.html?titlePages=Розклад%20дзвінків&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      }
    ]
  },
  {
    id: '5',
    N: '6',
    Title: 'Дистанційне навчання',
    FathMenu: '0',
    show: '1',
    link: '/site/page.html?titlePages=Дистанційне%20навчання&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    children: [
      {
        id: '29',
        N: '29',
        Title: 'Події',
        FathMenu: '6',
        show: '1',
        link: '/site/news.html',
        children: []
      }
    ]
  },
  {
    id: '7',
    N: '8',
    Title: 'Бібліотека',
    FathMenu: '0',
    show: '1',
    link: '/site/page.html?titlePages=Бібліотека&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    children: []
  },
  {
    id: '8',
    N: '33',
    Title: 'Методична робота...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '32',
        N: '34',
        Title: 'Уведення результатів курсової підготовки',
        FathMenu: '33',
        show: '1',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScQf3nU3fBL49wHU7Lg1KCK8RQijuGY6kbGW2TYHPO14YUI8g/viewform',
        children: []
      },
      {
        id: '33',
        N: '35',
        Title: 'Перегляд результатів курсової підготовки',
        FathMenu: '33',
        show: '1',
        link: '/site/kursi.html',
        children: []
      },
      {
        id: '34',
        N: '36',
        Title: 'Уведення результатів участі учнів у конкурсах та олімпіадах',
        FathMenu: '33',
        show: '1',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfE-xeahypl-eogkpxXPeQAe6oSv3B-FI27qruEy5AB19M7hg/viewform',
        children: []
      },
      {
        id: '35',
        N: '37',
        Title: 'Уведення результатів участі педпрацівників',
        FathMenu: '33',
        show: '1',
        link: 'https://docs.google.com/spreadsheets/d/1zdmpCHLVByiPLaawPAnBEBXzG9z7qv2_RRwVsmiwW2A/edit#gid=0',
        children: []
      }
    ]
  },
  {
    id: '9',
    N: '9',
    Title: 'Інтерактив...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: []
  },
  {
    id: '26',
    N: '26',
    Title: 'Національно-патріотичне виховання',
    FathMenu: '0',
    show: '1',
    link: '/site/page.html?titlePages=Дякуємо%20захисникам%20та%20захисницям%20України!&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    children: []
  },
  {
    id: '43',
    N: '46',
    Title: 'Структурні підрозділи...',
    FathMenu: '0',
    show: '1',
    link: '#',
    children: [
      {
        id: '44',
        N: '48',
        Title: 'ДЮСШ',
        FathMenu: '46',
        show: '1',
        link: '/site/page.html?titlePages=ДЮСШ&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
        children: []
      },
      {
        id: '45',
        N: '49',
        Title: 'ЦПО...',
        FathMenu: '46',
        show: '1',
        link: 'https://sites.google.com/view/turklub/',
        children: []
      }
    ]
  },
  {
    id: '49',
    N: '53',
    Title: 'Учительська',
    FathMenu: '0',
    show: '1',
    link: '/site/page.html?titlePages=%D0%A3%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    children: []
  },
  {
    id: '50',
    N: '54',
    Title: 'Профілактика булінгу',
    FathMenu: '0',
    show: '1',
    link: 'https://drive.google.com/open?id=1r6ByauwL-fd0fzo_ZeL9DQ2gCXHk1M8R',
    children: []
  },
  {
    id: '51',
    N: '55',
    Title: 'Про заклад',
    FathMenu: '0',
    show: '1',
    link: './page.html?titlePages=Про%20заклад&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    children: []
  }
];
