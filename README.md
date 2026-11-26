# Backend simple - Práctica Infraestructura y Cómputo en la Nube

Backend mínimo con Express y dos endpoints, pensado para correr dentro de la VM de Multipass en el puerto 3000.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

El servidor queda escuchando en `http://0.0.0.0:3000`, accesible desde fuera de la VM usando su IP (ej. `http://IP_DE_TU_VM:3000`).

## Endpoints

### 1. GET `/`
Devuelve un mensaje de bienvenida y la hora del servidor.

**Ejemplo de respuesta:**
```json
{
  "mensaje": "Backend de prueba corriendo correctamente",
  "curso": "Infraestructura y Cómputo en la Nube",
  "hora_servidor": "2026-09-15T18:32:10.123Z"
}
```

### 2. GET `/api/saludo/:nombre`
Recibe un nombre por la URL y devuelve un saludo personalizado.

**Ejemplo:** `GET /api/saludo/Fabricio`

**Ejemplo de respuesta:**
```json
{
  "mensaje": "Hola, Fabricio! Bienvenido a la práctica de Node.js."
}
```

## Nota de firewall

Si vas a probar este backend desde Postman fuera de la VM, recuerda abrir el puerto en el firewall:

```bash
sudo ufw allow 3000
```

## Despliegue en AWS

El workflow de GitHub Actions se autentica con AWS mediante OIDC. Configura el secreto `AWS_ROLE_ARN` con el ARN del rol de despliegue. El rol debe confiar en el proveedor OIDC `token.actions.githubusercontent.com` con audiencia `sts.amazonaws.com` y el asunto `repo:sebasvc2002/cloud-final-back:ref:refs/heads/main`. Dale permiso `ecr:GetAuthorizationToken` y, para el repositorio `cloud-final-back`, `ecr:BatchCheckLayerAvailability`, `ecr:CompleteLayerUpload`, `ecr:InitiateLayerUpload`, `ecr:PutImage` y `ecr:UploadLayerPart`.
