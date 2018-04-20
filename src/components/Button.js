import React, { Component } from 'react';
import styled from "styled-components";
class Button extends Component { 

    render() {
        let buttonName = this.props.name;
        // console.log("Current State is: " +this.props.currentState);

        let buttonCheck = JSON.stringify(this.props.currentState) === JSON.stringify(this.props.buttonData);

        const button = buttonCheck ? (
            <input type="radio" id={buttonName} name="foo" onClick={() => { this.props.switchDataset(buttonName) }} defaultChecked/>
          ) : (
            <input type="radio" id={buttonName} name="foo" onClick={() => { this.props.switchDataset(buttonName) }}/>
          );        
        return (
            <div className="button">
                <label>{buttonName}</label>                
                {button}
            </div>
        );       
    }     
}   
  
export default Button;