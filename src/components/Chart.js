import React, { Component } from 'react';
import Column from './Column';
import Button from './Button';
import styled from "styled-components";

class Chart extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        currentData: this.props.chartData.conservative
      }

      this.switchDataset = this.switchDataset.bind(this);
    }
   
    switchDataset = (value) => {
      switch (value) {
        case 'conservative':
          this.setState({
            currentData:  this.props.chartData.conservative
          })   
          break       
        case 'balanced':
          this.setState({
            currentData:  this.props.chartData.balanced
          })   
          break         
        case 'growth':
          this.setState({
            currentData:  this.props.chartData.growth
          })          
        break  
      }  

    }    

    render() { 
      const Charts = styled.div`
        height: 400px;
      `;
      const Wrapper = styled.ul`
          align-items: stretch;
          display: flex;
          align-items: flex-end;
      `;
      const ButtonWrapper = styled.div`
        
      `;    
      let columns = Object.keys(this.state.currentData).map((key, index) => {
        return (
          <Column key={index} label={key}  data={this.state.currentData[key]} color={this.props.chartData.colors[index]} />
        );
      });

      let buttons = Object.keys(this.props.chartData).map((key, index) => {
        if(key !== 'colors'){
          return (
            <Button key={index} name={key} buttonData={this.props.chartData[key]} switchDataset={this.switchDataset} currentState={this.state.currentData}/>
          );
        }
      });

      return (
        <Charts>
          <Wrapper>
            {columns}
          </Wrapper>
          <ButtonWrapper>
             {buttons}
          </ButtonWrapper>
        </Charts>


      );
    }
  }
  
  export default Chart;