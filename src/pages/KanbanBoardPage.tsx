import { ToDoKanbanBoardView, ToDoSidebar } from '../features/toDo/ui';

export const KanbanBoardPage = () => {
  return (
    <div className="h-screen bg-gray-50 flex">
      <ToDoSidebar activeView="board" />
      <div className="flex-1 min-w-0 overflow-y-auto h-screen">
        <ToDoKanbanBoardView />
      </div>
    </div>
  );
};
