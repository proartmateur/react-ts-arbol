import * as React from 'react';
import Tree from './Tree';
import './style.css';

const data = {
  name: 'root',
  isOpen: true,
  children: [
    {
      name: 'folder 1',
      isOpen: true,
      children: [
        { name: 'file 1.1' },
        {
          name: 'folder 1.1',
          isOpen: true,
          children: [
            { name: 'file 1.1.1' },
            { name: 'file 1.1.2' },
            {
              name: 'folder 1.1----',
              isOpen: true,
              children: [{ name: 'file 1.1.1' }, { name: 'file 1.1.2' }],
            },
          ],
        },
      ],
    },
    { name: 'file 2' },
    {
      name: 'folder 2',
      isOpen: true,
      children: [
        { name: 'file 2.1' },
        { name: 'file 2.2' },
        { name: 'file 2.3' },
      ],
    },
  ],
};

export default function App() {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
}
