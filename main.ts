input.onButtonPressed(Button.A, function () {
    leftPress += 1
})
input.onButtonPressed(Button.B, function () {
    rightPress += 1
})
let random = 0
let leftPress = 0
let rightPress = 0
let amountRightArrows = 0
let amountLeftArrows = 0
for (let index = 0; index < 5; index++) {
    random = randint(0, 1)
    if (random == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(2000)
        amountLeftArrows += 1
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(2000)
        amountRightArrows += 1
    }
}
if (amountLeftArrows == leftPress && amountRightArrows == rightPress) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
} else {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
}
