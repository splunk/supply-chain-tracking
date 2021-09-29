import React from 'react'
import BaseVisualization from '@splunk/dashboard-visualizations/common/BaseVisualization'
import CustomGMap from '@splunk/custom-g-map';

const CustomMap = ({dataSources,width,height,background='transparent',title,description,options}) => 
{
    return(<CustomGMap/>);
};

CustomMap.propTypes = {
    ...BaseVisualization.propTypes,
};

CustomMap.defaultProps={
    ...BaseVisualization.defaultProps,
}

export default CustomMap;