import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography
} from "@mui/material";

import { User } from "../../types";
import { RootState } from "../../store";

/**
 * Render a table of user details - user information is fetched from the store
 * 
 * @returns 
 */
export const UserTable = () => {

    const navigate = useNavigate();
    const currentQuery = useSelector((state: RootState) => state.users.filterQuery);
    const currentUsersList = useSelector((state: RootState) => state.users.usersList).filter((user: User) => (
        user.name.toLowerCase().includes(currentQuery.toLowerCase())
    ));

    /**
     * Set the selected user's ID and name in the store
     * This will enable launching a modal displaying the user posts
     * 
     * @param userId 
     * @param name
     */
    const handleRowClick = async (userId: number) => {
        await navigate(`/user/${userId}/userPost`);
    }

    return (
        <TableContainer component={Paper} sx={{ padding: 5, width: "70vw" }}>
            <Table aria-label="user details">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">City</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">Company</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        currentUsersList.map((user: User) => (
                            <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: "lightgray" } }}
                                onClick={() => handleRowClick(user.id)}>

                                <TableCell> {user.name} </TableCell>
                                <TableCell> {user.email} </TableCell>
                                <TableCell> {user.address.city} </TableCell>
                                <TableCell> {user.company.name} </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}