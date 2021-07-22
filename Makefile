# команда полезна при клонировании первого репозитория, (или после удаления node_modules).
install:
	npm ci

# команда запустит игру
brain-games:
	node bin/brain-games.js

# команда имитирует процесс публикации пакета
publish:
	npm publish --dry-run

# команда запустит eslint
lint:
		npx eslint .