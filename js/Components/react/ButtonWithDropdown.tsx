import React, {FC} from 'react';
import {Menu} from '@headlessui/react';

interface ButtonWithDropdownPropsI
  extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonWithDropdown: FC<ButtonWithDropdownPropsI> = ({children}) => {
  return (
    <Menu>
      <Menu.Button className="w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        More
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({active}) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active}) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ButtonWithDropdown;
