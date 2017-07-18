'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      pikeUL.appendChild(liEl);
    }
  },

  total: function(){
    var pikeUL = document.getElementById('pike');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    pikeUL.appendChild(liEl);
    return cookieTotal;
  }
};


pike.randomNumber();
pike.sales();
pike.render();
pike.total();

var airport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var airportUL = document.getElementById('airport');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      airportUL.appendChild(liEl);
    }
  },

  total: function(){
    var airportUL = document.getElementById('airport');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    airportUL.appendChild(liEl);
    return cookieTotal;
  }
};

airport.randomNumber();
airport.sales();
airport.render();
airport.total();

var center = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var centerUL = document.getElementById('center');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      centerUL.appendChild(liEl);
    }
  },

  total: function(){
    var centerUL = document.getElementById('center');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    centerUL.appendChild(liEl);
    return cookieTotal;
  }
};

center.randomNumber();
center.sales();
center.render();
center.total();

var hill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var hillUL = document.getElementById('hill');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      hillUL.appendChild(liEl);
      console.log(this.hourlySales);
    }
  },

  total: function(){
    var hillUL = document.getElementById('hill');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    hillUL.appendChild(liEl);
    return cookieTotal;
  }
};

hill.randomNumber();
hill.sales();
hill.render();
hill.total();

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = (Math.floor(this.customers[i] * this.avgSale));
    }
  },

  render: function(){
    var alkiUL = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      alkiUL.appendChild(liEl);
    }
  },

  total: function(){
    var alkiUL = document.getElementById('alki');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    alkiUL.appendChild(liEl);
    return cookieTotal;
  }
};

alki.randomNumber();
alki.sales();
alki.render();
alki.total();
