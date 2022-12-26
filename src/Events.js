/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const buttonDel = document.createElement('button');
    buttonDel.innerHTML = 'Удали меня';
    document.body.insertAdjacentElement('afterbegin', buttonDel);
    buttonDel.addEventListener('click', () => {
        buttonDel.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.insertAdjacentElement('afterbegin', ul);
    arr.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML = li.innerHTML + element;
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', element),
        );
        ul.insertAdjacentElement('beforeend', li);
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.innerHTML = 'tensor';
    a.addEventListener(
        'click',
        function (event) {
            a.innerHTML = a.innerHTML + ' ' + a.getAttribute('href');
            event.preventDefault();
        },
        { once: true },
    );
    document.body.insertAdjacentElement('afterbegin', a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    document.body.insertAdjacentElement('afterbegin', ul);

    function createLi() {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', () => (li.innerHTML = li.innerHTML + '!'));
        ul.insertAdjacentElement('beforeend', li);
    }
    createLi();

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    ul.insertAdjacentElement('afterend', button);
    button.addEventListener('click', () => {
        createLi();
    });
}
