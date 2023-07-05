import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';


const CourseFilter = ({title, options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Dropdown show={isOpen} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option)=> (
        <Dropdown.Item key={option} onSelect={() => handleSelect(option)}>
            {option}
        </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CourseFilter;
