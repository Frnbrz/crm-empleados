# CRM Empleados

## Componentes

- **Home** (page)
- **Login** (page)
- **Dashboard** (page)
  - **FormEmpleado** (page)
  - **VistaEmpleado** (page)
  - **Nav** (componente): Se carga dentro de Dashboard.
  - **CardEmpleado** (componente): Se carga dentro de Dashboard.

## Rutas

Las rutas ayudan a identificar qué componentes son de tipo **PAGES**:

- `/home` => `HomeComponent`
- `/login` => `LoginComponent`
- `/dashboard` => `DashboardComponent`
  - `/dashboard/nuevo` => `FormEmpleado`
  - `/dashboard/update/:id` => `FormEmpleado`
  - `/dashboard/empleado/:id` => `VistaEmpleado`

## Servicios

- **Usuarios**
  - `login()`: Iniciar sesión en la aplicación.
- **Empleados**
  - `getAll()`: Obtener todos los empleados.
  - `getById(id)`: Obtener un empleado por su ID.
  - `insert(Empleado)`: Insertar un nuevo empleado.
  - `update(EmpleadoActualizado)`: Actualizar un empleado existente.
  - `delete(id)`: Eliminar un empleado por su ID.

## Interfaces

- **Usuario**
- **Empleado**

## Guard

- **AuthGuard**: Protege las rutas de la aplicación, asegurando que solo los usuarios autenticados puedan acceder a ellas.

## Empezamos

`ng new crm-empleados`
`cd crm-empleados`
`ng ng generate component pages/home --skip-tests`
`ng ng generate component pages/login --skip-tests`
`ng ng generate component pages/dashboard --skip-tests`
`ng ng generate component pages/FormEmployee --skip-tests`
`ng ng generate component pages/ViewEmployee --skip-tests`
`ng ng generate component components/NavBar --skip-tests`
`ng ng generate component components/CardEmployee --skip-tests`
`ng ng generate service services/users --skip-tests`
`ng ng generate service services/employees --skip-tests`
`ng ng generate interface interfaces/user --type=interface`
`ng ng generate interface interfaces/employee --type=interface`
`ng ng generate guard guards/auth`

## Ruta de API

### Base URL

`https://crm-empleados.onrender.com/api/`

### Endpoints

#### Empleados

- **GET** `/empleados`  
  Obtener todos los empleados.
- **GET** `/empleados/:id`  
  Obtener un empleado por su ID.
- **POST** `/empleados`  
  Insertar un nuevo empleado (requiere datos en el cuerpo de la solicitud).
- **PUT** `/empleados/:id`  
  Actualizar un empleado existente (requiere datos en el cuerpo de la solicitud).
- **DELETE** `/empleados/:id`  
  Eliminar un empleado por su ID.

#### Usuarios

- **POST** `/usuarios/login`  
  Iniciar sesión en la aplicación (requiere datos en el cuerpo de la solicitud).

#### Login Page

## La receta para crear formularios sin dolor

1. Importa la librería `ReactiveFormsModule` en el componente donde se usará el formulario.
2. Agrega un atributo `formGroup` a la etiqueta `<form>` que contendrá el nombre del formulario.
3. Implementa el evento `(ngSubmit)` en el formulario para llamar a una función que **no recibe parámetros**. Esta función generará un objeto JSON con los datos del formulario.
4. En cada campo del formulario (`<input>`, `<select>`, `<textarea>`, etc.), añade el atributo `formControlName` con el nombre del campo correspondiente.
5. Inicializa en el archivo `.ts` el objeto `FormGroup` creado en el paso 2. Es obligatorio registrar cada uno de los campos en este objeto, y aquí es donde se configuran los validadores necesarios.
