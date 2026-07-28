import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.5rem 0' }}>
			<button type="button" onClick={() => setCount((value) => value + 1)}>
				클릭 횟수: {count}
			</button>
			<span>React 컴포넌트가 정상적으로 동작합니다.</span>
		</div>
	);
}
