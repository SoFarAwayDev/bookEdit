﻿angular.module('bookEditApp').controller('addBookCtrl', ['$scope', 'bookService', '$location', 'Upload', 'notificationService', 'ngDialog', function ($scope, bookService, $location, Upload, notificationService, ngDialog) {
    $scope.pageName = "Add Book";
    $scope.book = {};
    $scope.bookHasImage = false;

    $scope.notification = {};
    notificationService.init($scope.notification);

    $scope.hideNotificationPanel = function () {
        notificationService.hideNotification($scope.notification);
    };

    $scope.cancel = function () {
        notificationService.hideNotification($scope.notification);
        $location.url("/books")
    };

    $scope.save = function () {
        bookService.addBook($scope.book)
        .then(function (book) {
            notificationService.setSuccessInitMessage("Book was addded successfully.");
            $location.url("/books");
        },
        function () {
            notificationService.setErrorInitMessage("Book was not addded, because of some server errors.");
        });
    };

    $scope.uploadFiles = function (file, errFiles) {

        var errFile = errFiles && errFiles[0];
        if (errFile) {
            if (errFile.$error == "maxSize") {
                notificationService.showErrorMessage("Image upload error! File size should be equal or smaller then " + errFile.$errorParam, $scope.notification);
            } else if (errFile.$error == "pattern") {
                notificationService.showErrorMessage("Image upload error! File could have only .jpeg or .jpg extensions.", $scope.notification);
            }
        }

        if (file) {
            file.upload = Upload.upload({
                url: '/api/images',
                data: { file: file }
            });

            file.upload.then(function (response) {
                $scope.book.picture = { img: response.data.img };
                $scope.bookHasImage = true;
                notificationService.showSuccessMessage("New image uploaded successfully.", $scope.notification);
            }, function () {
                notificationService.showErrorMessage("Image was not uploaded due to some server problems. Please try again later.", $scope.notification);
            });
        }
    };

    $scope.addAuthor = function () {
        ngDialog.open({
            template: 'templates/add-author-modal.html',
            controller: 'addAuthorModalCtrl',
            resolve: {
                addedAuthors: function authorFactory() {
                    return $scope.book.authors;
                }
            }
        }).closePromise.then(function (data) {
            if (data.value && data.value != "$document" && data.value != "$closeButton") {
                if ($scope.book.authors) {
                    $scope.book.authors.push(data.value);
                } else {
                    $scope.book.authors = [data.value];
                }
            }
        });

        $scope.deleteAuthor = function (id) {
            var author = null;
            $.each($scope.book.authors, function (i, item) {
                if (item.id == id) {
                    author = item;
                    return false;
                };
            })

            if (author) {
                $scope.book.authors.splice($scope.book.authors.indexOf(author), 1);
            }
        };
    }
}]);