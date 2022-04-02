/* eslint-disable no-undef */
Package.describe({
  name: 'ubesthelp:meteor-elastic-apm',
  version: '2.5.1',
  // Brief, one-line summary of the package.
  summary: 'Performance monitoring for Meteor based on Elastic APM',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ubesthelp/meteor-elastic-apm',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'elastic-apm-node': '3.27.0',
  shimmer: '1.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('2.4');

  api.use('ubesthelp:meteor-measured@1.0.4');
  api.imply('ubesthelp:meteor-measured');

  api.use([
    'ecmascript',
    'mongo',
    'minimongo',
    'ddp',
    'ddp-common',
    'webapp',
    'random'
  ]);

  api.mainModule('meteor-elastic-apm.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ubesthelp:meteor-elastic-apm');
  api.mainModule('meteor-elastic-apm-tests.js');
});
