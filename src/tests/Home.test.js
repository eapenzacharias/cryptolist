import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Should load the Homepage with menu', () => {
  test('Snapshot matched', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
