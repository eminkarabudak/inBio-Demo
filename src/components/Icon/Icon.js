import React from 'react';
import classNames from "classnames";

const Icon = ({ icon, className, onClick }) => {
  return <i onClick={() => { onClick() }} className={classNames('icon', 'icon-' + icon, className)}></i>
}

export default Icon;
