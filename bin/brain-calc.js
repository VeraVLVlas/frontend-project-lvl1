#!/usr/bin/env node
import { greetsUser, willShowRulesGame } from '../src/index.js';
import ruleGame, { generateRandomMathExpression } from '../src/games/calculator-game.js';

greetsUser();
willShowRulesGame(ruleGame);
generateRandomMathExpression();
