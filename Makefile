# команда полезна при клонировании первого репозитория, (или после удаления node_modules).
install:
	npm ci

# команда запустит игру
brain-games:
	node bin/brain-games.js

# команда запустит игру с числами
brain-even:
		node bin/brain-even.js

# команда запустит игру 'калькулятор'
brain-calc:
		node bin/brain-calc.js

# команда имитирует процесс публикации пакета
publish:
	npm publish --dry-run

# команда запустит eslint
lint:
		npx eslint .
