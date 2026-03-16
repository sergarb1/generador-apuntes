@echo off
echo ========================================
echo   Generador de Apuntes Educativos
echo   IES Serra Perenxisa
echo ========================================
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python no está instalado o no está en el PATH
    echo Descarga Python desde https://www.python.org/downloads/
    pause
    exit /b 1
)

echo [OK] Python detectado
echo.

REM Verificar si existe el archivo del orquestador
if not exist "agents\00-orchestrator-apuntes.md" (
    echo [ERROR] No se encuentra el agente orquestador
    echo Asegúrate de estar en el directorio correcto
    pause
    exit /b 1
)

echo [OK] Agentes detectados
echo.

REM Iniciar el asistente
echo Iniciando el asistente...
echo.

python -c "import sys; print(f'Python {sys.version}')"

REM Aquí iría el comando para ejecutar tu script principal
REM Por ejemplo:
REM python scripts\asistente.py

echo.
echo ========================================
echo   Asistente finalizado
echo ========================================
pause
