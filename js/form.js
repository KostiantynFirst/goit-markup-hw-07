(() => {
    document.querySelector('.js-speakers-form').addEventListener('submit', e => { e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) => 
        console.log(`${name}: ${value}`),
        );

        e.currentTarget.reset();
    });
})();


class Storage {
    constructor([...items] = []) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.items.forEach((el, i, arr) => {
            if (el === itemToRemove) {
                arr.splice(i, 1);
            } 
        })
    }
}


function findOdd(A) {
  
    let result = {};
    let finalResult = "";
  
  for (let i = 0; i < A.length; i +=1) {
    let a = A[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}

let newArr = Object.entries(result);
newArr.forEach((el) => {
    if (el[1] % 2 !== 0) {
        finalResult = el[0];

    }
});
      return finalResult;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5));
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
findOdd([7]);
