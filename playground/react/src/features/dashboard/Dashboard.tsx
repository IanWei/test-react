import React, { FC } from 'react';
import { DashboardProps } from './Dashboard.props';
import { Button } from '@i.w/react';

export const Dashboard: FC<DashboardProps> = () => {
    return (
        <div>
            <div>Dashboard</div>
            <Button />
        </div>
    );
};
