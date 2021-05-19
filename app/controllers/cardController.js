var app = angular.module('axisMundi', []);
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

app.controller('gramaticaCtrl', function($scope, $http) {
    let ctrl = this;
    ctrl.palavras = [];
    $http
        .get('https://cazerta.github.io/AxisMundiHelper/files/bancoPalavras.json')
        .then((data) => {
            ctrl.palavras = data.data.banco;
        });
    
    ctrl.speakWord = function(word) {
        responsiveVoice.speak(word);
    }

    ctrl.validateWord = function(wordObject) {
        let upperCaseTyped = wordObject.digitada.toUpperCase();
        if (wordObject.palavra === upperCaseTyped) {
            wordObject.valid = true;
            wordObject.locked = true;
            wordObject.tried = false;
        } else {
            wordObject.valid = false;
            wordObject.locked = false;
            wordObject.tried = true;
        };
    }
})