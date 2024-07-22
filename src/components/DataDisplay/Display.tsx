import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/api";
import { User } from "../../services/User";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

const DataDisplay: React.FC = () => {
  const { data, error, isLoading } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data available</div>;

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={user.avatar}
              alt={user.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Occupation: {user.occupation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created At: {new Date(user.createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DataDisplay;
