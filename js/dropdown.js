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