import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';

function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 items-start">
      <div>Home</div>
      <Menu>
        <Menu.Button className="border border-black">Pages</Menu.Button>
        <Menu.Items className="bg-red-200">
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames('capitalize cursor-pointer', {
                  'text-white': active
                })}
                onClick={() => router.push('/calculator')}>
                calculator
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames('capitalize cursor-pointer', {
                  'text-white': active
                })}
                onClick={() => router.push('/restaurants')}>
                restaurants
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default Home;
