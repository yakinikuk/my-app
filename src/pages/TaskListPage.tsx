import { ToDoSidebar, ToDoTaskListView } from '../features/toDo/ui';

export const TaskListPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ToDoSidebar activeView="list" />
      <div className="flex-1 min-w-0">
        <ToDoTaskListView />
      </div>
    </div>
  );
};
