import { Button, Dialog, Grid, TextField, Typography } from "@mui/material";

function AddProductDialog({ openDialog, setOpenDialog, setProducts }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name: event.target.name.value,
      description: event.target.description.value,
      image: event.target.image.value,
      price: event.target.price.value,
    };

    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 },
    ]);

    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={() => {
        setOpenDialog(false);
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} padding={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Agregar Producto</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nombre del producto"
              name="name"
              id="name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Descripción"
              name="description"
              id="description"
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Precio"
              type="number"
              name="price"
              id="price"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="URL de la imagen"
              name="image"
              id="image"
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Agregar Producto
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
}

export default AddProductDialog;
