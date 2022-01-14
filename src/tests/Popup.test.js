import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SingleCoin from '../components/SingleCoin';
import mockAPI from './__mock__/mockAPI';

describe('Should load popup od singleCoin', () => {
  const {
    id, symbol, name, priceUsd, changePercent24Hr, supply, volumeUsd24Hr, marketCapUsd,
  } = mockAPI[0];
  test('Snapshot matched', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <SingleCoin
          key={id}
          id={id}
          symbol={symbol}
          name={name}
          priceUsd={priceUsd}
          supply={supply}
          changePercent24Hr={changePercent24Hr}
          marketCapUsd={marketCapUsd}
          volumeUsd24Hr={volumeUsd24Hr}
          onHide={() => 'OnHide'}
        />
      </MemoryRouter>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
