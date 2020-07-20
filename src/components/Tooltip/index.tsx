import React from 'react';

import { Container } from './styles';

interface ToolTipProps {
  title: string;
  classname?: string;
}

const Tooltip: React.FC<ToolTipProps> = ({
  title,
  classname = '',
  children,
}) => {
  return (
    <Container className={classname}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
