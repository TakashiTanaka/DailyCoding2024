// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
  link: string;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({link,text}) => {
  return <li className='hover:underline'><Link to={link}>{text}</Link></li>;
}

const Home: React.FC = () => {
  return (
    <div>
      <h1 className='text-9xl'>DailyCoding2024</h1>
      <nav className='mt-4'>
        <ul className='text-7xl grid gap-2'>
          <li>
            <h2 className='text-9xl'>08</h2>
            <ul className='flex gap-4'>
              <ListItem link='/work1' text='21'/>
              <ListItem link='/work1' text='22'/>
              <ListItem link='/work1' text='23'/>
              <ListItem link='/work1' text='24'/>
              <ListItem link='/work1' text='25'/>
              <ListItem link='/work1' text='26'/>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
