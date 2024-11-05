import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomDropdown from './components/CustomDropdown/CustomDropdown';

const PLUGIN_NAME = 'CustomDropdownPlugin';

export default class CustomDropdownPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

    async init(flex, manager) {

    
    flex.MainHeader.Content.remove('activity');
    
    const options = { sortOrder: -3, align: "end" };
    flex.MainHeader.Content.add(<CustomDropdown key="custom-dropdown" />, options);

  }

}
