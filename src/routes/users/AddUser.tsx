import AddUser from '@/pages/users/AddUser';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/users/AddUser')({
  component: AddUser
});