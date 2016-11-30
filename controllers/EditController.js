(function () {
    'use strict';
 
    app.controller('EditController', EditController);
 
    EditController.$inject = ['NoteService', '$location', '$rootScope', 'FlashService'];
    function EditController(NoteService, $location, $rootScope, FlashService) {
        var vm = this;
        vm.edit = edit;
 
        function create() {
            vm.dataLoading = true;
            NoteService.Create(vm.note)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Note creation successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
        
        function edit() {
            vm.dataLoading = true;
            NoteService.Edit(vm.note)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Note edit successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }
 
})();