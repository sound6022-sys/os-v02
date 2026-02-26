input.onButtonPressed(Button.A, function () {
    if (27 > 입력할_단어) {
        입력할_단어 += 1
    }
    basic.showString("" + (문자열_리스트[입력할_단어]))
})
input.onButtonPressed(Button.AB, function () {
    X += 1
    if (X < 16) {
        I2C_LCD1602.ShowString(문자열_리스트[입력할_단어], X, Y)
        _1번째_줄_입력된_단어 = [입력할_단어, X]
    }
    if (X > 16) {
        if (Y == 0) {
            Y = 1
        }
        if (X < 31) {
            I2C_LCD1602.ShowString(문자열_리스트[입력할_단어], X, Y)
            _2번째_줄_입력된_단어 = [입력할_단어, X]
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 < 입력할_단어) {
        입력할_단어 += -1
    }
    basic.showString("" + (문자열_리스트[입력할_단어]))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (_1번째_줄_입력된_단어[1] == 0) {
    	
    }
    if (_1번째_줄_입력된_단어[1] == 0) {
    	
    }
    if (_1번째_줄_입력된_단어[1] == 0) {
    	
    }
    if (_1번째_줄_입력된_단어[1] == 0) {
    	
    }
})
let _2번째_줄_입력된_단어: number[] = []
let _1번째_줄_입력된_단어: number[] = []
let 문자열_리스트: string[] = []
let 입력할_단어 = 0
let Y = 0
let X = 0
X = -1
Y = 0
입력할_단어 = 0
I2C_LCD1602.LcdInit(39)
문자열_리스트 = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
    if (X > 32) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("ERROR_01", 0, 0)
    }
    if (Y > 2) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("ERROR_02", 0, 0)
    }
})
