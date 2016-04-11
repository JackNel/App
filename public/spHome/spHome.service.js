angular
  .module('spHome')
  .service('SpService',function($http, $q, $cacheFactory) {
    var accordionData = [
      {
        title: 'this is clavin',
        content: 'this is a great content'
      },
      {
        title: 'this is alex',
        content: 'this is the great content'
      }
    ];

    var historyData = [
      {
        img: './images/bill04.jpg',
        first: 'Zachary',
        last: 'Binx',
        rating: '5 stars',
        date: 'date/time'
      },
      {
        img: './images/bill02.jpg',
        first: 'Will',
        last: 'Graham',
        rating: '2 stars',
        date: 'date/time'
      },
      {
        img: './images/bill03.jpg',
        first: 'Spencer',
        last: 'Reid',
        rating: '0 stars',
        date: 'date/time'
      }
    ];

    function getAccData(){
      return accordionData;
    };

    function getHistoryData(){
      return historyData;
    };

    return {
      getAccData: getAccData,
      getHistoryData: getHistoryData
    }
  })
