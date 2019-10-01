import React from 'react';
import renderer from 'react-test-renderer';
import User from './User';

it('renders  correctly', () => {
    const tree = renderer.create(
        <User name="veysel" age="32" />
    ).toJSON;

    expect(tree).toMatchSnapshot();
})