const saludar = (name) => {
  name.trim();

  if (name) {
    console.log(`Hola, saludos ${name}`);
  } else {
    //Lanzar el alert de saludo si hay algún error.
    alert("Error: no hay nombre.");
  }
};

saludar("Gricel");
