var app = angular.module('axisMundi', []);

app.controller('gramaticaCtrl', function($scope, $http) {
    let ctrl = this;
    ctrl.palavras = [];
    $http
        .get('https://raw.githubusercontent.com/cazerta/AxisMundiHelper/main/files/bancoPalavras.json?token=ABOMWIGGHHLYEPMDM3TGSXLAUPSIM')
        .then((data) => {
            console.log(data);
            ctrl.palavras = data.data.banco;
        });
})