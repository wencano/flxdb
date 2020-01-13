const advancedOperation1 = [
  {
    number: '1',
    timein: '9:00 AM',
    timeout: '4:00 PM',
    hours: '6',
  },
  {
    number: '2',
    timein: '9:00 AM',
    timeout: '4:00 PM',
    hours: '6',
  },
  {
    number: '3',
    timein: '9:00 AM',
    timeout: '4:00 PM',
    hours: '6',
  },
  {
    number: '4',
    timein: '9:00 AM',
    timeout: '4:00 PM',
    hours: '6',
  },
  {
    number: '5',
    timein: '9:00 AM',
    timeout: '4:00 PM',
    hours: '6',
  },
];
const advancedOperation2 = [];
const advancedOperation3 = [];
const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};
export default {
  'GET  /api/profile/advanced': getProfileAdvancedData,
};
