const isEventExist = listeners => event => listeners.has(event);

const createSignal = () => {
  const listeners = new Map();

  const isCorrectEvent = isEventExist(listeners);

  const on = (event, callBack) => {
    if (!isCorrectEvent(event)) {
      listeners.set(event, []);
    }
    listeners.get(event).push(callBack);
  };

  const off = event => {
    listeners.delete(event);
  };

  const emit = (event, ...args) => {
    if (isCorrectEvent(event)) {
      listeners.get(event).forEach(callBack => {
        callBack(...args);
      });
    }
  };
  return { on, off, emit };
};

const signals = createSignal();
signals.on('dog', () => console.log('gav gav'))

signals.on('dog', () => console.log('now wolf'))
console.log(signals.emit('dog'))