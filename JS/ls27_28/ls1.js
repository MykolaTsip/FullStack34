
// Backend
function isClearHouse(isDone, fn) {
    setTimeout(() => {
        const money = 1000;
        if (isDone) {
            fn(null, money)
        } else {
            fn('You should clear house')
        }
    }, 1500)
}

function buyJeans(money, fn) {
    setTimeout(() => {
        const priceOfJeans = 500;
        if (money >= priceOfJeans) {
            const rest = money - priceOfJeans;
            fn(null, rest);
        } else {
            fn('Dont enogh money!!!')
        }
    }, 1000)
}

function cafe(money, fn) {
    setTimeout(() => {
        const costComboMenu = 300;
        if (money >= costComboMenu) {
            const rest = money - costComboMenu;
            fn(null, rest)
        } else {
            fn('Not enogh money for eat !!!')
        }
    }, 500)
}

// Front
isClearHouse(true, (error, reward) => {
    if (error) {
        console.log('Error : ', error);
    } else {
        console.log('I get ', reward);
        buyJeans(reward, (errJeans, rest) => {
            if (errJeans) {
                console.log('Error : ', errJeans);
            } else {
                console.log('I bought Jeans, i have: ', rest);
                cafe(rest, (errCafe, rest) => {
                    if (errCafe) {
                        console.log('Error : ', errCafe);
                    } else {
                        console.log('Yummy Yummy, i have: ', rest);
                    }
                })
            }
        })
    }
})




// let timerSecond = 0;

// let intervalTimer = setInterval(() => {
//     ++timerSecond;
//     console.log(timerSecond);
//     if (timerSecond >= 10) {
//         clearInterval(intervalTimer);
//     }
// }, 1000);

// // console.log(intervalTimer);



