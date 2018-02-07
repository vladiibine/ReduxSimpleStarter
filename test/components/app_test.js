import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// atm, this can't work, because we deleted the app.
// Still, leaving this here, cuz just look at how good of
// an example this thing is! :)

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
