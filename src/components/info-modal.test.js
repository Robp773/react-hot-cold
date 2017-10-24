import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal.js';

describe('InfoModal', ()=>{
    it('should successfully render', ()=>{
        shallow(<InfoModal/>);
    })   
// github solution
    it('should run onClose when clicked', ()=> {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});