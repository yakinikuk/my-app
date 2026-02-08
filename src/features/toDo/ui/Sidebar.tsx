import React, { useState } from 'react';
import { BoardIcon, ListIcon } from '../../../shared/ui/icon';
import { TODO_MESSAGES } from '../messages';
import { SidebarGroupItem } from './SidebarGroupItem';

type ActiveView = 'list' | 'board';

type NavItem = {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

type GroupItem = {
  label: string;
  dotClassName: string;
  isActive?: boolean;
};

export const ToDoSidebar = ({ activeView = 'list' }: { activeView?: ActiveView }) => {
  const [groupItems, setGroupItems] = useState<GroupItem[]>([
    { label: 'すべて', dotClassName: 'bg-gray-400', isActive: true },
    { label: '仕事', dotClassName: 'bg-blue-500' },
    { label: 'プライベート', dotClassName: 'bg-purple-500' },
    { label: '買い物', dotClassName: 'bg-green-500' },
    { label: '健康', dotClassName: 'bg-pink-500' },
    { label: 'その他', dotClassName: 'bg-gray-400' },
  ]);

  const navItems: NavItem[] = [
    {
      label: TODO_MESSAGES.nav.listView,
      icon: <ListIcon className="text-blue-600" />,
      isActive: activeView === 'list',
    },
    {
      label: TODO_MESSAGES.nav.boardView,
      icon: <BoardIcon className="text-gray-500" />,
      isActive: activeView === 'board',
    },
  ];

  const handleDeleteGroup = (label: string) => {
    setGroupItems((prev) => prev.filter((group) => group.label !== label));
  };

  return (
    <aside className="w-80 h-screen bg-white border-r border-gray-100 px-6 py-6 overflow-y-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-semibold text-xl">
          T
        </div>
        <div className="text-2xl font-bold text-gray-900">TaskFlow</div>
      </div>

      <nav aria-label="画面切り替え" className="space-y-2 mb-10">
        {navItems.map((item) => (
          <div
            key={item.label}
            aria-current={item.isActive ? 'page' : undefined}
            className={
              item.isActive
                ? 'flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50 text-blue-700 font-semibold'
                : 'flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 font-semibold'
            }
          >
            <div className="shrink-0">{item.icon}</div>
            <div className="text-lg">{item.label}</div>
          </div>
        ))}
      </nav>

      <div className="text-sm font-semibold text-gray-400 mb-3">{TODO_MESSAGES.nav.groups}</div>
      <div className="space-y-2" aria-label="グループ一覧">
        {groupItems.map((group) => (
          <SidebarGroupItem
            key={group.label}
            label={group.label}
            dotClassName={group.dotClassName}
            isActive={group.isActive}
            onDelete={handleDeleteGroup}
            isDeleteable={group.label !== 'すべて'}
          />
        ))}
      </div>
    </aside>
  );
};
