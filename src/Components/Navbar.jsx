'use client';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import { use } from 'react';

import { toast } from 'react-toastify';
import { AuthContext } from '@/app/Auth/AuthContext';


export default function Navbar() {
  const { user, handleLogut } = use(AuthContext);
  const pathname = usePathname();
const router = useRouter();
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Courses', href: '/Courses' },
    { name: 'Categories', href: '/Categories' },
  ];
  const handleLogout = () => {
    handleLogut()
      .then(() => {
        toast.success('Logout Successfully')
         router.push('/'); 
      })
    .catch(err=>toast.error(err.message))
   }

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'bg-blue-500 text-white rounded'
                      : ''
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'bg-blue-500 text-white rounded px-2 py-1'
                    : ''
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex grow justify-end px-2">
            <div className="flex items-stretch">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <img
                    src={
                      user?.photoURL ||
                      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
                    }
                    alt=""
                    className="w-14 h-14 rounded-full border-2 border-primary"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                >
                  <div className="text-center border-b-2 border-secondary pb-2">
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                  </div>
                  <li>
                   <Link href='/AddCourse'>Add Course</Link>
                  </li>
                  <li>
                   <Link href='/ManageCourse'>Manage Course</Link>
                  </li>
                  <li>
                    {' '}
                    <button
                      className="btn btn-secondary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link
            href="/Login"
            className="btn bg-blue-500 text-white hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
