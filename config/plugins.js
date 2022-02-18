module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'farrellmas@cwu.edu',
          defaultReplyTo: 'farrellmas@cwu.edu',
          testAddress: 'qtelnbiikabtzwlgxx@nthrw.com',
        },
      },
    },
    // ...
  });