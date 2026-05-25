# DevTree

Aplicación desarrollada en TypeScript enfocada en la gestión y visualización estructurada de proyectos y dependencias.

---

## 📌 Descripción

DevTree es un proyecto construido con TypeScript que busca ofrecer una estructura limpia y escalable para trabajar con árboles de datos, organización de módulos y manejo eficiente de componentes dentro de una aplicación moderna.

Actualmente el repositorio contiene una arquitectura inicial basada en:

- TypeScript
- Configuración modular
- Estructura preparada para escalabilidad
- Gestión centralizada del código fuente dentro de `src/`

---

## 🚀 Tecnologías utilizadas

- **TypeScript**
- **Node.js**
- **npm**

---

## 📂 Estructura del proyecto

```bash
DevTree/
│
├── src/                # Código fuente principal
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
└── .gitignore          # Archivos ignorados por Git
```

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/AuraLRestrepo/DevTree.git
```

Ingresa al proyecto:

```bash
cd DevTree
```

Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución del proyecto

Modo desarrollo:

```bash
npm run dev
```

Compilar TypeScript:

```bash
npm run build
```

Ejecutar versión compilada:

```bash
npm start
```

---

## 🛠️ Scripts sugeridos para package.json

Si aún no están configurados, puedes agregar:

```json
"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

## 📈 Posibles mejoras futuras

- Implementar visualización gráfica de árboles
- Añadir pruebas unitarias
- Integrar ESLint y Prettier
- Agregar documentación automática
- Implementar CI/CD con GitHub Actions
- Soporte para API REST

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas.

1. Haz un fork del proyecto

2. Crea una rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Realiza tus cambios y haz commit:

```bash
git commit -m "feat: nueva funcionalidad"
```

4. Sube tus cambios:

```bash
git push origin feature/nueva-funcionalidad
```

5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👨‍💻 Autor

Desarrollado por AuraLRestrepo.
