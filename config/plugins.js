module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'maslinfar@gmail.com',
          defaultReplyTo: 'maslinfar@gmail.com',
          testAddress: 'maslinfar@gmail.com',
        },
      },
    },
    // ...
  });