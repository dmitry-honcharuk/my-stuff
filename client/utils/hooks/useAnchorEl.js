import { useState } from 'react';

export default (initial = null) => {
  const [element, setAnchorEl] = useState(initial);

  return {
    element,
    setAnchorEl,
    setFromEvent: ({ currentTarget }) => setAnchorEl(currentTarget),
    dropAnchor: () => setAnchorEl(null),
  };
};
