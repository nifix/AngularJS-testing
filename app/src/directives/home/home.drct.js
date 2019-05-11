(function () {
    'use strict';

    angular
        .module ('HomeDrct',[])
        .directive ('navbarHeader', directive);


    /** @ngInject */
    function directive() {

        function directiveController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        function link(){

        }

        return {
            templateUrl: 'app/src/directives/home/navHeader.tpl.html',
            restrict: 'AE',
            scope: {},
        }
    }

} ());