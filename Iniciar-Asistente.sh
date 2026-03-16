#!/bin/bash

echo "========================================"
echo "  Generador de Apuntes Educativos"
echo "  IES Serra Perenxisa"
echo "========================================"
echo ""

# Verificar si Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "[ERROR] Python3 no está instalado"
    echo "Instala Python3 con: sudo apt install python3"
    exit 1
fi

echo "[OK] Python3 detectado: $(python3 --version)"
echo ""

# Verificar si existe el archivo del orquestador
if [ ! -f "agents/00-orchestrator-apuntes.md" ]; then
    echo "[ERROR] No se encuentra el agente orquestador"
    echo "Asegúrate de estar en el directorio correcto"
    exit 1
fi

echo "[OK] Agentes detectados"
echo ""

# Iniciar el asistente
echo "Iniciando el asistente..."
echo ""

# Aquí iría el comando para ejecutar tu script principal
# Por ejemplo:
# python3 scripts/asistente.py

echo ""
echo "========================================"
echo "  Asistente finalizado"
echo "========================================"
