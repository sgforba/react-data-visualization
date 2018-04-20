import React, { Component } from 'react';
import styled from "styled-components";
class Column extends Component { 

    render() {
        let columnData = this.props;
        const ColumnItem = styled.li`

            margin-right: 10px;
            color: red;
            list-style: none;           
            width: auto;
            position: relative;    
        `;
        const ColumnColor = styled.div`
            background-color: ${columnData.color};
            min-height: 10px;
            height: ${columnData.data*10}px;
            margin-bottom: 10px;
            position: relative;

        `;
        const ColumnLabel = styled.span`
            font-size: 12px;
            font-weight: 300;
            color:#000000;
        
        `;
        const ColumnDataPoint = styled.span`
            font-size: 12px;
            color:#ffffff;
            position: absolute;
            bottom: 10px;
            left: 35%;
        `;
        return (
            <ColumnItem>
                <ColumnColor>
                    <ColumnDataPoint>
                        {columnData.data}
                    </ColumnDataPoint>
                </ColumnColor>
                <ColumnLabel>
                    {columnData.label} 
                </ColumnLabel>
            </ColumnItem>
          );       
    }     
}   
  
export default Column;