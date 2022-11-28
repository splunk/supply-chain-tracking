import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import DashboardCore from '@splunk/dashboard-core';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import CustomMap from './customMap';
import definition from './definition.json';

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
    enterpriseDark: { colorScheme: 'dark', family: 'enterprise' },
    prisma: { colorScheme: 'dark', family: 'prisma' },
}; 

const customPreset = {
    ...EnterprisePreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'splunk.CustomMap': CustomMap,
    },
};
layout(
    <SplunkThemeProvider {...themeToVariant.prisma}>
        <DashboardContextProvider>
            <DashboardCore
                width="100%"
                height="100%"
                preset={customPreset}
                definition={definition}
            />
        </DashboardContextProvider>
    </SplunkThemeProvider>,

    {
        pageTitle: 'Supplier Chain Tracking',
        hideFooter: true,
        layout: 'fixed',
    }
);
