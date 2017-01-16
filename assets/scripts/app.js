if (typeof(Storage) !== "undefined") {
  localStorage.setItem('name', 'Alison');
  document.getElementById('name').innerHTML = localStorage.getItem('name');

  var people =
  [{
    name:'Alison',
    lastName:'Silva'
  },
  {
    name:'Roberta',
    lastName:'Mercês Silva'
  },
  {
    name: 'Sara',
    lastName:'Silva'
  }
];

for (person of people) {
  console.log('# ' + person.name);
};
  localStorage.setItem('people', people);

  console.log(localStorage.getItem('people'));

} else {
  console.log('dont have local Storage')
}

// http://www.favicon-generator.org/
