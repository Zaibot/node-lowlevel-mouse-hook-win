export type MoveCallback = (trigger: 'move', position: string) => void;
export type UpDownCallback = (trigger: 'up' | 'down') => void;
export function on(modes: string, callback: MoveCallback | UpDownCallback): void;
export function stop(): void;
