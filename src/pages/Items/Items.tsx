import { Plus } from "lucide-react"
import PageHeader from "../../components/PageHeader"
import { Box, Button, Typography } from "@mui/material"

const Items = () => {
  return (
    <Box className='items-page'>
      <PageHeader>
        <Typography variant="h2">Items (16)</Typography>
        <Button size="large" variant="contained" color="primary" onClick={() => console.log("first")}>
          <Plus size={18} />
          <span className="add">Add Item</span>
        </Button>
      </PageHeader>
    </Box>
  )
}

export default Items