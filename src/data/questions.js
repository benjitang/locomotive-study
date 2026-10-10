// TEMPORARY placeholder questions for an LIRR Locomotive Engineer Trainee test.
// Replace these with the real questions/answers from the study material.
//
// Categories are listed in the order they should appear in "ordered" mode,
// and questions within each category keep the order written here.

export const definitionCategories = [
  {
    category: 'General Terms',
    questions: [
      {
        term: 'Absolute Signal',
        answer: 'A signal displaying a stop aspect that requires a stop without proceeding until authority is received.',
      },
      {
        term: 'Block',
        answer: 'A length of track of defined limits on which the movement of trains is governed by block signals, cab signals, or both.',
      },
      {
        term: 'Controlled Point',
        answer: 'A location where signals and/or switches of a Traffic Control System are controlled by a train dispatcher or control operator.',
      },
      {
        term: 'Interlocking',
        answer: 'An arrangement of switch, lock, and signal appliances interconnected so that their movements must succeed each other in proper sequence.',
      },
    ],
  },
  {
    category: 'Speeds',
    questions: [
      {
        term: 'Restricted Speed',
        answer: 'A speed that will permit stopping within one-half the range of vision, short of another train, obstruction, or switch not properly lined, looking out for broken rail, not exceeding 15 MPH.',
      },
      {
        term: 'Medium Speed',
        answer: 'Not exceeding 30 MPH.',
      },
      {
        term: 'Slow Speed',
        answer: 'Not exceeding 15 MPH.',
      },
    ],
  },
];

const sig = (file) => `${import.meta.env.BASE_URL}signals/${file}`;

export const signalCategories = [
  {
    category: 'Wayside Color Light Signals',
    questions: [
      { image: sig('wayside-clear.svg'), answer: 'Clear' },
      { image: sig('wayside-approach-medium.svg'), answer: 'Approach Medium' },
      { image: sig('wayside-approach.svg'), answer: 'Approach' },
      { image: sig('wayside-medium-clear.svg'), answer: 'Medium Clear' },
      { image: sig('wayside-restricting.svg'), answer: 'Restricting' },
      { image: sig('wayside-stop.svg'), answer: 'Stop Signal' },
    ],
  },
  {
    category: 'Cab Signals',
    questions: [
      { image: sig('cab-normal.svg'), answer: 'Normal' },
      { image: sig('cab-approach-medium.svg'), answer: 'Approach Medium' },
      { image: sig('cab-approach.svg'), answer: 'Approach' },
      { image: sig('cab-restricting.svg'), answer: 'Restricting' },
    ],
  },
];
