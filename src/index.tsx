import * as React from 'react'
import './styles.scss'

type HelloProps = {
  name: string;
}



const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return <div className='make-big'>HelloComponent: "Hello {name}"</div>
};

export default HelloComponent;
