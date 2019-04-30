import {expectType} from 'tsd';
import resolveCwd = require('.');

expectType<string>(resolveCwd('./foo'));
expectType<string | undefined>(resolveCwd.silent('./foo'));
