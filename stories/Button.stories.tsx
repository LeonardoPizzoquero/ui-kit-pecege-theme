import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => (
    <Button>Hover Me</Button>
  ))
  .add('Outlined', () => (
    <Button outlined>Hover Me</Button>
  ))
