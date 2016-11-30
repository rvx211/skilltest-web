(function () {
    'use strict';
 
    angular
        .module('SimpleNote')
        .factory('NoteService', NoteService);
 
    NoteService.$inject = ['$http'];
    function NoteService($http) {
        var service = {};
 
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
 
        return service;
 
        function GetAll(user) {
            return $http.get('http://localhost:3000/notes/' + user.id).then(handleSuccess, handleError('Error getting all notes'));
        }
 
        function GetById(user, id) {
            return $http.get('http://localhost:3000/notes/' + user.id + '/' + id).then(handleSuccess, handleError('Error getting note by id'));
        }
 
        function Create(note) {
            return $http.post('http://localhost:3000/notes/', note).then(handleSuccess, handleError('Error creating note'));
        }
 
        function Update(note) {
            return $http.put('http://localhost:3000/notes/' + note.id, note).then(handleSuccess, handleError('Error updating note'));
        }
 
        function Delete(id) {
            return $http.delete('http://localhost:3000/notes/' + id).then(handleSuccess, handleError('Error deleting note'));
        }
 
        // private functions
 
        function handleSuccess(res) {
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
 
})();
