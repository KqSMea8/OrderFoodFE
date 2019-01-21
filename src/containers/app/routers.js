import React from 'react';
import Dashboard from '../dashboard';

const routes = [
  { path: '/admin', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Dashboard },
];

export default routes;
