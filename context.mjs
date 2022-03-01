import {executionAsyncId, createHook} from 'async_hooks';

export const context = new Map();

export const setContext = (data) => {
  context.set(executionAsyncId(), data);
}

export const getContext = () => {
  return context.get(executionAsyncId());
}

export const asyncHook = createHook({
  init: (asyncId, type, triggerAsyncId) => {
    let triggeredData = context.get(triggerAsyncId);

    if(triggeredData) {
      // console.log(`Add ${asyncId} => ${triggeredData}`);
      context.set(asyncId, triggeredData);
    }
  },
  destroy: (asyncId) => {
    // console.log(`Delete ${asyncId}`);
    context.delete(asyncId);
  }
});

asyncHook.enable();

