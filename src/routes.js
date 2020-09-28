import React from 'react';
import Exercise1 from './components/Exercise1';

const routes = [
    {
        path: '/exercise1',
        exact : true,
        main : () => <Exercise1 />
    }
];

export default routes;