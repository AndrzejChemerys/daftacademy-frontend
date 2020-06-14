const input = document.querySelector('.search-section__input');
const ul = document.querySelector('.corp-list');
const liElements = document.querySelectorAll('.corp-list__item');
const button = document.querySelector('.search-section__button');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let list = [...liElements];
    list = list.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    list.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask)