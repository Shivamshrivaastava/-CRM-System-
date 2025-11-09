# Next-Gen CRM Frontend — Role-Guard + Dark Mode (React + Vite + Tailwind + Redux + Socket.IO)

## Quick start
```bash
npm install
cp .env.example .env
npm run dev
```
Set:
```
VITE_API_BASE_URL="http://localhost:8080/api/v1"
VITE_SOCKET_URL="http://localhost:8080"
```

## Highlights
- Role-based guards (Admin/Manager/Sales)
- Conditional sidebar visibility per role
- Dark mode toggle (persisted)
- Realtime toasts for Socket.IO events
- Leads, Lead Detail, Users, Analytics pages
- Clean Tailwind UI

## Role Access (mirrors backend)
| Feature | Admin | Manager | Sales |
|--------|-------|---------|-------|
| Dashboard | ✅ | ✅ | ✅ |
| Leads | ✅ | ✅ | ✅ |
| Assign Lead | ✅ | ✅ | ❌ |
| Update Status | ✅ | ✅ | ✅ |
| Users | ✅ | ✅ | ❌ |
| Analytics | ✅ | ✅ | ❌ |
