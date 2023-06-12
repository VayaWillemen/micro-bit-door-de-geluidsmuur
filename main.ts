function schietWeg () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    servos.P0.setAngle(135)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
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
    servos.P0.setAngle(45)
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
basic.forever(function () {
    init()
    while (!(input.buttonIsPressed(Button.A))) {
        pinkePijleke()
    }
    telAf()
    schietWeg()
})
