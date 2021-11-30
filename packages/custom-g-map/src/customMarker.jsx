import { InfoWindow, Marker } from "react-google-maps";
import React from "react"
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';

import { SplunkThemeProvider } from '@splunk/themes';
import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';


import { DashboardContextProvider} from "@splunk/dashboard-context";
import info_definition from './info_definition.json'
import { Component } from "react";
import SingleValue from '@splunk/visualizations/SingleValue';


const themeProviderSettings = getThemeOptions(defaultTheme() || 'enterprise');


class CustomMarker extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            infoVisible:false,
            token: {},
        };
        }

        onMarkerClick = (evt) => 
        {
            this.setState({infoVisible: true});
            this.setState({
                token:{
                    default:{
                        id:this.props.id,
                    }
                }
            });
            
        };

        onCloseInfo = (evt) => 
        {
            this.setState({infoVisible:false});
        };

        
        render() {

            const{
                onMarkerClick,
                onCloseInfo,
                props:{
                    ...props
                },
                state:{
                    infoVisible,
                    token,
                }
            } = this;


            return (
                <>
                <Marker label={this.props.data && (this.props.data.columns[1][0])} onClick={onMarkerClick} {...props}>
                    {infoVisible && (
                        <InfoWindow onCloseClick={onCloseInfo}>
                            <SplunkThemeProvider {...themeProviderSettings}>
                                <DashboardContextProvider>
                                    <DashboardCore
                                    width="250px"
                                    height= "340px"
                                    preset={EnterprisePreset}
                                    definition={info_definition}
                                    tokenBinding={token}
                                    />
                                </DashboardContextProvider>
                            </SplunkThemeProvider>
                        </InfoWindow>
                    )}
                </Marker>
               
                </>
            )
        }
}

export default CustomMarker;