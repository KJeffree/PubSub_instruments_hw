const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (container){
  this.container = container;
}

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  })
}

InstrumentInfoView.prototype.render = function(instrument){
  const infoInstrumentName = document.createElement('h1');
  infoInstrumentName.textContent = `${ instrument.name } `;
  this.container.innerHTML = "";
  this.container.appendChild(infoInstrumentName);

  const infoInstrumentDescription = document.createElement('p');
  infoInstrumentDescription.textContent = `${ instrument.description } `
  this.container.appendChild(infoInstrumentDescription);

  const infoInstrumentTitle = document.createElement('h2');
  infoInstrumentTitle.textContent = "Instruments include:"
  this.container.appendChild(infoInstrumentTitle);

  const infoInstrumentList = document.createElement('ul');

  instrument.instruments.forEach((instrument) => {
    const infoInstrumentListItem = document.createElement('li');
    infoInstrumentListItem.textContent = instrument;
    infoInstrumentList.appendChild(infoInstrumentListItem)
  });
  this.container.appendChild(infoInstrumentList);
};

module.exports = InstrumentInfoView;
