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
        id: 'def-absolute-signal',
        term: 'Absolute Signal',
        answer: 'A signal displaying a stop aspect that requires a stop without proceeding until authority is received.',
      },
      {
        id: 'def-block',
        term: 'Block',
        answer: 'A length of track of defined limits on which the movement of trains is governed by block signals, cab signals, or both.',
      },
      {
        id: 'def-controlled-point',
        term: 'Controlled Point',
        answer: 'A location where signals and/or switches of a Traffic Control System are controlled by a train dispatcher or control operator.',
      },
      {
        id: 'def-interlocking',
        term: 'Interlocking',
        answer: 'An arrangement of switch, lock, and signal appliances interconnected so that their movements must succeed each other in proper sequence.',
      },
    ],
  },
  {
    category: 'Speeds',
    questions: [
      {
        id: 'def-restricted-speed',
        term: 'Restricted Speed',
        answer: 'A speed that will permit stopping within one-half the range of vision, short of another train, obstruction, or switch not properly lined, looking out for broken rail, not exceeding 15 MPH.',
      },
      {
        id: 'def-medium-speed',
        term: 'Medium Speed',
        answer: 'Not exceeding 30 MPH.',
      },
      {
        id: 'def-slow-speed',
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
      { id: 'sig-wayside-clear', image: sig('wayside-clear.svg'), answer: 'Clear' },
      { id: 'sig-wayside-approach-medium', image: sig('wayside-approach-medium.svg'), answer: 'Approach Medium' },
      { id: 'sig-wayside-approach', image: sig('wayside-approach.svg'), answer: 'Approach' },
      { id: 'sig-wayside-medium-clear', image: sig('wayside-medium-clear.svg'), answer: 'Medium Clear' },
      { id: 'sig-wayside-restricting', image: sig('wayside-restricting.svg'), answer: 'Restricting' },
      { id: 'sig-wayside-stop', image: sig('wayside-stop.svg'), answer: 'Stop Signal' },
    ],
  },
  {
    category: 'Cab Signals',
    questions: [
      { id: 'sig-cab-normal', image: sig('cab-normal.svg'), answer: 'Normal' },
      { id: 'sig-cab-approach-medium', image: sig('cab-approach-medium.svg'), answer: 'Approach Medium' },
      { id: 'sig-cab-approach', image: sig('cab-approach.svg'), answer: 'Approach' },
      { id: 'sig-cab-restricting', image: sig('cab-restricting.svg'), answer: 'Restricting' },
    ],
  },
];
