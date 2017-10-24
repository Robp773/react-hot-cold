import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header.js';

describe('Header', ()=>{
    it('should successfully render', ()=>{
        shallow(<Header/>);
    })

    it('should change state on toggleInfoModal', ()=>{
        const wrapper = shallow(<Header/>)
        wrapper.instance().toggleInfoModal(true)
        wrapper.update()
        expect(wrapper.state('showInfoModal')).toEqual(true)
        
    })

    it('Should render the info modal when toggled', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        wrapper.update();
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });

})