import React from 'react';
import App from './App';

it('renders without crashing', () => {
 const container = render (<App />);
 console.log(container.getByText('World Cup Players'))
});
