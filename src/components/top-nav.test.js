import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav.js';

describe('TopNav', ()=>{
    it('should successfully render', ()=>{
        shallow(<TopNav/>);
    })
    it('Should call onNewGame when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('Should call onInfo when info is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
})