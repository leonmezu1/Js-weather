// eslint-disable-next-line import/no-cycle
import Weather from './weather';

const weather = Weather();

const autocomplete = (inp, arr) => {
  let currentFocus;
  const removeActive = x => {
    for (let i = 0; i < x.length; i += 1) {
      x[i].classList.remove('autocomplete-active');
    }
  };
  const addActive = x => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add('autocomplete-active');
    return true;
  };
  const closeAllLists = elmnt => {
    const x = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < x.length; i += 1) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };
  inp.addEventListener('input', () => {
    const a = document.createElement('div');
    let b;
    const val = inp.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a.setAttribute('id', `${inp.id}autocomplete-list`);
    a.setAttribute('class', 'autocomplete-items');
    inp.parentNode.appendChild(a);
    arr.forEach(element => {
      if (element.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = document.createElement('div');
        b.innerHTML = `<strong>${element.substr(0, val.length)}</strong>`;
        b.innerHTML += element.substr(val.length);
        b.innerHTML += `<input type='hidden' value='${element}'>`;
        b.addEventListener('click', (e) => {
          inp.value = e.target.getElementsByTagName('input')[0].value;
          closeAllLists();
          weather.getWeatherQuery(inp.value);
        });
        a.appendChild(b);
      }
    });
    return true;
  });
  inp.addEventListener('keydown', (e) => {
    let x = document.getElementById(`${inp.id}autocomplete-list`);
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode === 40) {
      currentFocus += 1;
      addActive(x);
    } else if (e.keyCode === 38) {
      currentFocus -= 1;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
      weather.getWeatherQuery(inp.value);
    }
  });
  document.addEventListener('click', (e) => {
    closeAllLists(e.target);
  });
};

export default autocomplete;