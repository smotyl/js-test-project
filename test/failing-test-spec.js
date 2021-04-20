'use strict'

const chai = require('chai')
const expect = chai.expect

const { getNormalizedInput, searchHotel } = require('../src/app');

describe('getNormalizedInput Function', function () {
  it('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', function () {

    const { clientType, dates } = getNormalizedInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');

    expect(clientType).to.equal('Regular');
    expect(dates[0]).to.equal('16Mar2020(mon)');
    expect(dates[1]).to.equal('17Mar2020(tues)');
    expect(dates[2]).to.equal('18Mar2020(wed)');
  })
})

describe('Get Cheapest Hotel', function () {
  it('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', function () {
    const result = searchHotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');

    expect(result).to.equal('Parque das flores');
  });

  it('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)', function () {
    const result = searchHotel('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)');

    expect(result).to.equal('Jardim Botânico');
  });

  it('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)', function () {
    const result = searchHotel('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)');

    expect(result).to.equal('Mar Atlântico');
  });
})