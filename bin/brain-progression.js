#!/usr/bin/env node
import { greetsUser, willShowRulesGame } from '../src/index.js';
import ruleGame, { arithmeticProgression } from '../src/games/arithmetic-progression-game.js';

greetsUser();
willShowRulesGame(ruleGame);
arithmeticProgression();
