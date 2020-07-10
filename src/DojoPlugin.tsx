import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import * as Flex from "@twilio/flex-ui";

import reducers, { namespace } from './states';

import Identity from './components/Identity/Identity';

const PLUGIN_NAME = 'SamplePlugin';

export default class DojoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    flex.AgentDesktopView.Panel2.Content.remove('container');
    Identity.Setup(flex, manager);
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}