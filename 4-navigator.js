const addressLat = 10
const addressLong = 10
const positionLat = 5
const positionLong = 5

// console.log(((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5)

console.log(Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2))
