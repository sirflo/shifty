import { Tweenable, tween } from './tweenable';
import { Scene } from './scene';

let scene;

beforeEach(() => {
  scene = new Scene();
});

describe('constructor', () => {
  test('stores internal Tweenables', () => {
    scene = new Scene(new Tweenable(), tween());
    const [tweenable1, tweenable2] = scene.tweenables;

    expect(scene.tweenables).toHaveLength(2);
    expect(tweenable1).toBeInstanceOf(Tweenable);
    expect(tweenable2).toBeInstanceOf(Tweenable);
  });
});

describe('get promises', () => {
  test('returns promises for all tweenables', () => {
    scene = new Scene(new Tweenable());
    const { promises } = scene;
    expect(promises).toHaveLength(1);
    expect(promises[0]).toBeInstanceOf(Promise);
  });
});

describe('add', () => {
  test('adds a Tweenable', () => {
    const tweenable1 = scene.add(new Tweenable());
    const tweenable2 = scene.add(tween());
    expect(scene.tweenables[0]).toEqual(tweenable1);
    expect(scene.tweenables[1]).toEqual(tweenable2);
  });

  describe('play state syncing', () => {
    beforeEach(() => {
      scene.add(tween());
    });

    describe('scene was already playing', () => {
      test('plays the added tweenable', () => {
        const addedTweenable = scene.add(tween());
        expect(addedTweenable.isPlaying()).toBeTruthy();
      });
    });

    describe('scene was not already playing', () => {
      test('pauses the added tweenable', () => {
        scene.pause();
        const addedTweenable = scene.add(tween());
        expect(addedTweenable.isPlaying()).toBeFalsy();
      });
    });
  });
});

describe('remove', () => {
  test('removes a Tweenable', () => {
    const tweenable1 = new Tweenable({ foo: 1 });
    const tweenable2 = new Tweenable({ bar: 1 });
    scene = new Scene(tweenable1, tweenable2);
    const removedTweenable = scene.remove(tweenable1);

    expect(removedTweenable).toEqual(tweenable1);
    expect(scene.tweenables).toEqual([tweenable2]);
  });
});

describe('isPlaying', () => {
  beforeEach(() => {
    scene = new Scene(new Tweenable(), new Tweenable());
  });

  test('returns false if no tweenables are playing', () => {
    expect(scene.isPlaying()).toBeFalsy();
  });

  test('returns true if any Tweenables are playing', () => {
    scene.tweenables[1].tween({ from: { x: 0 }, to: { x: 10 } });
    expect(scene.isPlaying()).toBeTruthy();
  });
});

describe('play', () => {
  beforeEach(() => {
    scene = new Scene(new Tweenable(), new Tweenable());
  });

  test('plays all Tweenables from their beginning', () => {
    const [tweenable1, tweenable2] = scene.tweenables;
    tweenable1.setConfig({ from: { x: 0 }, to: { x: 10 } });
    tweenable2.setConfig({ from: { x: 10 }, to: { x: 0 } });
    jest.spyOn(tweenable1, 'seek');
    jest.spyOn(tweenable2, 'seek');
    scene.play();

    expect(tweenable1.isPlaying()).toBeTruthy();
    expect(tweenable2.isPlaying()).toBeTruthy();
    expect(tweenable1.seek).toHaveBeenCalledWith(0);
    expect(tweenable2.seek).toHaveBeenCalledWith(0);
  });
});

describe('pause', () => {
  beforeEach(() => {
    scene = new Scene(new Tweenable(), new Tweenable());
  });

  test('pauses all Tweenables', () => {
    const [tweenable1, tweenable2] = scene.tweenables;
    tweenable1.tween({ from: { x: 0 }, to: { x: 10 } });
    tweenable2.tween({ from: { x: 10 }, to: { x: 0 } });
    scene.pause();

    expect(scene.isPlaying()).toBeFalsy();
  });
});

describe('stop', () => {
  beforeEach(() => {
    scene = new Scene(new Tweenable(), new Tweenable());
  });

  test('stops all Tweenables', () => {
    const [tweenable1, tweenable2] = scene.tweenables;
    tweenable1.setConfig({ from: { x: 0 }, to: { x: 10 } });
    tweenable2.setConfig({ from: { x: 10 }, to: { x: 0 } });
    jest.spyOn(tweenable1, 'stop');
    jest.spyOn(tweenable2, 'stop');
    scene.stop(true);

    expect(tweenable1.stop).toHaveBeenCalledWith(true);
    expect(tweenable2.stop).toHaveBeenCalledWith(true);
  });
});

describe('automatic removal', () => {
  beforeEach(done => {
    scene.add(tween({ duration: 0 }));
    Promise.all(scene.promises).then(() => done());
  });

  test('removes tweenable when promise is resolved', () => {
    expect(scene.tweenables).toHaveLength(0);
  });
});