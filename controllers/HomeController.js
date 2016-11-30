(function () {
    'use strict';
 
    app.controller('HomeController', HomeController);
 
    HomeController.$inject = ['NoteService', '$location', '$rootScope', 'FlashService'];
    function HomeController(NoteService, $location, $rootScope, FlashService) {
        var vm = this;
        vm.home = home;
 
        function getall() {
            vm.dataLoading = true;
            NoteService.GetAll(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Note list successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
        
        function deleteNote() {
            vm.dataLoading = true;
            NoteService.Delete(vm.note.id)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Note delete successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
        
        function logout() {
            
        }
    }
 
})();