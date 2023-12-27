import { Button } from '@mui/base'


interface HeaderProps {
  logout: () => void
}
const Header = ({ logout }: HeaderProps) => {
  return (
    <header className='flex w-screen justify-end p-4'>
      <Button 
        className='w-1/5 self-end h-10 rounded-lg items-center cursor-pointer bg-[#2C5364] hover:bg-[#2C5364]/80 border-0'
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  )
}

export default Header
