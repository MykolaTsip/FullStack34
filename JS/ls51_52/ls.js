// Pending, Resolved, Rejected

function isClearHouse(isDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const reward = 500;

            if (isDone) {
                resolve(reward)
            } else {
                reject('You shoukd clear house !!!')
            }
        }, 2000)
    })   
};


function buyJeans(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const priceOfJeans = 500;
            if (money >= priceOfJeans) {
                const rest = money - priceOfJeans;
                resolve(rest)
            } else {
                reject('Dont enogh money!!!')
            }
        }, 1000)
    })
}


function cafe(money) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const costComboMenu = 300;
            if (money >= costComboMenu) {
                const rest = money - costComboMenu;
                res(rest)
            } else {
                rej('Not enogh money for eat !!!')
            }
        }, 500)
    })
}

// let result = isClearHouse(true); // Pending

// console.log(result); // Pending

// isClearHouse(true)
//     .then(reward => {
//         console.log('Uraaa', reward);
//         // buyJeans(reward).then(money => {})

//         // return 2222
//         return buyJeans(reward)
//     })
//     .then((reward) => {
//         console.log('then 2: I bought JEANS!!! I have rest: ', reward)
//         return cafe(reward)
//     })
//     .then(reward => {
//         console.log('Yummy Yummy, i have: ', reward);
//     })
//     .catch((err) => {
//         console.log('Errrorororor', err);
//     })
//     .finally(() => {
//         console.log('Day is finished');
//     })



// Promise.all([isClearHouse(false), buyJeans(500), cafe(500)])
//     .then(arr => {
//         console.log(arr);
//     })
//     .catch(err => console.log(err))
//     .finally(() => {console.log('????');})


// Promise.allSettled([isClearHouse(false), buyJeans(1), cafe(1)])
// .then(data => console.log(data))
// .catch(err => console.log(err, 'catch'))

// Promise.race([isClearHouse(false), buyJeans(500), cafe(1)])
//     .then(data => console.log(data))\


async function resAllPorm() {
    // try {
    //     let result = await isClearHouse(true);
    //     console.log('Uraaa i have: ', result);
    //     let rewarBuyJeans = await buyJeans(result);
    //     console.log('I bought JEANS!!! I have rest: ', rewarBuyJeans);
    //     let restCafe = await cafe(rewarBuyJeans)
    //     console.log('Yummy Yummy, i have: ', restCafe);
    // } catch (err) {
        // console.log('ERRRRR: ', err);
    // }


    try {
        let result = await isClearHouse(true);
        console.log('Uraaa i have: ', result);
    } catch (err) {
        console.log('ERRRRR: ', err);
    }

    try {
        let rewarBuyJeans = await buyJeans(500);
        console.log('I bought JEANS!!! I have rest: ', rewarBuyJeans);
    } catch (err) {
        console.log('ERRRRR: ', err);
    }

    try {
        let restCafe = await cafe(500)
        console.log('Yummy Yummy, i have: ', restCafe);
    } catch (err) {
        console.log('ERRRRR: ', err);
    }

    finally {
        console.log('Day is finished');
    }
}


resAllPorm()