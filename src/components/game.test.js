import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game.js';

describe('Game', ()=>{
   
    it('should successfully render', ()=>{
        shallow(<Game/>);
    })
    it('should reset the state on a new game', () => {
 
const wrapper = shallow(<Game />)
wrapper.setState({correctAnswer: 15})
    wrapper.instance().newGame();
    wrapper.update();
    expect(wrapper.state('guesses')).toEqual([])
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    
    })
    it('should tell the user if their guess is NaN', () =>{
        const wrapper = shallow(<Game />)
        wrapper.instance().guess('/');
        wrapper.update();
        expect(wrapper.state('feedback')).toEqual('Please enter a valid number')
    })
})