import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
margin-left: 20px;
`

const Button = styled.button`
text-transform: capitalize;
background-color: white;
font-weight: bold;
border: 1px solid #A5B2C5;
border-radius: 4px;
padding: 5px 8px 5px 8px;
box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.28);
cursor: pointer;

&:hover{
    background-color: rgb(79, 158, 215);
};
`
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const btnNames = Object.keys(options);
    return (
        <ButtonWrapper>
            {btnNames.map((option, index) => (
                <Button type="button"
                    onClick={onLeaveFeedback}
                    key={index}
                    name={option}
                >{option}</Button>
            ))}
        </ButtonWrapper>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
};