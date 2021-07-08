import React, { useEffect } from 'react';

const Example = () => {
  useEffect(() => {
    document.title = '示例'
  }, []);

  return (
    <div>123adf</div>
  );
};

export default Example;
