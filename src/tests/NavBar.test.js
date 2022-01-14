import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Should load the NavBaru', () => {
  test('Snapshot matched', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
