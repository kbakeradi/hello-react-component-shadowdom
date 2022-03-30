import * as React from 'react'
import root from "react-shadow/styled-components";
import styles from './styles.scss';


type HelloProps = {
  name: string;
}



const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return (
    <root.div>
      <div className="make-big">
        HelloComponentShadow: "Hello {name}"
      </div>
      <style type="text/css">{styles}</style>

    </root.div>
  );
};

export default HelloComponent;
