module.exports = {
  apps : [{
    name      : 'Portfolio',
    script    : 'server/index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    development: {
      user : 'node',
      host : '70.95.62.13',
      ref  : 'origin/dev',
      path : '/nodejs/www-dev.alfonsowong.com',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'    
    },
    production : {
      user : 'node',
      host : '70.95.62.13',
      ref  : 'origin/master',
      path : '/nodejs/www.alfonsowong.com',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
