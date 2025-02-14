import { Box, Grid2, IconButton, Paper, Typography } from "@mui/material";
import { Item } from "../../app/models/basket";
import { Add, Close, Remove } from "@mui/icons-material";

export default function CartItem({ item }: { item: Item }) {
  return (
    <Paper
      sx={{
        height: 140,
        borderRadius: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src={item.url}
          alt={item.name}
          sx={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: "4px",
            marginRight: 8,
            mr: 8,
            ml: 4,
          }}
        />
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6">{item.name}</Typography>

          <Box display="flex" alignItems="center" gap={3}>
            <Typography sx={{ fontSize: "1.1rem" }}>
              ${(item.price / 100).toFixed(2)} x {item.quantity}
            </Typography>

            <Typography sx={{ fontSize: "1.1rem" }} color="primary">
              ${((item.price / 100) * item.quantity).toFixed(2)}
            </Typography>
          </Box>

          <Grid2 container spacing={1} alignItems="center">
            <IconButton
              color="error"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Remove />
            </IconButton>
            <IconButton
              color="primary"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Add />
            </IconButton>
          </Grid2>
        </Box>
      </Box>

      <IconButton
        color="error"
        size="small"
        sx={{
          border: 1,
          borderRadius: 1,
          minWidth: 0,
          alignSelf: "start",
          mr: 1,
          mt: 1,
        }}
      >
        <Close />
      </IconButton>
    </Paper>
  );
}
