module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb9c4734099c926132e78966140046f2'),
  },
});
