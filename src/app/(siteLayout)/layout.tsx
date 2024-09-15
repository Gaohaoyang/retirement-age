import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react'

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {/* <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>a</NavbarItem>
          <NavbarItem isActive>a</NavbarItem>
          <NavbarItem>a</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">a</NavbarItem>
          <NavbarItem>a</NavbarItem>
        </NavbarContent>
      </Navbar> */}
      <Button>button</Button>
      <div className="container mx-auto">{children}</div>
    </>
  )
}

export default layout
