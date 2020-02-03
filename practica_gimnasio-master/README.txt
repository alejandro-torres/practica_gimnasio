para clonar:
    git clone https://tuUsuario:contrasena@github.com/nombreDelUsuario/nombreDelRepositorio
    git clone https://github.com/nombreDelUsuario/nombreDelRepositorio
 

para actualizar:
    git pull 
    (En el directorio)

para subir:
    1. Añadir las cosas 
        git add aquilacosaparasubir(es decir la ruta)
            ejemplo:
                git add .
    2. Añadir commit
        git commit -m "aquivaelcomit"
    3. Subir el archivo
        git push origin master


configurar git:
    git config --global user.name "aqui el nombre"
    git config --global user.email "qui el email"
    git config --global -l         <== este para verel nombre y el email
