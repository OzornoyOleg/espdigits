const form = document.querySelector('.main__form')
const wordDigit = document.querySelector('.main__digit')
const input = document.querySelector('.form__input')
const spaceY = 'y '



form.addEventListener('submit', (e) => {
    e.preventDefault()
    wordDigit.textContent = thousandWord(input.value) + ' ' + hundredWord(input.value) + ' ' + dozensWord(input.value) + ' ' + onesWord(input.value)
})

function thousandWord (digit) {
    if (digit[0] == 1) {
        return 'un mil'
    } else if (digit[0] == 2) {
        return 'dos mil'
    }
}

function hundredWord (digit) {
    if (digit[1] == 0) {
        return ''
    } else if (digit[1] == 1) {
        if (digit[2] == 0 && digit[3] == 0) {
            return 'cien'
        } else {
            return 'ciento'
        }
    } else if (digit[1] == 2) {
        return 'doscientos'
    } else if (digit[1] == 3) {
        return 'trescientos'
    } else if (digit[1] == 4) {
        return 'cuatrocientos'
    } else if (digit[1] == 5) {
        return 'quinientos'
    } else if (digit[1] == 6) {
        return 'seiscientos'
    } else if (digit[1] == 7) {
        return 'setecientos'
    } else if (digit[1] == 8) {
        return 'ochocientos'
    } else if (digit[1] == 9) {
        return 'novecientos'
    }
}

function dozensWord (digit) {
    if (digit[2] == 0) {
        if (digit[3] == 0) {
            return ''
        } else if (digit[3] == 1) {
            return ''
        } else if (digit[3] == 2) {
            return ''
        } else if (digit[3] == 3) {
            return ''
        } else if (digit[3] == 4) {
            return ''
        } else if (digit[3] == 5) {
            return ''
        } else if (digit[3] == 6) {
            return ''
        } else if (digit[3] == 7) {
            return ''
        } else if (digit[3] == 8) {
            return ''
        } else if (digit[3] == 9) {
            return ''
        }
    } else if (digit[2] == 1){
        if (digit[3] == 0) {
            return 'diez'
        } else if (digit[3] == 1) {
            return 'once'
        } else if (digit[3] == 2) {
            return 'doce'
        } else if (digit[3] == 3) {
            return 'trece'
        } else if (digit[3] == 4) {
            return 'catorce'
        } else if (digit[3] == 5) {
            return 'quince'
        } else if (digit[3] == 6) {
            return 'dieciseis'
        } else if (digit[3] == 7) {
            return 'diecisiete'
        } else if (digit[3] == 8) {
            return 'dieciocho'
        } else if (digit[3] == 9) {
            return 'diecinueve'
        }
    } else if (digit[2] == 2){
        if (digit[3] == 0) {
            return 'veinte'
        } else if (digit[3] == 1) {
            return 'veintiuno'
        } else if (digit[3] == 2) {
            return 'veintidós'
        } else if (digit[3] == 3) {
            return 'veintitrés'
        } else if (digit[3] == 4) {
            return 'veinticuatro'
        } else if (digit[3] == 5) {
            return 'veinticinco'
        } else if (digit[3] == 6) {
            return 'veintiséis'
        } else if (digit[3] == 7) {
            return 'veintisiete'
        } else if (digit[3] == 8) {
            return 'veintiocho'
        } else if (digit[3] == 9) {
            return 'veintinueve'
        }
    } else if (digit[2] == 3){
        return 'treinta'
    } else if (digit[2] == 4){
        return 'cuarenta'
    } else if (digit[2] == 5){
        return 'cincuenta'
    } else if (digit[2] == 6){
        return 'sesenta'
    } else if (digit[2] == 7){
        return 'setenta'
    } else if (digit[2] == 8){
        return 'ochenta'
    } else if (digit[2] == 9){
        return 'noventa'
    }
}

function onesWord (digit) {
    if (digit[2] == 1 || digit[2] == 2 || digit[3] == 0) {
        return ''
    } else {
        if (digit[3] == 0) {
            return ''
        } else if (digit[3] == 1) {
            return 'y uno'
        } else if (digit[3] == 2) {
            return 'y dos'
        } else if (digit[3] == 3) {
            return 'y tres'
        } else if (digit[3] == 4) {
            return 'y cuatro'
        } else if (digit[3] == 5) {
            return 'y cinco'
        } else if (digit[3] == 6) {
            return 'y seis'
        } else if (digit[3] == 7) {
            return 'y siete'
        } else if (digit[3] == 8) {
            return 'y ocho'
        } else if (digit[3] == 9) {
            return 'y nueve'        
        }
    }
}

