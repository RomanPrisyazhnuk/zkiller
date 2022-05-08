module.exports = {
  apps: [{
    name: 'psychonica',
    script: 'npm run start',
    instances: 1,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_PATH: '.',
      PORT: '3000',
    },
    env_production: {
      NODE_ENV: 'production',
    },

  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.216.214.102',
      ref: 'origin/master',
      repo: "git@github.com:RomanPrisyazhnuk/AllQuestions.git",
      path: '/home/ubuntu/psychonica',
      ssh_options: ['StrictHostKeyChecking=no', 'IdentitiesOnly=yes'],
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
