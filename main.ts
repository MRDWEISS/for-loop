basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let j = 4; j >= 0; j--) {
            led.plot(j, index);
            basic.pause(100);
            //led.unplot(j,index);
            basic.pause(100);
        }
    }
basic.clearScreen()
})
