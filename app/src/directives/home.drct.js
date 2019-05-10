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
            templateUrl: "navHeader.tpl.html",
            link: link,
            restrict: 'AE',
            scope: {},
        }
    }

} ());