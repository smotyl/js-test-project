const hotels = require('./constants');

const getNormalizedInput = (input) => {
  let normalizedInput = input.replace(/ /g, '');
  normalizedInput = [ normalizedInput.split(':')[0], ...normalizedInput.split(':')[1].split(',') ]

  const clientType = normalizedInput[0];
  const dates = normalizedInput.slice(1);

  return { clientType, dates }
}

const searchHotel = (input) => {
  const { clientType, dates } = getNormalizedInput(input);

  const cheapestHotel = hotels.map((hotelItem) => {
    const hotelTotal = dates.reduce((total, dateItem) => {
      const normalizedDate = new Date(dateItem);
      const dayType = normalizedDate.getDay() === 0 || normalizedDate.getDay() === 6 ? 'weekend' : 'week';
      total += hotelItem[clientType][dayType];
      return total;
    }, 0);

    return {
      hotel: hotelItem.name,
      stars: hotelItem.stars,
      total: hotelTotal,
    };
  });

  const sortedHotel = cheapestHotel.sort((a, b) => a.total - b.total || b.stars - a.stars)

  return sortedHotel[0].hotel;
};

module.exports = { searchHotel, getNormalizedInput };