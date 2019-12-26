function closureExample() {

    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
        console.log(`i = ${i}`);
        value += i;
        console.log(`value = ${value}`);

        arrOfFunc.push(function () {
            console.log(`i = ${i}`);
            console.log(value, i);
        });
        console.log(`arr of func ${arrOfFunc}`);
    }

    return arrOfFunc;
}

const res = closureExample();

res[0]();
res[5]();