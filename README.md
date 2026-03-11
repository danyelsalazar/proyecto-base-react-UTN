# Chat UTN – Aplicación de Mensajería con React

## Descripción del proyecto

Chat UTN es una aplicación web de mensajería desarrollada con **React** como trabajo práctico final del módulo de **Desarrollo Web Frontend**.

La aplicación simula el funcionamiento básico de plataformas de chat modernas, permitiendo visualizar contactos, abrir conversaciones y enviar mensajes dentro de una interfaz interactiva.

El objetivo del proyecto fue aplicar conceptos fundamentales del desarrollo frontend como la **creación de componentes, manejo de estado global, navegación entre rutas y validación de formularios**.

---

# Funcionalidades principales

* Registro de nuevos usuarios con validación de datos.
* Inicio de sesión de usuarios.
* Visualización de lista de contactos.
* Búsqueda de contactos por nombre o apellido.
* Apertura de conversaciones mediante rutas dinámicas.
* Envío de mensajes dentro del chat.
* Scroll automático al último mensaje.
* Visualización del perfil del usuario mediante un modal.
* Panel de ajustes para modificar nombre y foto de perfil.
* Persistencia de sesión utilizando **LocalStorage**.
* Diseño **responsive**, adaptado para escritorio y dispositivos móviles.

---

# Tecnologías utilizadas

* React
* React Router DOM
* Context API
* JavaScript (ES6+)
* HTML5
* CSS3
* LocalStorage

---

# Arquitectura del proyecto

La aplicación está organizada utilizando **componentes reutilizables** y un **Context global** para compartir información entre ellos.

## Componentes principales

* **Aside**
  Muestra la lista de contactos disponibles y permite buscar usuarios.

* **Chat**
  Muestra la conversación del contacto seleccionado y permite enviar mensajes.

* **Login**
  Formulario de inicio de sesión.

* **Register**
  Formulario de registro con validaciones de datos.

* **RouteProtected**
  Protege las rutas de la aplicación evitando el acceso si el usuario no está autenticado.

* **Settings / Profile Modal**
  Permiten visualizar y modificar información del perfil del usuario.

---

# Decisiones de desarrollo

Durante el desarrollo se tomaron algunas decisiones importantes:

* Se utilizó **Context API** para gestionar el estado global de usuarios, mensajes y sesión activa.
* Se implementaron **rutas dinámicas con React Router** para representar cada conversación mediante una URL única.
* Se utilizó **LocalStorage** para mantener la sesión del usuario incluso después de recargar la página.
* El diseño se desarrolló siguiendo un enfoque **minimalista y responsive**, inspirado en aplicaciones de mensajería actuales.

---

# Instalación y ejecución

1. Clonar el repositorio

```
git clone git@github.com:danyelsalazar/proyecto-base-react-UTN.git
```

2. Entrar en la carpeta del proyecto

```
cd proyecto-base-react-UTN
```

3. Instalar dependencias

```
npm install
```

4. Ejecutar la aplicación

```
npm run dev
```

La aplicación se abrirá en:

```
http://localhost:5173
```

---

# Observaciones personales

Este proyecto permitió aplicar de forma práctica los conceptos aprendidos durante la cursada, especialmente el manejo de **estado global con Context**, la creación de **componentes reutilizables** y la implementación de **rutas dinámicas con React Router**.

---

# Posibles mejoras futuras

* Integrar un backend para persistir usuarios y mensajes.
* Implementar autenticación real con tokens.
* Agregar notificaciones de mensajes nuevos.
* Soporte para envío de imágenes o archivos.
* Indicadores de usuario en línea.

---

# Autor

Desarrollado por **Danyel Salazar**
Diplomatura en Desarrollo Web (Frontend) UTN
