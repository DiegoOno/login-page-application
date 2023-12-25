import { Button } from "@mui/material"

interface HeaderProps {
  logout: () => void
}
const Header = ({ logout }: HeaderProps) => {
  return (
    <header className="flex w-screen justify-end p-4 bg-[#36545e]">
      <Button variant="contained" className="bg-[#2C5364]" onClick={logout}>
        Logout
      </Button>
    </header>
  )
}

export default Header
