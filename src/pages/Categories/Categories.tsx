import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material"
import PageHeader from "../../components/PageHeader/PageHeader"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Data } from "./DataTypes";
import { get, remove } from "../../services/httpServices";
import { ApiResponse } from "../../services/ApiResponse";
import theme from "../../Utils/Theme";
import { Plus } from "lucide-react";
import AddCategory from "../../components/AddCategory/AddCategory";

import './style.scss'

const Categories = () => {
	const [rows, setRows] = useState<Data[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [addCategoryModal, setAddCategoryModal] = useState<boolean>(false);
	const [newCategory, setNewCategory] = useState({ english: '', arabic: '' })
	const [errors, setErrors] = useState({ english: '', arabic: '' });

	const OpenAddModal = () => setAddCategoryModal(true);

	const CloseAddModal = () => {
		setAddCategoryModal(false)
	};

	const getCategories = async () => {
		setLoading(true)
		const response = await get<ApiResponse>('randomusers?page=1&limit=50');
		if (response.error) {
			console.error('Error fetching users:', response.error);
		} else {
			setRows(response.data.data.data);
		}
		setLoading(false);
	};

	const handleDelete = async (id: number) => {
		const response = await remove('randomusers', id.toString());
		if (response.error) {
			console.error('Error deleting user:', response.error);
		} else {
			getCategories();
		}
	};

	const columns: GridColDef[] = [
		{ field: ' ', headerName: '', sortable: false, headerClassName: 'header', },
		{ field: 'name', headerName: 'Name', flex: 1, headerClassName: 'header', valueGetter: (params: { first: string }) => params.first },
		{ field: 'dob', headerName: 'Items', headerClassName: 'header', valueGetter: (params: { age: number }) => params.age, align: 'center', headerAlign: 'center', type: 'number', minWidth: 300 },
		{
			field: 'actions', headerName: 'Actions', minWidth: 200, align: 'right', headerAlign: 'right', sortable: false, headerClassName: 'header',
			renderCell: (params: GridRenderCellParams) => (
				<Box>
					<Button size="small" variant="outlined" onClick={() => console.log(params.row.id)}
						style={{ color: theme.palette.warning.main, borderColor: theme.palette.warning.main, boxShadow: 'none', marginLeft: '1rem' }}>
						Edit
					</Button>
					<Button size="small" variant="outlined" onClick={() => handleDelete(params.row.id)}
						style={{ color: theme.palette.error.main, borderColor: theme.palette.error.main, boxShadow: 'none', marginLeft: '1rem' }}>
						Delete
					</Button>
				</Box>
			),
		},
	];

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<Box>
			<AddCategory
				open={addCategoryModal}
				closeModal={CloseAddModal}
				newCategory={newCategory}
				setNewCategory={setNewCategory}
				errors={errors}
				setErrors={setErrors}
			/>
			<Box className='categories-page' >
				<PageHeader>
					<Typography variant="h2">Categories (16)</Typography>
					<Button size="large" variant="contained" color="primary" onClick={OpenAddModal}>
						<Plus size={18} />
						<span className="add">Add Category</span>
					</Button>
				</PageHeader>

				<DataGrid
					className='data-grid'
					sx={{ '& .MuiDataGrid-columnSeparator': { display: 'none' } }}
					rows={rows}
					columns={columns}
					loading={loading}
					autoHeight
					initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
					pageSizeOptions={[5, 10, 25]}
					disableRowSelectionOnClick
					disableColumnMenu
					disableColumnResize
				/>
			</Box>
		</Box>
	)
}

export default Categories