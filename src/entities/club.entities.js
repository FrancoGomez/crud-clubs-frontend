export default class Club {
  /**
   * @param {Number} id
   * @param {Number} area
   * @param {String} name
   * @param {String} shortName
   * @param {String} tla
   * @param {String} crestUrl
   * @param {String} address
   * @param {String} phone
   * @param {String} website
   * @param {String} email
   * @param {String} founded
   * @param {String} clubColors
   * @param {String} venue
   */
  constructor(
    id,
    area,
    name,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
  ) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
  }
}
