import React from 'react';
import { Dashboard } from './features/dashboard/Dashboard';
import { Button } from '@test-react/react';

export const App = () => {
    return (
        <div>
            <Dashboard name="Hello" />
            <Button />
        </div>
    );
};
