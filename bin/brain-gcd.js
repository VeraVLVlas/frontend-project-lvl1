#!/usr/bin/env node
import { greetsUser, willShowRulesGame } from '../src/index.js';
import ruleGame, { findsGreatestCommonDivisorNumber } from '../src/games/gcd-number-game.js';

greetsUser();
willShowRulesGame(ruleGame);
findsGreatestCommonDivisorNumber();
