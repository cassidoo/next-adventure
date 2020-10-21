import { createMachine } from 'xstate';

export const introVals = {
  start: 'start',
  kitchen: 'kitchen',
};

export const firstLevel = {
  apple: 'apple',
  kidsringing: 'kids-ringing',
};

export const states = [introVals, firstLevel];

const storyMachine = createMachine({
  id: 'spookydev',
  initial: 'start',
  states: {
    [introVals.start]: {
      meta: {
        story:
          'Once upon a time there was a developer who was working very late at night. Very late at night... on Halloween.',
      },
    },
    [introVals.kitchen]: {
      meta: {
        story: `The developer decided to take a break to get a snack. She went to the kitchen, and couldn't decide what to eat.`,
        on: {
          apple: firstLevel.apple,
          candy: firstLevel.kidsringing,
        },
      },
    },
    [firstLevel.apple]: {
      meta: {
        story:
          'She took a bite of the apple, and paused. Something was weird. She felt funny. Turns out it was poisoned and her work was never finished. Her last words were, "I wish I committed early and often in my repositories."',
      },
    },
    [firstLevel.kidsringing]: {
      meta: {
        story:
          'She munched on the candy, enjoying the delightful thought of getting a cavity someday. But then, the doorbell rang. "Trick or Treat!" echoed outside.',
      },
    },
  },
});

export default storyMachine;
