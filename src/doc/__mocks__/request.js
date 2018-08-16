'use strict';

const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export default function request(url) {
  console.log('----inside mocked request');
  return new Promise((resolve, reject) => {

    const userID = parseInt(url.substr('/users/'.length), 10);
    if (users[userID]) {
      resolve(users[userID])
    } else {
      reject({
        error: 'User with ' + userID + ' not found.',
      })
    }
  });
}
