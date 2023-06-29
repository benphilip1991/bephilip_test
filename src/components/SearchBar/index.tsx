import { TextField, Stack } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedFilterQuery } from "../../store/reducers/users";
import { RootState } from "../../store";

/**
 * Update the query string in the store
 * This value is then used to filter the displayed table
 * 
 * @returns 
 */
export const SearchBar = () => {

    const currentQuery = useSelector((state: RootState) => state.users.filterQuery)
    const dispatch = useDispatch();
    const handleQueryUpdate = (event: { target: { value: string; }; }) => {
        dispatch(setSelectedFilterQuery(event.target.value));
    }

    return (
        <Stack sx={{ width: 500, marginTop: 2 }}>
            <TextField id="outlined-basic" label="Search Name" variant="outlined" value={currentQuery} onChange={handleQueryUpdate} />
        </Stack>
    )
}