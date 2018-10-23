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
  this.container.appendChild(infoInstrumentName)
}

module.exports = InstrumentInfoView;
