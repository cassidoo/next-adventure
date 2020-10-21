import { createMachine } from 'xstate';

export const introVals = {
  start: 'start',
  kitchen: 'snack-time',
};

export const firstLevel = {
  apple: 'eat-an-apple',
  kidsringing: 'eat-some-candy',
};

export const secondLevel = {
  ignore: 'ignore-the-kids',
  answer: 'answer-the-door',
};

export const thirdLevel = {
  upstairs: 'stomp-upstairs',
  tiptoe: 'tiptoe-upstairs',
  lockdoor: 'lock-the-door',
  callout: 'ask-if-anyone-is-out-there',
};

const storyMachine = createMachine({
  id: 'spookydev',
  initial: 'start',
  states: {
    [introVals.start]: {
      meta: {
        story:
          'Once upon a time there was a developer who was working very late at night. Very late at night... on Halloween.',
      },
      on: {
        [introVals.kitchen]: introVals.kitchen,
      },
    },
    [introVals.kitchen]: {
      meta: {
        story: `The developer decided to take a break to get a snack. She went to the kitchen, and couldn't decide what to eat.`,
      },
      on: {
        [firstLevel.apple]: firstLevel.apple,
        [firstLevel.kidsringing]: firstLevel.kidsringing,
      },
    },
    [firstLevel.apple]: {
      meta: {
        story:
          'She took a bite of the apple, and paused. She felt funny. Turns out it was poisoned and her work was never finished. Her last words were, "I wish I committed early and often in my repositories."',
      },
      on: {
        restart: introVals.start,
      },
    },
    [firstLevel.kidsringing]: {
      meta: {
        story:
          'She munched on the candy, enjoying the delightful thought of getting a cavity someday. But then, the doorbell rang. "Trick or Treat!" echoed outside.',
      },
      on: {
        [secondLevel.ignore]: secondLevel.ignore,
        [secondLevel.answer]: secondLevel.answer,
      },
    },
    [secondLevel.ignore]: {
      meta: {
        story:
          '"I do not have time for children. I have bugs to solve, and a world to save." She walked upstairs, angry at the inconvenience of people existing.',
      },
      on: {
        [thirdLevel.upstairs]: thirdLevel.upstairs,
        [thirdLevel.tiptoe]: thirdLevel.tiptoe,
      },
    },
    [secondLevel.answer]: {
      meta: {
        story:
          'She opened the front door, but there was nobody there. It was spooky, but probably good since she ate the candy.',
      },
      on: {
        [thirdLevel.lockdoor]: thirdLevel.lockdoor,
        [thirdLevel.callout]: thirdLevel.callout,
      },
    },
    [thirdLevel.upstairs]: {
      meta: {
        story: `She stomped way too loudly upstairs and a ghost woke up. The ghost inhabited the developer's body and made her forget her favorite smell (cake, of course), and deleted all of her code. She then went on to fall in love with the ghost. The end.`,
      },
      on: {
        restart: introVals.start,
      },
    },
    [thirdLevel.tiptoe]: {
      meta: {
        story: `She snuck upstairs quietly, thinking about data structures. She thought of the smell of cake as she coded through the rest of the night. There would be no murders tonight.`,
      },
      on: {
        restart: introVals.start,
      },
    },
    [thirdLevel.lockdoor]: {
      meta: {
        story: `She locked the front door, knowing she wouldn't be opening it again this evening. Halloween is for chumps. She turned as the smell of cake wafted from her basement. "What could that be?" she asked herself.`,
      },
      on: {
        restart: introVals.start,
      },
    },
    [thirdLevel.callout]: {
      meta: {
        story: `She called out into the night, "who's there?" Suddenly, a werewolf comes up and says, "Have you heard of TypeScript?" and eats her. The end.`,
      },
      on: {
        restart: introVals.start,
      },
    },
  },
});

export default storyMachine;
