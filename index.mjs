import {wait, randomInt} from './utils.mjs';
import {setContext, getContext, context} from './context.mjs';

const getFromDB = async (id) => {
  console.log(`Fetching from db id=${id} session=${getContext().session}`);
  await wait(randomInt(0, 10) * 100);
  return {foo: 'bar'};
}

const run = async () => {
  setContext({session: `TX-${randomInt(0, 100)}`});

  console.log(`Hello, async world! session=${getContext().session}`);

  await getFromDB(1);
  await getFromDB(2);
  await getFromDB(3);
  await getFromDB(4);

  console.log(`Goodbye async friend session=${getContext().session}`);
}


run();
run();
run();
