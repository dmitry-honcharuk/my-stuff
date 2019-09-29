const plan = require('flightplan');

const APP_DIR = '/var/www/my-stuff';

plan.target('staging', {
  host: '104.248.132.145',
  username: 'fd',
  branch: 'master',
  agent: process.env.SSH_AUTH_SOCK,
});

plan.remote(remote => {
  const branch = plan.runtime.options.branch || remote.runtime.branch;

  return remote.with(`cd ${APP_DIR}`, () => {
    remote.exec('git fetch -p');
    remote.exec(`git checkout ${branch}`);
    remote.exec(`git reset --hard origin/${branch}`);
    remote.exec(
      'docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build',
    );
  });
});
