import * as Flex from "@twilio/flex-ui";
import React from 'react';

import IdentityComponent from './Identity.Component';

export class Identity{
    Setup = (flex: typeof Flex, manager: Flex.Manager) => {

        flex.AgentDesktopView.Panel2.Content.add(<IdentityComponent key='identity'/>);
    }
}

let identity = new Identity();
export default identity;