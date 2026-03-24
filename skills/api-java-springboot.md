# Data Connectivity and REST API Skills

- API calls must be isolated in a `src/services/` directory.
- The backend is built using Java Spring Boot. Ensure you properly handle JSON responses and potential CORS errors.
- Use Custom Hooks (e.g., `useFetchMinistries`) to handle loading (`loading`), error (`error`), and retrieved data states, keeping UI components clean.
- Backend base URLs must always be retrieved from environment variables (e.g., `import.meta.env.VITE_API_URL`). Never hardcode endpoints in services.