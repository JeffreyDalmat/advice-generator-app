import './divider.scss';
import dividerMobile from 'src/assets/images/pattern-divider-mobile.svg';
import dividerDesktop from 'src/assets/images/pattern-divider-desktop.svg';

export default function Divider() {
  return (

    <>
      <img className="divider-mobile" src={dividerMobile} alt="" />
      <img className="divider-desktop" src={dividerDesktop} alt="" />
    </>

  );
}
