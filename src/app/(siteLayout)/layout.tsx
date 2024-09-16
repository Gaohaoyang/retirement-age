'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <Navbar maxWidth="2xl">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" className="font-semibold" href="/">
            Retirement Age Calculator
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          {mounted && (
            <NavbarItem>
              <Switch
                // size={md ? 'lg' : 'sm'}
                classNames={{
                  wrapper: 'bg-slate-900',
                }}
                isSelected={theme !== 'dark'}
                startContent={<MdLightMode />}
                endContent={<MdDarkMode />}
                onValueChange={(isSelected) => {
                  setTheme(isSelected ? 'light' : 'dark')
                }}
              ></Switch>
            </NavbarItem>
          )}
          <NavbarItem className="hidden sm:block">
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="/" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="/about" size="lg">
              About
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default layout
