import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GotoLiveButton from './GotoLiveButton';

Enzyme.configure({ adapter: new Adapter() });

test('<GotoLiveButton/> renders with prefixed class name and DOM including children.', () => {
  const rendered = shallow(
    <GotoLiveButton
      playMode="livedvr"
      classNamePrefix="a-"
      isAtLiveEdgeContent="A"
      isNotAtLiveEdgeContent="B"
      label="C"
    />
  );
  const renderedToggleButton = rendered.dive();
  expect(rendered.name()).toBe('ToggleButton');
  expect(rendered.props().label).toBe('C');
  expect(renderedToggleButton.hasClass('a-goto-live-button')).toBe(true);
  expect(renderedToggleButton.text()).toBe('B');

  const rendered2 = shallow(<GotoLiveButton playMode="livedvr" />);
  const renderedToggleButton2 = rendered2.dive();
  expect(renderedToggleButton2.hasClass('replay-goto-live-button')).toBe(true);
});

test('<GotoLiveButton/> does not render if stream is stream is on demand or has no DVR window.', () => {
  const rendered = shallow(
    <GotoLiveButton
      playMode="ondemand"
      classNamePrefix="a-"
      isAtLiveEdgeContent="A"
      isNotAtLiveEdgeContent="B"
      label="C"
    />
  );
  expect(rendered.getElement()).toBe(null);
  const rendered2 = shallow(
    <GotoLiveButton playMode="live" classNamePrefix="a-" isAtLiveEdgeContent="A" isNotAtLiveEdgeContent="B" label="C" />
  );
  expect(rendered2.getElement()).toBe(null);
});

test('<GotoLiveButton/> renders button state when live correctly.', () => {
  const rendered = shallow(
    <GotoLiveButton
      classNamePrefix="a-"
      playMode="livedvr"
      isAtLiveEdge={true}
      isAtLiveEdgeContent="A"
      isNotAtLiveEdgeContent="B"
    />
  );
  const renderedToggleButton = rendered.dive();
  expect(rendered.props().isOn).toBe(true);
  expect(renderedToggleButton.text()).toBe('A');
});

test('<GotoLiveButton/> invokes the setProperties({ isAtLiveEdge: true }) callback when clicked, and not at live position.', () => {
  const setPropertiesCallback = jest.fn();
  const rendered = shallow(
    <GotoLiveButton setProperties={setPropertiesCallback} playMode="livedvr" isAtLiveEdge={false} />
  );
  expect(rendered.props().isOn).toBe(false);
  const renderedToggleButton = rendered.dive();
  expect(renderedToggleButton.simulate('click'));
  expect(setPropertiesCallback.mock.calls.length).toBe(1);
  expect(setPropertiesCallback.mock.calls[0][0]).toEqual({ isAtLiveEdge: true });
});

test('<GotoLiveButton/> does not invoke the setProperties({ isAtLiveEdge: true }) callback when clicked, if already at live position.', () => {
  const setPropertiesCallback = jest.fn();
  const rendered = shallow(
    <GotoLiveButton setProperties={setPropertiesCallback} playMode="livedvr" isAtLiveEdge={true} />
  );
  expect(rendered.props().isOn).toBe(true);
  const renderedToggleButton = rendered.dive();
  expect(renderedToggleButton.simulate('click'));
  expect(setPropertiesCallback.mock.calls.length).toBe(0);
});
