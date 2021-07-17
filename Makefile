# команда полезна при клонировании первого репозитория, (или после удаления node_modules).
install:
  npm ci

# команда запустит игру
brain-games:
  node bin/brain-games.js

# команда покажет информацию о файле
publish:
  npm publish --dry-run