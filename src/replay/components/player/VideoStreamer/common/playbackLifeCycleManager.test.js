import getPlaybackLifeCycleManager from './playbackLifeCycleManager';

test('playbackLifeCycleManager', () => {
  const updateStreamState = jest.fn();
  const pauseStreamRangeUpdater = {
    start: jest.fn(),
    stop: jest.fn()
  };
  const { startPlaybackSession, endPlaybackSession, getStage, setStage, cleanup } = getPlaybackLifeCycleManager(
    updateStreamState,
    pauseStreamRangeUpdater
  );
  startPlaybackSession();
  expect(getStage()).toBe('new');
  expect(pauseStreamRangeUpdater.stop).toHaveBeenCalledTimes(1);
  expect(updateStreamState).toHaveBeenCalledWith({
    duration: 0,
    position: 0,
    playMode: 'ondemand',
    playState: 'inactive',
    isBuffering: false,
    isPaused: false,
    isSeeking: false,
    volume: 1,
    muted: false,
    isPipAvailable: false,
    isAirPlayAvailable: false,
    isPipActive: false,
    isAirPlayActive: false,
    bufferedAhead: 0,
    bitrates: [],
    audioTracks: [],
    textTracks: [],
    absolutePosition: new Date(0),
    absoluteStartPosition: new Date(0)
  });

  setStage('started');
  expect(getStage()).toBe('started');
  endPlaybackSession('dead');
  expect(getStage()).toBe('dead');
  expect(updateStreamState).toHaveBeenCalledWith({
    playState: 'inactive',
    isBuffering: false,
    isPaused: false,
    isSeeking: false,
    isPipAvailable: false,
    isAirPlayAvailable: false
  });

  cleanup();
  expect(pauseStreamRangeUpdater.stop).toHaveBeenCalledTimes(3);
});
