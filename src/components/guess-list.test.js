import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });
it('renders a list of guesses', ()=> {
 const testList = [1 ,5, 10, 20]
const wrapper = shallow(<GuessList  guesses={testList}/>)
const listItems = wrapper.find('li')
expect(listItems.length === testList.length)
})
})