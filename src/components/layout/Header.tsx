import { Button } from "@mui/material"

interface HeaderProps {
  logout: () => void
}
const Header = ({ logout }: HeaderProps) => {
  return (
    <header className='flex w-screen justify-end p-4 bg-[#36545e]'>
      <Button 
        variant='contained' 
        style={{ 
          backgroundColor: "rgba(44, 83, 100, 1)" 
        }} 
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  )
}

export default Header
