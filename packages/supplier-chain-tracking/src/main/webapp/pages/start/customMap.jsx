import React from 'react'
import SplunkVisualization from '@splunk/visualizations/common/SplunkVisualization'
import CustomGMap from '@splunk/custom-g-map';

const CustomMap = ({dataSources,width,height,background='transparent',title,description,options}) => 
{
    return(<CustomGMap/>);
};

CustomMap.propTypes = {
    ...SplunkVisualization.propTypes,
};

CustomMap.defaultProps={
    ...SplunkVisualization.defaultProps,
}

export default CustomMap;