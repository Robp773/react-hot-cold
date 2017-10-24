import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count.js';

describe('GuessCount', ()=>{
    it('should successfully render', ()=>{
        shallow(<GuessCount />);
    })
    
    it('Renders the correct guess count', () => {
  
        const wrapper = shallow(<GuessCount count= '5' />);
        expect(wrapper.text()).toEqual(`Guess #5!`);
    });
})