import { TerminalWindow } from '../TerminalWindow';

export default function TerminalWindowExample() {
  return (
    <TerminalWindow title="macmoment@dev:~$">
      <p className="font-mono text-sm">Hello, World!</p>
    </TerminalWindow>
  );
}
