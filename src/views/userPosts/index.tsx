import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography,
} from "@mui/material";
import Container from "@mui/material/Container";

import { useParams } from 'react-router-dom';

import { userApi } from "../../utils/API";
import { UserPost, User } from "../../types";
import { RootState } from "../../store";

const UserPosts = () => {

    const [userPosts, setUserPosts] = useState<UserPost[]>([]);

    // Get the userId and extract the user's name from the store
    // The user for the given ID will always be available if the ID is valid
    const { userId } = useParams();
    const name = useSelector((state: RootState) => state.users.usersList).filter((user: User) => (
        user.id === Number(userId)
    ))[0].name;

    // BUG: API called twice
    const getUserPosts = useCallback(async () => {
        const posts: UserPost[] = await userApi.getUserPosts(Number(userId));
        setUserPosts(posts)
    }, [userId])

    useEffect(() => {
        getUserPosts();
    }, [getUserPosts, userId]);


    return (
        <Container>
            <h2>{`${name}'s Posts: `}</h2>
            <br />
            <TableContainer component={Paper} sx={{ padding: 5, width: "70vw" }}>
                <Table aria-label="user details">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Title
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Body
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userPosts.map((post: UserPost) => (
                            <TableRow
                                key={post.id}
                                sx={{ "&:hover": { backgroundColor: "lightgray" } }}
                            >
                                <TableCell> {post.title} </TableCell>
                                <TableCell> {post.body} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default UserPosts;
