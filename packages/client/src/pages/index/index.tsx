import React, { FC } from 'react';
import { Button } from '@ui';

const IndexPage: FC = () => (
    <div>
        <h1>Landing page</h1>
        <Button buttonSize="small">Small button</Button>
        <Button buttonSize="medium">Medium button</Button>
        <Button buttonSize="large">Large button</Button>
        <Button buttonSize="medium" buttonStyle="outlined">
            Medium outlined button
        </Button>
        TExt
    </div>
);

export default IndexPage;
