import { render } from '@testing-library/react';

import PabauFeatureGameDetail from './pabau-feature-game-detail';

describe('PabauFeatureGameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PabauFeatureGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
