import * as React from 'react'
import root from 'react-shadow';
import styles from './styles.scss';


type HelloProps = {
  name: string;
}



const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return (
    <root.div className="make-big">
      HelloComponentShadow: "Hello {name}"
      <style type="text/css">{styles}</style>
    </root.div>
  );
};

export default HelloComponent;
