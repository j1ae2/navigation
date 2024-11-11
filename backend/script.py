import bcrypt
import json

# Configuración
num_users = 50  # Número de usuarios a generar
output_file = 'users.json'
salt = bcrypt.gensalt(rounds=10)

# Generar usuarios con contraseñas hasheadas
users = []
for i in range(1, num_users + 1):
    username = f"user{i}@gmail.com"
    password = f"test{i}"
    # Hashear la contraseña con el salt predefinido
    password_hash = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
    users.append({
        "username": username,
        "passwordHash": password_hash
    })

# Guardar en un archivo JSON
with open(output_file, 'w') as file:
    file.write(json.dumps(users))