#!/usr/bin/env node

import { greetsUser, willShowRulesGame } from '../src/index.js';
import ruleGame, { parityСheck } from '../src/games/numbers-game.js';

greetsUser();
willShowRulesGame(ruleGame);
parityСheck();
