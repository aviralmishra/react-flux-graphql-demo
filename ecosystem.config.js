module.exports = {
  apps: [
    {
      name: 'appDev',
      script: './lib/api/index.js',
      watch: ['lib'],
      ignore_watch: ['node_modules'],
      interpreter: 'babel-node',
      env: {
        NODE_PATH: './lib'
      },
      env_development: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    development: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'git+https://github.com/aviralmishra/react-flux-graphql-demo.git',
      path: '/var/www/development',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    },
    production: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'git+https://github.com/aviralmishra/react-flux-graphql-demo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
