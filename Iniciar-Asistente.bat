@echo off
chcp 65001 >nul 2>&1
title Generador de Apuntes - mejoratudocencia.es

cls
echo.
echo =========================================
echo       GENERADOR DE APUNTES
echo    mejoratudocencia.es
echo =========================================
echo.

REM Ruta del script
set "SCRIPT_DIR=%~dp0"
set "CONFIG_PATH=%SCRIPT_DIR%config.ini"
set "PROMPT_PATH=%SCRIPT_DIR%prompt-inicial.txt"

REM Detectar entornos
set "IS_QWEN="
set "IS_GEMINI="
set "IS_COPILOT="

if defined QWEN_CODE set "IS_QWEN=1"
if defined QWEN_CLI set "IS_QWEN=1"
if defined GEMINI_CLI set "IS_GEMINI=1"
if defined GITHUB_COPILOT_CLI set "IS_COPILOT=1"

REM Detectar herramientas disponibles
set "HAS_QWEN="
set "HAS_GEMINI="
set "HAS_COPILOT="

where qwen >nul 2>&1 && set "HAS_QWEN=1"
where gemini >nul 2>&1 && set "HAS_GEMINI=1"
where gh >nul 2>&1 && set "HAS_COPILOT=1"

echo.
echo Detectando entorno...

REM Si estamos dentro de un entorno, usar ese
if defined IS_QWEN (
    echo Ejecutando dentro de Qwen Code
    set "TOOL=qwen"
    goto :SELECTED
)

if defined IS_GEMINI (
    echo Ejecutando dentro de Gemini CLI
    set "TOOL=gemini"
    goto :SELECTED
)

if defined IS_COPILOT (
    echo Ejecutando dentro de GitHub Copilot CLI
    set "TOOL=copilot"
    goto :SELECTED
)

REM No estamos dentro de ningun entorno, verificar herramientas
set "TOOL_FROM_CONFIG="
if exist "%CONFIG_PATH%" (
    for /f "tokens=2 delims==" %%a in ('findstr /i "^tool=" "%CONFIG_PATH%"') do (
        set "TOOL_FROM_CONFIG=%%a"
    )
)

if "%TOOL_FROM_CONFIG%"=="qwen" (
    if defined HAS_QWEN (
        echo Usando Qwen Code (ultima seleccion)
        set "TOOL=qwen"
        goto :SELECTED
    )
)

if "%TOOL_FROM_CONFIG%"=="gemini" (
    if defined HAS_GEMINI (
        echo Usando Gemini CLI (ultima seleccion)
        set "TOOL=gemini"
        goto :SELECTED
    )
)

if "%TOOL_FROM_CONFIG%"=="copilot" (
    if defined HAS_COPILOT (
        echo Usando GitHub Copilot CLI (ultima seleccion)
        set "TOOL=copilot"
        goto :SELECTED
    )
)

REM Ambos/Tres disponibles o ninguno configurado
if defined HAS_QWEN (
    if defined HAS_GEMINI (
        if defined HAS_COPILOT (
            echo.
            echo   Herramientas detectadas:
            echo   ─────────────────────────────────
            echo   [1] Qwen Code
            echo   [2] Gemini CLI
            echo   [3] GitHub Copilot CLI
            echo   ─────────────────────────────────
            echo.
            choice /C 123 /N /M "   Selecciona una opcion [1]: "
            if errorlevel 3 (
                set "TOOL=copilot"
            ) else if errorlevel 2 (
                set "TOOL=gemini"
            ) else (
                set "TOOL=qwen"
            )
            goto :SELECTED
        )
        echo.
        echo   Herramientas detectadas:
        echo   ─────────────────────────────────
        echo   [1] Qwen Code
        echo   [2] Gemini CLI
        echo   ─────────────────────────────────
        echo.
        choice /C 12 /N /M "   Selecciona una opcion [1]: "
        if errorlevel 2 (
            set "TOOL=gemini"
        ) else (
            set "TOOL=qwen"
        )
        goto :SELECTED
    )
    if defined HAS_COPILOT (
        echo.
        echo   Herramientas detectadas:
        echo   ─────────────────────────────────
        echo   [1] Qwen Code
        echo   [2] GitHub Copilot CLI
        echo   ─────────────────────────────────
        echo.
        choice /C 12 /N /M "   Selecciona una opcion [1]: "
        if errorlevel 2 (
            set "TOOL=copilot"
        ) else (
            set "TOOL=qwen"
        )
        goto :SELECTED
    )
    echo   Qwen Code detectado
    set "TOOL=qwen"
    goto :SELECTED
)

if defined HAS_GEMINI (
    if defined HAS_COPILOT (
        echo.
        echo   Herramientas detectadas:
        echo   ─────────────────────────────────
        echo   [1] Gemini CLI
        echo   [2] GitHub Copilot CLI
        echo   ─────────────────────────────────
        echo.
        choice /C 12 /N /M "   Selecciona una opcion [1]: "
        if errorlevel 2 (
            set "TOOL=copilot"
        ) else (
            set "TOOL=gemini"
        )
        goto :SELECTED
    )
    echo   Gemini CLI detectado
    set "TOOL=gemini"
    goto :SELECTED
)

if defined HAS_COPILOT (
    echo   GitHub Copilot CLI detectado
    set "TOOL=copilot"
    goto :SELECTED
)

REM Ninguna herramienta encontrada
echo.
echo ERROR: No se encuentra Qwen, Gemini o Copilot
echo.
echo Instala uno de los siguientes:
echo   - Qwen Code:              npm install -g @qwen-code/qwen-code
echo   - Gemini CLI:             npm install -g @google/gemini-cli
echo   - GitHub Copilot CLI:     npm install -g @github/gh-cli
echo.
pause
exit /b 1

:SELECTED
REM Guardar la seleccion
echo tool=%TOOL% > "%CONFIG_PATH%"

echo.
echo Iniciando %TOOL% con prompt interactivo...
echo.

REM Iniciar la herramienta seleccionada con prompt inicial
if "%TOOL%"=="qwen" (
    qwen -i "Hola! Soy el asistente de generacion de apuntes educativos de mejoratudocencia.es. Lee el archivo prompt-inicial.txt para conocer las instrucciones completas. Por favor, ayudame a generar apuntes educativos profesionales siguiendo ese flujo. - INFORMACION DEL INTERPRETE: Este script se ejecuta en CMD.exe. Los comandos de shell deben usar sintaxis PowerShell (no bash)." -y
) else if "%TOOL%"=="gemini" (
    gemini -i "Hola! Soy el asistente de generacion de apuntes educativos de mejoratudocencia.es. Lee el archivo prompt-inicial.txt para conocer las instrucciones completas. Por favor, ayudame a generar apuntes educativos profesionales siguiendo ese flujo. - INFORMACION DEL INTERPRETE: Este script se ejecuta en CMD.exe. Los comandos de shell deben usar sintaxis PowerShell (no bash)." -y
) else if "%TOOL%"=="copilot" (
    copilot -i "Hola! Soy el asistente de generacion de apuntes educativos de mejoratudocencia.es. Lee el archivo prompt-inicial.txt para conocer las instrucciones completas. Por favor, ayudame a generar apuntes educativos profesionales siguiendo ese flujo. - INFORMACION DEL INTERPRETE: Este script se ejecuta en CMD.exe. Los comandos de shell deben usar sintaxis PowerShell (no bash)." --yolo
)

endlocal
exit /b
