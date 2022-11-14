module.exports = ({ env })  => ( {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: env('REDIS_HOST', '127.0.0.1'),
            port: env.int('REDIS_PORT', 6379),
            user: env('REDIS_USER', 'default'),
            password: env('REDIS_PASSWORD'),
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        contentTypes: [
          "api::roundtable.roundtable",
          "api::blog.blog",
        ],
      },
    },
  },
});
