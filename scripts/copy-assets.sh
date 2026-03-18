#!/bin/bash
# Script para copiar assets CC BY a un nuevo proyecto
# Uso: ./copy-assets.sh [ruta-proyecto]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLANTILLA_ASSETS="$SCRIPT_DIR/plantilla/assets"
PLANTILLA_LOGO="$SCRIPT_DIR/plantilla/logo.png"

# Si se proporciona una ruta de proyecto, copiar allí
if [ -n "$1" ]; then
    PROYECTO_DIR="$1"
    
    if [ ! -d "$PROYECTO_DIR" ]; then
        echo "❌ El directorio del proyecto no existe: $PROYECTO_DIR"
        exit 1
    fi
    
    # Crear carpeta assets si no existe
    mkdir -p "$PROYECTO_DIR/assets"
    
    # Copiar logos CC BY
    if [ -d "$PLANTILLA_ASSETS" ]; then
        cp "$PLANTILLA_ASSETS"/*.png "$PROYECTO_DIR/assets/"
        echo "✅ Assets CC BY copiados a: $PROYECTO_DIR/assets/"
    else
        echo "⚠️ No se encontró la carpeta de assets de la plantilla"
    fi
    
    # Copiar logo del centro si existe
    if [ -f "$PLANTILLA_LOGO" ]; then
        cp "$PLANTILLA_LOGO" "$PROYECTO_DIR/"
        echo "✅ Logo copiado a: $PROYECTO_DIR/"
    fi
    
    exit 0
fi

# Si no se proporciona ruta, mostrar ayuda
echo "📦 Copiar Assets CC BY"
echo ""
echo "Uso: $0 [ruta-al-proyecto]"
echo ""
echo "Ejemplo:"
echo "  $0 apuntes/02-ESO/Biologia/3º-ESO/03-CELULA/"
echo ""
echo "Este script copia:"
echo "  - Logos CC BY (88x31, 80x15, 120x40) a la carpeta assets/"
echo "  - Logo del centro (logo.png) a la raíz del proyecto"
