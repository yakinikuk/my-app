import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  test('正しくレンダリングされる', () => {
    render(<HomePage />);

    // メインタイトルが表示されることを確認
    expect(screen.getByText('ToDoアプリへようこそ')).toBeInTheDocument();

    // 説明文が表示されることを確認
    expect(
      screen.getByText('シンプルで効率的なタスク管理で、あなたの生産性を向上させましょう'),
    ).toBeInTheDocument();
  });

  test('ページが適切な構造を持っている', () => {
    render(<HomePage />);

    // h1要素が存在することを確認
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
