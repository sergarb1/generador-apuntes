/**
 * Writing Strategies - Apuntes de Inglés 2º Bachillerato
 * IES Serra Perenxisa
 * 
 * Aplicación Vue.js para visualización de apuntes educativos
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            sidebarOpen: true,
            activeSection: 'inicio',
            sections: [
                { id: 'portada-introduccion', title: 'Introducción' },
                { id: 'estructura-ensayo', title: 'Estructura del Ensayo' },
                { id: 'conectores', title: 'Conectores' },
                { id: 'registro-formal-informal', title: 'Registro Formal/Informal' },
                { id: 'modelos-ensayos', title: 'Modelos de Essays' },
                { id: 'ejercicios', title: 'Ejercicios' },
                { id: 'autoevaluacion', title: 'Autoevaluación' }
            ]
        };
    },
    computed: {
        projectTitle() {
            return window.metadata?.projectTitle || 'Apuntes Educativos';
        },
        studentName() {
            return window.metadata?.studentName || 'Por definir';
        },
        tutorName() {
            return window.metadata?.tutorName || 'Por definir';
        },
        cycle() {
            return window.metadata?.cycle || 'Bachillerato';
        },
        cycleLevel() {
            return window.metadata?.cycleLevel || 'Bachillerato';
        },
        courseYear() {
            return window.metadata?.courseYear || '2º Bachillerato';
        },
        subject() {
            return window.metadata?.subject || 'Inglés';
        },
        logoUrl() {
            return './logo.png';
        },
        projectImage() {
            return window.metadata?.projectImage || null;
        },
        currentDate() {
            return new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    },
    methods: {
        getSectionIcon(sectionId) {
            const icons = {
                'portada-introduccion': '👋',
                'estructura-ensayo': '🏗️',
                'conectores': '🔗',
                'registro-formal-informal': '🎭',
                'modelos-ensayos': '📝',
                'ejercicios': '✏️',
                'autoevaluacion': '✅',
                'glosario': '📖',
                'recursos': '🔗'
            };
            return icons[sectionId] || '📄';
        },
        getSectionContent(sectionId) {
            return window.sectionsContent?.[sectionId] || '<p>Contenido no disponible</p>';
        },
        printProject() {
            window.print();
        },
        exportWord() {
            const content = document.getElementById('export-content').innerHTML;
            const title = this.projectTitle;
            
            const header = `
                <html xmlns:o='urn:schemas-microsoft-com:office:office' 
                      xmlns:w='urn:schemas-microsoft-com:office:word' 
                      xmlns='http://www.w3.org/TR/REC-html40'>
                <head><meta charset='utf-8'><title>${title}</title></head><body>`;
            
            const footer = "</body></html>";
            const sourceHTML = header + content + footer;
            
            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            
            const link = document.createElement('a');
            link.href = source;
            link.download = `${title.replace(/[^a-z0-9]/gi, '_')}.doc`;
            link.click();
        }
    },
    mounted() {
        // Scroll spy para actualizar la sección activa
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let current = 'inicio';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            this.activeSection = current;
        });

        // Cerrar sidebar en móviles por defecto
        if (window.innerWidth < 1024) {
            this.sidebarOpen = false;
        }
    }
}).mount('#app');
