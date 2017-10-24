import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section.js';

describe('GuessSection', ()=>{
    it('should successfully render', ()=>{
        shallow(<GuessSection/>);
    })
    it('should render the right text', ()=>{
        const wrapper = shallow(<GuessSection onGuess = "guess" feedback = 'feedback'/>)
        expect(wrapper.contains('feedback')).toEqual(true);
    })
})