import Club from '../entities/club.entities.js';
/**
 * @param {Object} data
 * @returns {Club}
 */
const mapClubData = (data) => new Club(
  data.id,
  data.area.name,
  data.name,
  data.shortName,
  data.tla,
  data.crestUrl,
  data.address,
  data.phone,
  data.website,
  data.email,
  data.founded,
  data.clubColors,
  data.venue,
);

export default mapClubData;
