// const div = document.querySelector('div');

const titles = document.querySelectorAll('h1');

const h1 = document.getElementsByTagName('h1');

// console.dir(titles);
// console.dir(h1);

// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

const mainDiv = document.querySelectorAll('div');

// console.log(mainDiv[1].children);

function printRes() {
    for (let i = 0; i < mainDiv[1].children.length; i++) {
        if (!(i === 0 || i === (mainDiv[1].children.length - 1))) {
            console.log(mainDiv[1].children[i]);
        }
    }
}

// printRes();

// document.getElementsByTagName('div');
// // [...] вернет коллекцию со всеми дивами на странице
//
// document.getElementsByTagName('*');
// // звёздочка означает любой тег - вернутся все элементы на странице

const x = document.getElementsByClassName("test");
// console.log(x);

// <a href=”#” id=”unic-link”>Click me</a>
// document.getElementById('unic-link'); // вернет элемент с id=unic-link

// querySelector - возвращает первый элемент, который соответствует переданному селектору (как querySelectorAll).
// document.querySelector('p'); // вернет первый параграф

/*
element.closest(‘selector’) - ищет предка (родителя) в соответствии с переданным
селектором. Синтаксис селектора аналогичен CSS. В случае совпадения вернет
элемент, если ничего не найдено - null.

<div>
<p>
Other Text
<span class="mark">info</span>
    </p>
    </div>
document.querySelector('.mark').closest('div');
*/

//HomeTask #1
/*function isParent(elem1, elem2) {
    return !!elem2.closest(elem1.tagName.toLowerCase());
}
*/
// console.log(isParent(document.body.children[0], document.querySelector('mark')));
// console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//HomeTask #2
/*
const allHrefs = document.querySelectorAll('a');

const hrefWithCond = [];
[...allHrefs].forEach(item => {
    // console.log(item);
    if (!isParent(document.querySelector('ul'), item)) {
        hrefWithCond.push(item);
    }
});
// console.log(hrefWithCond);
*/
//HomeTask #3

// console.log(document.querySelector('ul').previousElementSibling);
// // console.log(document.querySelector('ul').nextElementSibling);

// # WORK with Atributtes

// console.log(div.classList);

// div.classList.add('article', 'custom');
// div.classList.remove('article');
// div.classList.contains('custom');
// div.classList.toggle('toggle');
//
// div.setAttribute('id', 'myId');
// div.getAttribute('id');
// div.hasAttribute('id');
// div.removeAttribute('id');

// console.log(div.dataset.myattr);

// DOM Manipulation
/*
const title = document.querySelector('h1');

// title.innerHTML = '<span>text</span>';
// title.textContent = 'someText';

// title.appendChild('<span>apppend</span>');
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement();

// * Creation of an Element

const span = document.createElement('span');

span.textContent = 'span created by createElement';

// console.log(span);

// title.appendChild(span);
// title.insertAdjacentElement('beforeend', span);

// * Creation few Elements for one time

const fragment = document.createDocumentFragment();
const colors = ['black', 'green', 'orange'];

colors.forEach(color => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item);
});

// document.body.appendChild(fragment);

// * Deleting of Elements

// title.remove(); not working in IE11
// title.parentElement.removeChild(title);
*/
// HomeTak Properties

// Task #1
/*
const pText = document.querySelector('p').textContent;
// console.log(pText);

// Task #2

function getInfo(elem) {
    const info = document.querySelector(elem);
    console.log(info.nodeName);
    console.log(info.nodeType);
    console.log(info.childNodes);
}

// getInfo('div');

// Task #3

function getTextFromUI(elem) {
    const node = document.querySelector(elem);
    const textArr = Array.from(node.childNodes);
    let linksText = [];
    textArr.forEach(item => {
        // console.log(item.nodeName);
        if (item.nodeName === 'LI') {
            linksText.push(item.textContent);
        }
    });
    // console.log(linksText);
    return linksText;
}

const res = getTextFromUI('ul');
console.log(res);
*/
// Task #4
/*
const text = document.querySelector('p');
const textArr = Array.from(text.childNodes);
textArr.forEach(item => {
    if (item.nodeName === '#text') {
        item.textContent = '-text-';
    }
});


// Task #5
const list = document.querySelector('ul');

list.classList.add('list');

// Task #6
const link = document.querySelectorAll('a')[5];
// console.log(link);
link.setAttribute('id', 'link');

// Task #7
const tags = document.querySelectorAll('li');

for (let i = 0; i < tags.length; i++) {
    if (i === 0 || (i % 2 === 0)) {
        tags[i].classList.add('item');
    }
}

// Task #8
const links = document.querySelectorAll('a');
links.forEach(item => item.classList.add('custom-link'));

// Task #9
const fragment = document.createDocumentFragment();
li1 = document.createElement('li');
li2 = document.createElement('li');
li1.classList.add('new-item');
li2.classList.add('new-item');

fragment.appendChild(li1);
fragment.appendChild(li2);
document.querySelector('ul').appendChild(fragment);

function writeTextItem() {
    const liArr = document.querySelectorAll('li');
    liArr.forEach((item, index) => {
        // console.log(item.textContent, index);
        if (item.textContent === '') {
            item.textContent = `item ${index + 1}`;
        }
    })
}

writeTextItem();

// Task #10
const ul = document.querySelector('ul');
const aArr = document.querySelectorAll('a');

aArr.forEach(item => {
        // console.log(item.parentElement.parentElement.nodeName)
        if (item.parentElement.parentElement.nodeName === ul.nodeName) {
            item.insertAdjacentHTML('beforeend', '<strong>str</strong>')
        }
    }
);

// Task #11
const img = document.createElement('img');
img.setAttribute('src', 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782');
img.setAttribute('alt', 'photo of a funny dog');
document.body.insertBefore(img, document.body.firstChild);
*/

// # Event Handler
/*
const btn = document.querySelector('button');
const link = document.querySelector('a');

// btn.addEventListener('click', function () {
//     console.log('click');
// });
//
// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// ! There is big difference between context with arrow functions and traditional functions

btn.addEventListener('click', function (e) {
    console.log(this);
    console.log(e);
});

function handleClick(e) {
    e.preventDefault();
    console.log(this);
    console.log('click');
}

link.addEventListener('click', handleClick);
//
// // link.removeEventListener('click', handleClick);

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
    const div = document.createElement('div');
    const nestedBtn = document.createElement('button');
    div.textContent = Math.random() * 10;
    nestedBtn.textContent = 'nested';
    div.appendChild(nestedBtn);
    container.appendChild(div);
});

container.addEventListener('click', e => {
    console.dir(e.target);
    if (e.target.tagName === 'BUTTON') {
        console.log('btn clicked');
    }
});
*/

// # Event Bubblings and Event Capturing
/*
const btn = document.querySelector('button');
const div = document.querySelector('.container');

btn.addEventListener('click', e => {
    // console.log(e.target);
    console.log(e.currentTarget);
    // e.stopPropagation();
});

div.addEventListener('click', e => {
    // console.log(e.target);
    console.log(e.currentTarget);
});
*/

// # HomeTask Events and Listeners
// # Task 1
const btn = document.querySelector('button');
// btn.addEventListener('click', e => {
//     console.log(btn.dataset.text);
// });

// # Task 2
/*
btn.addEventListener('mouseover', e => {
    e.target.classList.toggle('focused');
});

btn.addEventListener('mouseout', e => {
    e.target.classList.toggle('focused');
});
*/
// # Task 3 ?!??!
// # Task 4
/*
const btnAdd = document.querySelectorAll('button')[1];
// console.log(btnAdd);
btnAdd.addEventListener('click', e => {
    // console.log(e.target);
    const itemListLength = document.querySelectorAll('li').length;
    let newItem = document.createElement('li');
    newItem.textContent = `Item ${itemListLength + 1}`;
    document.querySelector('ul').appendChild(newItem);
});
*/

// # Task 6

const liArr = document.querySelectorAll('.dropdown-item');
let prevKey;

liArr.forEach((item, key) => {
    item.addEventListener('click', e => {
        if (typeof prevKey === 'undefined') {
            prevKey = key;
        }
        if (prevKey !== key) {
            // console.log(`1is ${prevKey} and ${key}`);
            liArr[prevKey].querySelector('div').classList.toggle('d-none');
            liArr[key].querySelector('div').classList.toggle('d-none');
            prevKey = key;
        } else {
            // console.log(`2is ${prevKey} and ${key}`);
            liArr[key].querySelector('div').classList.toggle('d-none');
            prevKey = key;
        }

    })
});



