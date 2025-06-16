@echo off
chcp 65001 > nul
echo [1/5] Проверка окружения...
echo -------------------------------------------

:: Проверка Git
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Ошибка: Git не установлен. Скачайте его с https://git-scm.com/downloads
    pause
    exit /b
)

:: Проверка Docker (демона)
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ОШИБКА: Docker не запущен!
    echo 1. Откройте Docker Desktop
    echo 2. Дождитесь появления иконки кита
    echo 3. Запустите скрипт снова
    echo.
    pause
    exit /b
)

:: Клонирование репозитория
if not exist "rimsnap" (
    echo [2/5] Клонирование проекта...
    git clone https://github.com/Jeyw1n/rimsnap
    if %errorlevel% neq 0 (
        echo Ошибка при клонировании репозитория
        pause
        exit /b
    )
)

:: Переход в папку проекта
cd rimsnap

echo [3/5] Сборка Docker-образов...
docker-compose build
if %errorlevel% neq 0 (
    echo Ошибка при сборке образов
    pause
    exit /b
)

echo [4/5] Применение миграций Django...
docker-compose run --rm backend bash -c "python manage.py migrate"
if %errorlevel% neq 0 (
    echo Ошибка при применении миграций
    pause
    exit /b
)

echo [5/5] Запуск проекта...
echo -------------------------------------------
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo -------------------------------------------
echo Для остановки нажмите CTRL+C
echo.

docker-compose up --remove-orphans

if %errorlevel% neq 0 (
    echo Ошибка при работе контейнеров
    pause
    exit /b
)

echo Контейнеры остановлены и удалены
pause