#!/usr/bin/env node

import { greetsUser, willShowRulesGame } from '../src/index.js';
import ruleGame, { gameEngine } from '../src/games/game-prime-number.js';

greetsUser();
willShowRulesGame(ruleGame);
gameEngine();
