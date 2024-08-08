import theme from "./Theme";

export const modalStyle = {
  position: 'absolute',
  p: 3,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
	width: '35%',
	minWidth: '420px',
  bgcolor: theme.palette.common.white,
  boxShadow: 24,
	display: 'flex',
	flexDirection: 'column',
	borderRadius: 2,
	gap: 4
};