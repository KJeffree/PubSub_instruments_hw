const PubSub = require('../helpers/pub_sub.js')

const SelectInstrumentView = function(element){
  this.element = element;
}

SelectInstrumentView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments)
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectInstrumentView:change', selectedIndex)
  })
}

SelectInstrumentView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectInstrumentView;
