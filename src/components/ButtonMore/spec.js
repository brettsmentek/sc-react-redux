import { ButtonMore } from './index';
import { shallow } from 'enzyme';

describe('ButtonMore', () => {

  let props;

  beforeEach(() => {
    props = {
      nextHref: '/foo',
      onClick: () => {},
      requestInProcess: false,
      isHidden: false
    };
  });

  it('renders', () => {
    const element = shallow(<ButtonMore { ...props } />);
    expect(element.find('ButtonGhost')).to.have.length(1);
  });

  it('does not render, when it is set to hidden', () => {
    props.isHidden = true;
    const element = shallow(<ButtonMore { ...props } />);
    expect(element.find('ButtonGhost')).to.have.length(0);
  });

  it('does not render, when there is no next link', () => {
    props.nextHref = null;
    const element = shallow(<ButtonMore { ...props } />);
    expect(element.find('ButtonGhost')).to.have.length(0);
  });

  it('renders a loading spinner instead, when request is in process', () => {
    props.requestInProcess = true;
    const element = shallow(<ButtonMore { ...props } />);
    expect(element.find('LoadingSpinner')).to.have.length(1);
    expect(element.find('ButtonGhost')).to.have.length(0);
  });

});