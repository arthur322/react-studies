import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Todos from '~/pages/Todos';

const Routes = createAppContainer(createSwitchNavigator({ Main, Todos }));

export default Routes;
