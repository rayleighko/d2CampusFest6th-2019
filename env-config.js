const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'https://d2campusfest6th2019.herokuapp.com'
    : `http://localhost:${process.env.PORT || 1337}`,
};
