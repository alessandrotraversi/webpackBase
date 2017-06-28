import css from './app.scss';
import Flex from 'flexibility';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import test from './test';

test();
$(document).ready(function () {
    console.log('app');
});

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Hello world.');

console.log('test');