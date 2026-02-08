export const TODO_MESSAGES = {
  // ナビゲーション
  nav: {
    listView: 'リスト表示',
    boardView: 'ボード表示',
    groups: 'グループ',
  },

  // 画面タイトル
  screen: {
    taskList: 'タスク一覧',
    kanbanBoard: 'かんばんボード',
    taskEdit: 'タスク編集',
  },

  // 検索・フィルター
  search: {
    placeholder: 'タスクを検索...',
    notificationTooltip: '通知',
  },

  // ボタン
  button: {
    create: '新規作成',
    add: 'タスクを追加',
    save: '保存',
    cancel: 'キャンセル',
    edit: '編集',
    delete: '削除',
  },

  // フォームラベル
  form: {
    title: 'タイトル',
    description: '詳細説明',
    status: 'ステータス',
    group: 'グループ',
    deadline: '締め切り日時',
    learned: '学んだこと',
  },

  // ステータス選択肢
  status: {
    notStarted: '未着手',
    inProgress: '進行中',
    completed: '完了',
    archived: '保存',
  },

  // グループ選択肢
  group: {
    none: 'グループなし',
    work: '仕事',
    private: 'プライベート',
    shopping: '買い物',
    health: '健康',
    other: 'その他',
  },

  // メッセージ・説明文
  message: {
    taskCountsFound: '個のタスクが見つかりました',
    titleRequired: 'タイトルは必須です',
    learnedPlaceholder: 'このタスクを下過ごせて学んだことを記録しましょう。',
  },

  // バリデーション
  validation: {
    titleRequired: 'タイトルは必須です',
    titleMaxLength: '最大100文字です',
    emptyNotAllowed: '空白のみは入力できません',
  },
} as const;
