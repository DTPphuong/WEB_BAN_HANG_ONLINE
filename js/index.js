
const app = angular.module('appModule', ["ngRoute"]);

app.controller('appController', function ($scope, $rootScope) {   
    $rootScope.cart = localStorage.getItem('cart') || [];

    

});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./components/login/login.html"
        })
        .when("/products", {
            templateUrl: "./components/products/products.html"
        })
        .when("/products/:productId/edit", {
            templateUrl: "./components/products/product_form.html"
        })
        .when("/products/new", {
            templateUrl: "./components/products/product_form.html"
        })
        .when("/home", {
            templateUrl: "./components/home/home.html"
        })
        .when("/cart", {
                templateUrl: "./components/cart/cart.html"
        })
        .when("/checkout", {
            templateUrl: "./components/cart/checkout.html"
        })
        .otherwise({
            templateUrl: "./components/error/404.html"
        });
});