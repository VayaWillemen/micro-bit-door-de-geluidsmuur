function schietWeg (openTijd: number) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    servos.P0.setAngle(hoek_schietweg)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(openTijd)
    servos.P0.setAngle(hoek_idle)
}
function telAf () {
    for (let index = 0; index < 6; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
        basic.showNumber(game.score())
        game.addScore(-1)
    }
}
function init () {
    game.setScore(5)
    servos.P0.setAngle(hoek_idle)
}
function pinkePijleke () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        return
    }
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        return
    }
    basic.pause(50)
}
let hoek_schietweg = 0
let hoek_idle = 0
hoek_idle = 135
hoek_schietweg = 45
basic.forever(function () {
    init()
    while (!(input.buttonIsPressed(Button.A))) {
        pinkePijleke()
    }
    if (input.buttonIsPressed(Button.B)) {
        schietWeg(1000)
    } else {
        telAf()
        schietWeg(5000)
    }
})
