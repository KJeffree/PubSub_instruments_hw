const instrumentData = require('./data/instrument_families.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectInstrumentView = require('./views/select_instrument_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const elementInfo = new SelectInstrumentView(selectElement);
  elementInfo.bindEvents();

  const instrumentDataModel = new InstrumentFamilies(instrumentData);
  instrumentDataModel.bindEvents();

  const infoSec = document.querySelector('section.instrument-info');
  const instrumentInfo = new InstrumentInfoView(infoSec);
  instrumentInfo.bindEvents();
});
