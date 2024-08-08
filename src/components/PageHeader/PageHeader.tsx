import { Box } from "@mui/material"
import './style.scss'

type PageHeaderProps = {
  children: React.ReactNode
}

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between' }} >
      {children}
    </Box>
  )
}

export default PageHeader