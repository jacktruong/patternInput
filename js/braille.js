$(document).ready(function() {
    var a = [];
    a[0b100000] = 'a';
    a[0b101000] = 'b';
    a[0b110000] = 'c';
    a[0b110100] = 'd';
    a[0b100100] = 'e';
    a[0b111000] = 'f';
    a[0b111100] = 'g';
    a[0b101100] = 'h';
    a[0b011000] = 'i';
    a[0b011100] = 'j';
    a[0b100010] = 'k';
    a[0b101010] = 'l';
    a[0b110010] = 'm';
    a[0b110110] = 'n';
    a[0b100110] = 'o';
    a[0b111010] = 'p';
    a[0b111110] = 'q';
    a[0b101110] = 'r';
    a[0b011010] = 's';
    a[0b011110] = 't';
    a[0b100011] = 'u';
    a[0b101011] = 'v';
    a[0b011101] = 'w';
    a[0b110011] = 'x';
    a[0b110111] = 'y';
    a[0b100111] = 'z';
    a[0b001000] = '1';
    a[0b001010] = '2';
    a[0b001100] = '3';
    a[0b001101] = '4';
    a[0b001001] = '5';
    a[0b001110] = '6';
    a[0b001111] = '7';
    a[0b001011] = '8';
    a[0b000110] = '9';
    a[0b000111] = '0';

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    $('#character').patternInput({
        horizontalDots: 2,
        verticalDots: 3,
        width: 200,
        height: 300,
        autoClear: true,
        onFinish: function(value) {
            value = value.filter(onlyUnique);
            console.log(value);
            var sum = 0;
            for(var i = 0; i < value.length; i++) {
                sum += Math.pow(2, 5 - value[i]);
            }
            if(a[sum]) {
                $('#transcribe').val($('#transcribe').val() + '' + a[sum]);
            } else {
                console.log('unknown character');
            }
        }
    });

});   