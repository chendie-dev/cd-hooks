import React from 'react';
import { useTitle } from 'cd-hooks';

export default () => {
  useTitle('Page Title');

  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};