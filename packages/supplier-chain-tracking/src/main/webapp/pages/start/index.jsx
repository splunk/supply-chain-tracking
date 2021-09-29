import React from 'react';

import layout from '@splunk/react-page';

import { SplunkThemeProvider } from '@splunk/themes';

import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';

import definition from "./definition.json"
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import { DashboardContextProvider} from "@splunk/dashboard-context";
import CustomMap from "./customMap";
import AbsoluteLayoutViewer from '@splunk/dashboard-layouts/AbsoluteLayoutViewer';

const themeToVariant = {
    enterprise: { colorScheme: 'light', family: 'enterprise' },
    enterpriseDark: { colorScheme: 'dark', family: 'enterprise' },
    prisma: { colorScheme: 'dark', family: 'prisma' },
};

const customPreset = {
    ...EnterprisePreset,
    visualizations:{
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.CustomMap':CustomMap,
    }
}
layout(
    <SplunkThemeProvider {...themeToVariant.enterpriseDark}>
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