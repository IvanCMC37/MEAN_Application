// main ctrl
angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'C# for Sociopaths', featured: true, published: new Date('10/5/2018')},
        {name: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2018')},
        {name: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2018')},
        {name: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2018')},
        {name: 'Pedantic C++', featured: true, published: new Date('1/1/2018')},
        {name: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2018')},
        {name: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2018')},
        {name: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2018')},
        {name: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2018')},
        {name: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2018')},
        {name: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2018')},
        {name: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2018')},
        {name: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2018')},
        {name: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2018')},
        {name: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2018')}
    ]
});