contrasena = "123"
while True:
    entrada = input("Ingrese la contraseña: ")
    if entrada == contrasena:
        print("acceso permitido")
        break
    else:
        print("Contraseña incorrecta")