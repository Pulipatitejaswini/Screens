import ManageUser from '@/pages/users/ManageUser';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/ManageUser')({
  component: ManageUser
});