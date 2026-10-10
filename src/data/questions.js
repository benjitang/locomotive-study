// Definitions are transcribed word for word from the LIRR study sheets.
// Signal questions further down are still TEMPORARY placeholders.
//
// Categories are listed in the order they should appear in "ordered" mode,
// and questions within each category keep the order written here.

const q = (term, answer) => ({ term, answer });

export const definitionCategories = [
  {
    category: 'Block',
    questions: [
      q('Block', 'A length of track of defined limits, the use of which is governed by block signals, block-limit signals, automatic speed control or any combination thereof.'),
      q('Absolute Block', 'A block established between block stations, block limit stations, interlockings or any combination thereof which must not be occupied by more than one train except as provided by the rules.'),
    ],
  },
  {
    category: 'Block Signal Systems',
    questions: [
      q('Automatic Block Signal System', 'A block signal system wherein the use of each block is governed by an automatic block signal, the cab signal indicator or both.'),
      q('Block Signal System', 'A series of consecutive blocks.'),
      q('Manual Block Signal System', 'A block signal system wherein the use of each block is governed by block signals controlled manually, by block-limit signals or both, upon information received by telephone, radio or other means of communication.'),
    ],
  },
  {
    category: 'Automatic Speed Control',
    questions: [
      q('Automatic Speed Control System (ASC)', 'A system so arranged that its operation will automatically result in the following: A full service application of the train brakes if, while operating under a speed restriction, the speed of the train exceeds the predetermined rate. The application will continue until the train is either brought to a stop or, under the control of the engineer, its speed is reduced to the predetermined rate.'),
      q('Speed Controlled Train', 'A train equipped with the following speed control apparatus, a cab signal indicator, sealed application valve or switch, audible warning device and acknowledging switch, in operative condition for the direction in which it is to move.'),
    ],
  },
  {
    category: 'Engines / Equipment',
    questions: [
      q('Engine (ENG)', 'A unit propelled by any form of energy or a combination of units operated from a single control, used in road or yard service.'),
      q('Multiple Unit Equipment', 'Equipment capable of being propelled by electrical energy through the use of third rail contact shoes.'),
      q('Track Car', 'A roadway maintenance machine, not classified as an engine, which is operated on track for inspection or maintenance. It may not shunt track circuits or operate signals and will be governed by rules and special instructions for trains other than passenger trains.'),
    ],
  },
  {
    category: 'Interlocking',
    questions: [
      q('Interlocking', 'An arrangement of signals and signal appliances so interconnected that their movements must succeed each other in proper sequence and for which interlocking rules are in effect.'),
      q('Interlocking Limits', 'The tracks between the extreme opposing home signals of an interlocking.'),
    ],
  },
  {
    category: 'Pilot',
    questions: [
      q('Pilot', 'An employee assigned to a train or track car when the engineer, conductor or track car driver is not qualified on the physical characteristics or rules of the railroad or portion of the railroad over which the movement is to be made.'),
    ],
  },
  {
    category: 'Signals',
    questions: [
      q('Aspect', 'The appearance of a fixed signal which conveys an indication as viewed from the direction of an approaching train; the appearance of a cab signal indicator as viewed in the engine control compartment.'),
      q('Block-Limit Signal', 'A fixed signal indicating the limit of the block, the use of which is governed by manual block signal system rules.'),
      q('Block Signal', 'A fixed signal or a hand signal in the absence of a fixed signal, at the entrance to a block that governs trains using that block.'),
      q('Cab Signal Indicator', 'A signal indicator located in the engine control compartment displaying the maximum speed for the movement of the train. It will be used in conjunction with interlocking signals and either in conjunction with or in lieu of block signals.'),
      q('Distant Signal', 'A fixed signal used to govern the approach to a home signal.'),
      q('Fixed Signal', 'A signal of a fixed location indicating a condition which affects the movement of a train.'),
      q('Home Signal', 'A fixed signal that displays Stop signal as its most restrictive aspect and governs the entrance to a route or block.'),
      q('Indication', 'The information conveyed by the aspect of a signal.'),
      q('Interlocking Signals', 'The fixed signals of an interlocking.'),
    ],
  },
  {
    category: 'Marker',
    questions: [
      q('Marker', 'A highly visible marking device in the red-orange-amber color range, affixed to the rear of the train to indicate that the train is complete.'),
    ],
  },
  {
    category: 'Roadway Worker Protection',
    questions: [
      q('Foul Time', 'A method of establishing working limits on a main track, secondary track or siding in which a roadway worker is notified by the Train Dispatcher through the Block Operator that no trains will operate within the working limits established on that track until the roadway worker reports clear of the track.'),
      q('Inaccessible Track', 'A method of establishing working limits on tracks not controlled by the Train Dispatcher or Block Operator by physically preventing the entry and movement of trains.'),
      q('Job Briefing', 'When reporting for duty, employees whose duties require coordination with other employees must hold a job briefing to review operational and safety conditions. If these conditions change, employees must hold an additional job briefing to discuss the new conditions.'),
      q('Roadway Worker', 'An employee of a railroad, or of a contractor to a railroad, whose duties include inspection, construction, maintenance or repair of railroad track, bridges, roadway, signal and communication systems, electric traction systems, roadway facilities or roadway maintenance machinery on or near track or with the potential of fouling a track and flagmen and watchmen/lookouts responsible for their protection.'),
      q('Watchman/Lookout', 'A properly equipped employee that has been annually trained on roadway worker protection whose sole duty is to provide at least 15 seconds advanced visual and auditory warning of approaching trains or on-track equipment to roadway workers.'),
      q('Working Limits', 'A segment of track with definite boundaries upon which trains may move only as authorized by the roadway worker in charge of that segment of track.'),
    ],
  },
  {
    category: 'Positive Train Control',
    questions: [
      q('Advanced Civil Speed Enforcement System (ACSES)', 'A transponder and data-radio based train-control system which will automatically apply the brakes of an equipped train if, while approaching a Speed Restriction or Positive Train Stop Location, the speed of the train exceeds the predetermined rate.'),
      q('ACSES Controlled Train', 'A Passenger or Freight class train equipped with the following ACSES controlled apparatus: A Data Radio, Aspect Display Unit, sealed ACSES valve or switch, audible warning device and acknowledging switch in operative condition.'),
    ],
  },
  {
    category: 'Speeds',
    questions: [
      q('Limited Speed', 'A speed not exceeding 45 mph.'),
      q('Maximum Authorized Speed (MAS)', 'The highest speed that is permitted over a specific portion of the railroad. It may be authorized by the special instructions of the current timetable, Rules of the Operating Department or any other publication authorized by the General Superintendent-Transportation'),
      q('Medium Speed', 'A speed not exceeding 30 mph, except in ASC territory, train will be governed by speed displayed on the cab signal indicator not to exceed 40 mph.'),
      q('Reduced Speed', 'A speed at which a train can be stopped short of another train or obstruction.'),
      q('Restricted Speed (RS)', 'A mode of operation, at which a train can be stopped within one half the range of vision, short of the next signal, another train, obstruction, derail, or switch improperly lined, looking out for broken rail or crossing protection not functioning, not exceeding 15 miles per hour.'),
      q('Slow Speed', 'A speed not exceeding 15 mph, except in ASC territory, train will be governed by speed displayed on the cab signal indicator not to exceed 30 mph.'),
    ],
  },
  {
    category: 'Switches',
    questions: [
      q('Automatic Safety Switch', 'A switch identified by a yellow switch stand. Trains may make trailing point moves through the switch without previously aligning it by hand unless otherwise specified.'),
      q('Crossover', 'A track connection between two adjacent, not necessarily parallel tracks, consisting of a minimum of two switches, which is intended to be used primarily for the purpose of crossing over from one track to another.'),
      q('Derail', 'A track safety device, fixed or portable, designed to guide a car off the rails at a selected location on a track as a means of protection against collisions or other accidents.'),
      q('Dual Control Switch', 'A power-operated switch also equipped for hand operation.'),
      q('Electric Lock Switch', 'A hand-operated switch equipped with an electrical device that restricts the movement of the switch.'),
      q('Hand-Operated Switch', 'A switch that must be aligned by hand before a train makes a trailing point movement through the switch.'),
      q('Interlocking Switch', 'A switch within interlocking limits controlled by the Block Operator or Train Dispatcher working in conjunction with interlocking signals and other interlocking appliances.'),
      q('Spring Switch', 'A switch equipped with a spring mechanism that will restore the switch points to the normal position after having been trailed through.'),
    ],
  },
  {
    category: 'Stations',
    questions: [
      q('Block-Limit Station', 'A place at which a block-limit signal is displayed.'),
      q('Block Station', 'A place at which manual block signals are displayed.'),
      q('Interlocking Station', 'A place from which an interlocking is operated.'),
      q('Passenger Station', 'A place at which trains are scheduled to receive and/or discharge passengers.'),
      q('Station', 'A place designated by name on the station pages of the current timetable.'),
    ],
  },
  {
    category: 'Timetable / Bulletins / Notices',
    questions: [
      q('Bulletin Notice (BN)', 'A notice issued to employees by the General Superintendent – Transportation. It may contain special schedules or other information pertaining to track work programs or special events and will be issued at a minimum of once per week.'),
      q('General Notice (GN)', 'A notice issued to employees by the General Superintendent – Transportation. It may contain operating instructions or other information as may be necessary.'),
      q('General Order', 'An order issued to employees by the General Superintendent – Transportation. It may change or annul operating rules, timetable information or special instructions.'),
      q('Schedule', 'That part of a timetable that prescribes direction, number and movement of a regular train.'),
      q('Temporary Speed Restriction Bulletin (TSRB)', 'A daily bulletin containing necessary speed restrictions issued by the Train Dispatcher.'),
      q('Timetable', 'The authority for the movement of regular trains subject to the rules. It contains classified schedules and special instructions relating to the movement of trains.'),
    ],
  },
  {
    category: 'Tracks',
    questions: [
      q('Controlled Siding', 'A designated track, the entrance and exit of which are governed by home signals.'),
      q('Current of Traffic', 'The movement of trains on a main track in one direction, as specified by special instruction.'),
      q('Industry Track', 'A track, or series of tracks, serving the needs of a commercial industry other than a railroad.'),
      q('Main Track', 'A designated track upon which trains are operated by timetable, Form L or both or the use of which is governed by block signals.'),
      q('Secondary Track', 'A designated track upon which trains may be operated without timetable or Form L authority, or block signals subject to the prescribed signals, rules and special instructions.'),
      q('Siding', 'A designated track adjacent to a main track for the meeting or passing of trains.'),
      q('Single Track', 'A main track upon which trains are operated in both directions.'),
      q('Two or More Tracks', 'Two or more main tracks upon which trains are operated as designated in the special instructions.'),
      q('Yard', 'A system of tracks, other than main tracks, secondary tracks or sidings, used for making up trains, storing cars and other purposes. All movements are subject to prescribed signals, rules and special instructions.'),
      q('Yard Limits', 'A portion of single main track between yard limit boards, as specified by special instruction.'),
    ],
  },
  {
    category: 'Trains',
    questions: [
      q('Camp Car', 'Any on-track vehicle, except a wreck train, that is used to house railroad or contract employees.'),
      q('Extra Train', 'A train not authorized by a timetable schedule. It must be designated as:\nPassenger Extra – for passenger train extra\nWork Extra – for work train extra\nTrack Car Extra – for track car extra\nExtra – For any other extra train except passenger extra, work extra or track car extra.'),
      q('Passenger Train', 'A train carrying revenue passengers.'),
      q('Push-Pull Train', 'A train consisting of a bi-level cab control car at one end and a diesel or dual mode locomotive at the opposite end.'),
      q('Regular Train', 'A train authorized by a timetable schedule.'),
      q('Superior Train', 'A train having precedence over another train.'),
      q('Train', 'An engine or more than one engine coupled, with or without cars, displaying markers.'),
      q('Train of Superior Direction', 'A train given precedence in the direction specified as between opposing regular trains.'),
      q('Train of Superior Right', 'A train given precedence by Form L.'),
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
