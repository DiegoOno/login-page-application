import { Button } from "@mui/material"

interface HeaderProps {
  logout: () => void
}
const Header = ({ logout }: HeaderProps) => {
  return (
    <header className='flex w-screen justify-end p-4'>
      <Button 
        variant='contained' 
        className='self-end items-center cursor-pointer bg-[#2C5364] hover:bg-[#2C5364]/80'
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  )
}

export default Header
