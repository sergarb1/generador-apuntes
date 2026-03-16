# Generador de Apuntes Educativos - IES Serra Perenxisa
Write-Host "========================================" -ForegroundColor Blue
Write-Host "  Generador de Apuntes Educativos" -ForegroundColor Cyan
Write-Host "  IES Serra Perenxisa" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Blue
Write-Host ""

# Verificar si Python está instalado
try {
    $pythonVersion = python --version 2>&1
    Write-Host "[OK] Python detectado: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Python no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host "Descarga Python desde https://www.python.org/downloads/" -ForegroundColor Yellow
    pause
    exit 1
}

# Verificar si existe el archivo del orquestador
if (-not (Test-Path "agents\00-orchestrator-apuntes.md")) {
    Write-Host "[ERROR] No se encuentra el agente orquestador" -ForegroundColor Red
    Write-Host "Asegúrate de estar en el directorio correcto" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "[OK] Agentes detectados" -ForegroundColor Green
Write-Host ""

# Iniciar el asistente
Write-Host "Iniciando el asistente..." -ForegroundColor Cyan
Write-Host ""

# Aquí iría el comando para ejecutar tu script principal
# Por ejemplo:
# python scripts\asistente.py

Write-Host ""
Write-Host "========================================" -ForegroundColor Blue
Write-Host "  Asistente finalizado" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Blue
pause
