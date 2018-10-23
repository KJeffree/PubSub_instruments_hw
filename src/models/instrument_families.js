const PubSub = require('../helpers/pub_sub.js')


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instruments:all-instruments-ready', this.data)
  PubSub.subscribe('SelectInstrumentView:change', (event) => {
    const selectedInstrument = event.detail;
    this.publishInstrumentInfo(selectedInstrument)
  });
};

InstrumentFamilies.prototype.publishInstrumentInfo = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('Instruments:selected-instrument-ready', selectedInstrument)
}

module.exports = InstrumentFamilies;
