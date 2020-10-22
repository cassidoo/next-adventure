import { createMachine } from 'xstate';
import {
  generatePersonal,
  generatePossessive,
  generateReflexive,
  generateThirdPerson,
} from './generatePronouns';

const introVals = {
  start: 'start',
  kitchen: 'snack-time',
};

const firstLevel = {
  apple: 'eat-an-apple',
  kidsringing: 'eat-some-candy',
};

const secondLevel = {
  ignore: 'ignore-the-kids',
  answer: 'answer-the-door',
};

const thirdLevel = {
  upstairs: 'stomp-upstairs',
  tiptoe: 'tiptoe-upstairs',
  lockdoor: 'lock-the-door',
  callout: 'ask-if-anyone-is-out-there',
};

export const storyMachine = (character) => {
  let name = character?.name;
  let pronouns = character?.pronouns;
  let smell = character?.smell;

  return {
    id: 'spookydev',
    initial: 'start',
    states: {
      [introVals.start]: {
        meta: {
          story: `Once upon a time there was a developer ${
            name ? `named ${name}` : ''
          } who was working very late at night. Very late at night... on Halloween.`,
        },
        on: {
          [introVals.kitchen]: introVals.kitchen,
        },
      },
      [introVals.kitchen]: {
        meta: {
          story: `${
            name ? name : 'The developer'
          } decided to take a break to get a snack. ${generatePersonal(
            pronouns
          )} went to the kitchen, and couldn't decide what to eat.`,
        },
        on: {
          [firstLevel.apple]: firstLevel.apple,
          [firstLevel.kidsringing]: firstLevel.kidsringing,
        },
      },
      [firstLevel.apple]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  took a bite of the apple, and paused. ${generatePersonal(
            pronouns
          )}  felt funny. Turns out it was poisoned and ${generatePossessive(
            pronouns
          )} work was never finished. With that, ${generatePossessive(
            pronouns
          )} last words were, "I wish I committed early and often in my repositories."`,
        },
        on: {
          restart: introVals.start,
        },
      },
      [firstLevel.kidsringing]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  munched on the candy, enjoying the delightful thought of getting a cavity someday. But then, the doorbell rang. "Trick or Treat!" echoed outside.`,
        },
        on: {
          [secondLevel.ignore]: secondLevel.ignore,
          [secondLevel.answer]: secondLevel.answer,
        },
      },
      [secondLevel.ignore]: {
        meta: {
          story: `"I do not have time for children. I have bugs to solve, and a world to save." ${generatePersonal(
            pronouns
          )}  walked upstairs, angry at the inconvenience of people existing.`,
        },
        on: {
          [thirdLevel.upstairs]: thirdLevel.upstairs,
          [thirdLevel.tiptoe]: thirdLevel.tiptoe,
        },
      },
      [secondLevel.answer]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  opened the front door, but there was nobody there. It was spooky, but probably good since ${generatePossessive(
            pronouns
          )} stomach had the last of the candy.`,
        },
        on: {
          [thirdLevel.lockdoor]: thirdLevel.lockdoor,
          [thirdLevel.callout]: thirdLevel.callout,
        },
      },
      [thirdLevel.upstairs]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  stomped way too loudly upstairs and a ghost woke up. The ghost inhabited ${
            name ? name : 'the developer'
          }'s body and made ${generateThirdPerson(
            pronouns
          )} forget ${generatePossessive(pronouns)} favorite smell (${
            smell ? smell : 'cake'
          }, of course), and deleted all of ${generatePossessive(
            pronouns
          )} code. ${generatePersonal(
            pronouns
          )}  decided to use Rust after that. The end.`,
        },
        on: {
          restart: introVals.start,
        },
      },
      [thirdLevel.tiptoe]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  snuck upstairs quietly, thinking about data structures. ${generatePersonal(
            pronouns
          )}  thought of the smell of ${
            smell ? smell : 'cake'
          } and coded through the rest of the night. There would be no murders tonight.`,
        },
        on: {
          restart: introVals.start,
        },
      },
      [thirdLevel.lockdoor]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  locked the front door, knowing it wouldn't be opening again this evening. Halloween is for chumps. ${generatePersonal(
            pronouns
          )}  turned as the smell of ${
            smell ? smell : 'cake'
          } wafted from ${generatePossessive(
            pronouns
          )} basement. "What on earth could that be...?" ${generatePersonal(
            pronouns
          )} asked ${generateReflexive(pronouns)}.`,
        },
        on: {
          restart: introVals.start,
        },
      },
      [thirdLevel.callout]: {
        meta: {
          story: `${generatePersonal(
            pronouns
          )}  called out into the night, "who's there?" Suddenly, a werewolf comes up and says, "Have you heard of TypeScript?" and eats ${generateThirdPerson(
            pronouns
          )}. The end.`,
        },
        on: {
          restart: introVals.start,
        },
      },
    },
  };
};

export const stateMachineFromVars = (character) => {
  return createMachine(storyMachine(character));
};
