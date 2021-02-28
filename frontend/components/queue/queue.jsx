import React from 'react';

class Queue extends React.Component {

  enqueue(queue) {
    queue.push()
  }

  dequeue(queue) {
    queue.shift()
  }

  getSize(queue) {
    queue.length
  }

  getPartialQueue(songsArray) {

  }
}

export default Queue