(function () {
    'use strict';
 
    app.controller('ViewController', ViewController);
 
    ViewController.$inject = ['NoteService', '$location', '$rootScope', 'FlashService'];
    function ViewController(NoteService, $location, $rootScope, FlashService) {
        var vm = this;
        vm.view = view;
 
        function getbyid() {
            vm.dataLoading = true;
            NoteService.GetById(vm.user, vm.note.id)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Note view successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }
 
})();