'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h3 class="Capital">${data.capital}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const Show_Country = async function () {
  try {
    // fetch the data
    const locRes = await fetch('https://ipapi.co/json/');
    // if failed give me error
    if (!locRes.ok) throw new Error(`Coudn't load your location`);

    const location = await locRes.json();
    const country = location.country_name;
    const encodecountry = encodeURIComponent(country);
    const countryres = await fetch(
      `https://restcountries.com/v2/name/${encodecountry}`
    );
    if (!countryres.ok) throw new Error(`Couldn't load your Country`);
    const [data] = await countryres.json();
    renderCountry(data);

    const borders = data.borders;
    const promises = borders.map(code =>
      fetch(`https://restcountries.com/v2/alpha/${code}`).then(res => {
        if (!res.ok) throw new Error(`Couldn't load Neighbour Country ${code}`);
        return res.json();
      })
    );

    const neighbours = await Promise.allSettled(promises);
    for (const x of neighbours) {
      console.log(x);
      if (x.status == 'fulfilled') renderCountry(x.value, 'neighbour');
      else console.log(`Error`);
    }
  } catch {
    renderError(`Something went wrong ${err.message}`);
  }
};
btn.addEventListener('click', Show_Country);
