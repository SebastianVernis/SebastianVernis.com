document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DATOS MULTIMEDIA ---
    const multimediaData = {
        "vid_landing_page": "/Media/Landing Pages/Video_de_Landing_Page_Generado.mp4",
        "img_landing_carousel": [
            "/Media/Landing Pages/Carrusel_1.png",
            "/Media/Landing Pages/Carrusel_2.png",
            "/Media/Landing Pages/Carrusel_3.png"
        ],
        "anim_api": "/Media/Ciberseguridad/Video_Listo_CRM_ERP_App.mp4",
        "vid_ecommerce": "/Media/Tienda/Tienda_Online_Video_Listo.mp4",
        "img_payment_gateways": "/Media/Pagos/artbot_img_5_cyberpunk_Un_dise_o_gr_fico_profesional_.png",
        "anim_cobros": "/Media/Pagos/Video_de_Flujo_de_Transacciones.mp4",
        "img_social_profiles": "/Media/Redes Sociales/artbot_img_5_cyberpunk__Un_collage_din_mico_con_los_l.png",
        "img_seo_local": "/Media/SEO/2 (5).png",
        "img_ads": "/Media/Redes Sociales/artbot_img_9_cyberpunk_Un_mockup_de_un_anuncio_de_Ins.png",
        "img_mantenimiento": "/Media/Ciberseguridad/artbot_img_7_cyberpunk__Una_imagen_central_de_un_escu.png",
        "img_consultoria": "/Media/Ciberseguridad/artbot_img_4_cyberpunk_Mano_organizando_bloques_de_co.png",
        "img_sobre_mi": "/Media/AVATARES/logo (1).png",
        "logo": "/Media/AVATARES/LOGO.png",
        "img_tienda_asesoria": "/Media/Ciberseguridad/artbot_img_9_cyberpunk__Una_imagen_profesional_y_limp.png",
        "img_tienda_landing": "/Media/Landing Pages/artbot_img_6_cyberpunk_Landing_page_elegante_y_modern.png",
        "img_tienda_ecommerce": "/Media/Tienda/artbot_img_2_cyberpunk__Una_composici_n_de_varios_pro.png",
        "img_tienda_redes": "/Media/Redes Sociales/artbot_img_3_cyberpunk__Un_dise_o_gr_fico_con_los_log.png",
        "img_tienda_mantenimiento": "/Media/Ciberseguridad/artbot_img_9_cyberpunk_Escudo_protegiendo_un_sitio_we.png",
        "img_tienda_seo": "/Media/Ciberseguridad/artbot_img_5_cyberpunk__Una_imagen_de_un_reporte_o_da.png",
        "img_tienda_branding": "/Media/Landing Pages/artbot_img_6_cyberpunk__Un__moodboard__digital_que_mu.png",
        "img_tienda_gestion_redes": "/Media/Redes Sociales/artbot_img_1_cyberpunk__Una_composici_n_visual_que_mu.png",
        "img_tienda_vulnerabilidades": "/Media/Ciberseguridad/artbot_img_7_cyberpunk__Un__cono_de_un_sitio_web_prot.png",
        "img_tienda_hardening": "/Media/Ciberseguridad/Video_Listo_Seguridad_Web.mp4",
        "img_tienda_consultoria_cyber": "/Media/Ciberseguridad/artbot_img_9_cyberpunk__Una_imagen_de_una_persona_en_.png"
    };

    const multimediaMap = {
        'Diseño de Landing Page Optimizada': 'vid_landing_page',
        'Desarrollo de APIs Personalizadas': 'anim_api',
        'E-commerce Básico (Tienda Online Sencilla)': 'vid_ecommerce',
        'Integración de Pasarelas de Pago (Stripe, PayPal)': 'img_payment_gateways',
        'Gestión de APIs para Cobros Digitales': 'anim_cobros',
        'Creación Básica de Perfiles en Redes Sociales': 'img_social_profiles',
        'SEO Local para Negocios Físicos': 'img_seo_local',
        'Campañas de Publicidad en Redes (Ads)': 'img_ads',
        'Mantenimiento Web y Soporte Técnico': 'img_mantenimiento',
        'Consultoría Estratégica Digital (Completa)': 'img_consultoria'
    };
    const tiendaMultimediaMap = {
        'tienda-asesoria': 'img_tienda_asesoria',
        'tienda-landingpage': 'img_tienda_landing',
        'tienda-ecommerce': 'img_tienda_ecommerce',
        'tienda-redes-sociales': 'img_tienda_redes',
        'tienda-mantenimiento': 'img_tienda_mantenimiento',
        'tienda-seo-audit': 'img_tienda_seo',
        'tienda-branding': 'img_tienda_branding',
        'tienda-social-media': 'img_tienda_gestion_redes',
        'tienda-cyber-analisis': 'img_tienda_vulnerabilidades',
        'tienda-cyber-hardening': 'img_tienda_hardening',
        'tienda-cyber-consultoria': 'img_tienda_consultoria_cyber'
    };

    // --- NAVEGACIÓN Y VISIBILIDAD DE SECCIONES ---
    const navLinks = document.querySelectorAll('header nav a');
    const pageSections = document.querySelectorAll('main#inicio, section#servicios, section#catalogo, section#tienda, section#contacto');
    
    window.handleLinkClick = function(event, targetId, subject = '') {
        if (event && typeof event.preventDefault === 'function') {
             event.preventDefault(); 
        }
        
        showSection(targetId); 
        
        const headerOffset = document.querySelector('header nav').offsetHeight || 70;
        const targetElement = document.getElementById(targetId);
        let scrollToPosition = 0; 

        if (targetElement && targetId !== 'inicio') { 
             const elementPosition = targetElement.offsetTop; 
             scrollToPosition = elementPosition - headerOffset - 20;
        } else if (targetId === 'inicio') { 
            scrollToPosition = 0;
        }

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth' 
        });

        if (targetId === 'contacto' && subject) {
            const mensajeTextarea = document.getElementById('contactMensaje');
            const servicioSelect = document.getElementById('contactServicioInteres');
            let prefilledMessage = `Hola, estoy interesado/a en el servicio: ${subject}.\n\n`;

            if(servicioSelect){
                let foundMatch = false;
                for(let i=0; i < servicioSelect.options.length; i++){
                    const optionText = servicioSelect.options[i].textContent.toLowerCase();
                    const optionValue = servicioSelect.options[i].value.toLowerCase();
                    const subjectClean = subject.toLowerCase().split('(')[0].trim();
                    
                    if(optionText.includes(subjectClean) || optionValue.includes(subjectClean.replace(/\s+/g, '_'))) {
                        servicioSelect.value = servicioSelect.options[i].value;
                        foundMatch = true;
                        break;
                    }
                }
                if (!foundMatch) {
                    servicioSelect.value = "otro"; 
                }
            }
            if (mensajeTextarea) {
                mensajeTextarea.value = prefilledMessage;
                mensajeTextarea.focus();
            }
        }
    }

    function showSection(targetId) {
        pageSections.forEach(section => {
            section.classList.toggle('visible-section', section.id === targetId);
        });
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('activo', href && href.substring(1) === targetId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                handleLinkClick(event, targetId); 
            }
        });
    });
    
    let initialTargetId = window.location.hash ? window.location.hash.substring(1) : 'inicio';
    if (!document.getElementById(initialTargetId)) {
        initialTargetId = 'inicio';
    }
    showSection(initialTargetId); 
    
    if (initialTargetId !== 'inicio') {
        setTimeout(() => { 
            const targetElement = document.getElementById(initialTargetId);
            if(targetElement){
                const headerOffset = document.querySelector('header nav').offsetHeight || 70;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'auto' });
            }
        }, 50);
    }

    // --- RENDERIZADO DE LA SECCIÓN DE SERVICIOS ---
    const serviciosData = [
      { titulo: "Diseño de Landing Page Optimizada", categoria: "Diseño y Desarrollo Web", enfoque: "Conversión / Específico", descripcion: "Landing pages enfocadas en la conversión, con diseño moderno, video animado y carrusel de beneficios." },
      { titulo: "Desarrollo de APIs Personalizadas", categoria: "Diseño y Desarrollo Web", enfoque: "Integración / Técnico", descripcion: "Automatiza y conecta tus plataformas digitales con APIs personalizadas, adaptadas a tu negocio." },
      { titulo: "E-commerce Básico (Tienda Online Sencilla)", categoria: "E-commerce y Pagos", enfoque: "E-commerce Inicial / Sencillo", descripcion: "Tienda online con catálogo, carrito de compras y proceso de pago simple. Ideal para emprendedores." },
      { titulo: "Integración de Pasarelas de Pago (Stripe, PayPal)", categoria: "E-commerce y Pagos", enfoque: "E-commerce Avanzado / Seguridad", descripcion: "Integramos las principales pasarelas de pago en tu sitio o tienda online para que cobres de forma segura." },
      { titulo: "Gestión de APIs para Cobros Digitales", categoria: "E-commerce y Pagos", enfoque: "Finanzas Digitales / Especializado", descripcion: "Gestionamos y optimizamos la integración de APIs de pago para que tus cobros sean eficientes y seguros." },
      { titulo: "Creación Básica de Perfiles en Redes Sociales", categoria: "Marketing Digital", enfoque: "Lanzamiento Rápido / Básico", descripcion: "Creamos tus perfiles profesionales en Instagram, Facebook, TikTok y más, con diseño atractivo y checklist visual." },
      { titulo: "SEO Local para Negocios Físicos", categoria: "Marketing Digital", enfoque: "Visibilidad Local / Geográfico", descripcion: "Haz que los clientes cercanos te descubran fácilmente en Google y Maps. Mejoramos tu visibilidad local." },
      { titulo: "Campañas de Publicidad en Redes (Ads)", categoria: "Marketing Digital", enfoque: "Publicidad Pagada / Crecimiento", descripcion: "Campañas de anuncios segmentados en Facebook e Instagram para aumentar tu alcance y ventas." },
      { titulo: "Mantenimiento Web y Soporte Técnico", categoria: "Servicios Técnicos y Consultoría", enfoque: "Seguridad / Confianza", descripcion: "Mantenemos tu sitio actualizado, seguro y optimizado, para que te enfoques en tu negocio." },
      { titulo: "Consultoría Estratégica Digital (Completa)", categoria: "Servicios Técnicos y Consultoría", enfoque: "Estrategia Global / Asesoramiento", descripcion: "Te acompañamos en todo el proceso: análisis, estrategia, implementación y medición de resultados." }
    ];
    
    const serviciosContenedor = document.getElementById('servicios-lista');
    if (serviciosContenedor) {
        serviciosContenedor.innerHTML = ''; 
        const serviciosPorCategoria = serviciosData.reduce((acc, servicio) => {
            const categoria = servicio.categoria || 'Otros'; 
            if (!acc[categoria]) acc[categoria] = [];
            acc[categoria].push(servicio);
            return acc;
        }, {});

        for (const categoriaNombre in serviciosPorCategoria) {
            const categoriaDiv = document.createElement('div');
            categoriaDiv.className = 'categoria-servicios-container';
            const tituloCategoria = document.createElement('h2'); 
            tituloCategoria.className = 'categoria-servicios-titulo';
            tituloCategoria.textContent = categoriaNombre;
            categoriaDiv.appendChild(tituloCategoria);
            const listaServiciosDiv = document.createElement('div');
            listaServiciosDiv.className = 'servicios-lista-categoria'; 
            serviciosPorCategoria[categoriaNombre].forEach(servicio => {
                const card = document.createElement('div');
                card.className = 'servicio-card'; 
                
                const mediaKey = multimediaMap[servicio.titulo];
                const mediaSrc = multimediaData[mediaKey];
                let mediaElement = '<span>Sin Contenido</span>';
                if (mediaSrc) {
                    if (mediaSrc.endsWith('.mp4')) {
                        mediaElement = `<video autoplay loop muted playsinline src="${mediaSrc}"></video>`;
                    } else if (mediaSrc.endsWith('.png')) {
                        mediaElement = `<img src="${mediaSrc}" alt="${servicio.titulo}">`;
                    }
                }

                card.innerHTML = `
                    <div class="servicio-media">${mediaElement}</div>
                    <h3>${servicio.titulo}</h3>
                    <span class="enfoque">${servicio.enfoque}</span>
                    <p>${servicio.descripcion}</p>
                `;
                listaServiciosDiv.appendChild(card);
            });
            categoriaDiv.appendChild(listaServiciosDiv);
            serviciosContenedor.appendChild(categoriaDiv);
        }
    }

    // --- RENDERIZADO DE SECCIONES DE INICIO ---
    function renderizarInicio() {
        const logoHeader = document.getElementById('header-logo');
        const logoFooter = document.getElementById('footer-logo');
        const sobreMiMedia = document.getElementById('sobre-mi-media');
        
        if (logoHeader && multimediaData.logo) {
            logoHeader.innerHTML = `<img src="${multimediaData.logo}" alt="Logo Sebastian Vernis">`;
        }
        if (logoFooter && multimediaData.logo) {
            logoFooter.innerHTML = `<img src="${multimediaData.logo}" alt="Logo Sebastian Vernis">`;
        }
        if (sobreMiMedia && multimediaData.img_sobre_mi) {
            sobreMiMedia.innerHTML = `<img src="${multimediaData.img_sobre_mi}" alt="Foto de Sebastian Vernis">`;
        }
        
        const procesoContenedor = document.getElementById('proceso-pasos-container');
        if (procesoContenedor) {
            const procesoData = [
                { icono: "💬", titulo: "1. Descubrimiento", texto: "Escuchamos tus ideas, analizamos tus necesidades y definimos juntos los objetivos del proyecto." },
                { icono: "🎨", titulo: "2. Diseño y Estrategia", texto: "Creamos un plan detallado y un diseño visual atractivo y funcional centrado en el usuario." },
                { icono: "💻", titulo: "3. Desarrollo", texto: "Construimos tu solución digital utilizando las tecnologías más adecuadas y eficientes." },
                { icono: "🚀", titulo: "4. Lanzamiento y Optimización", texto: "Implementamos, probamos exhaustivamente y lanzamos tu proyecto. Luego, optimizamos." }
            ];
            procesoContenedor.innerHTML = procesoData.map(paso => `
                <div class="proceso-paso">
                    <div class="paso-icono">${paso.icono}</div>
                    <h3>${paso.titulo}</h3>
                    <p>${paso.texto}</p>
                </div>
            `).join('');
        }
    }

    // --- RENDERIZADO Y FILTRADO DE LA SECCIÓN DE CATÁLOGO ---
    const catalogoData = [
      { nombre: "Sabores del Alma", rubro: "Restaurante", descripcion: "Sitio web para restaurante con galería de platillos, menú digital interactivo, formulario de reservaciones y mapa integrado.", demo: "https://chispakimnueve.wixsite.com/sabores-del-alma", caracteristicas: ["galeria","menu","reservas","mapa"] },
      { nombre: "Hecho con Amor Boutique", rubro: "Tienda", descripcion: "Tienda online con catálogo de productos, carrito de compras, guía de tallas y sección de novedades.", demo: "https://chispakimnueve.wixsite.com/hecho-con-amor-bouti", caracteristicas: ["catalogo","carrito","tienda"] },
      { nombre: "Oasis de Paz", rubro: "Salud", descripcion: "Sitio para spa con listado de servicios, agenda de citas, galería de instalaciones y blog de bienestar.", demo: "https://chispakimnueve.wixsite.com/oasis-de-paz", caracteristicas: ["galeria","reservas","blog"] },
      { nombre: "Soluciones Expertas", rubro: "Servicios", descripcion: "Web de consultoría con descripción de servicios, portafolio de casos de éxito, blog y formulario de contacto avanzado.", demo: "https://chispakimnueve.wixsite.com/soluciones-expertas", caracteristicas: ["portafolio","blog"] },
      { nombre: "Lienzo Digital", rubro: "Creativo", descripcion: "Portafolio visual para artista, galería de obras, tienda online y biografía creativa.", demo: "https://chispakimnueve.wixsite.com/lienzo-digital", caracteristicas: ["galeria","portafolio","tienda"] },
      { nombre: "Tu Próximo Curso", rubro: "Educacion", descripcion: "Plataforma de cursos con lecciones en video, registro de estudiantes, foro y certificados.", demo: "https://chispakimnueve.wixsite.com/tu-pr", caracteristicas: ["foro","catalogo"] },
      { nombre: "Manos que Ayudan", rubro: "ONG", descripcion: "Sitio para ONG con sección de causa, botón de donación, formulario de voluntarios y blog de noticias.", demo: "https://chispakimnueve.wixsite.com/manos-que-ayudan", caracteristicas: ["donaciones","blog"] },
      { nombre: "Hogar Ideal", rubro: "BienesRaices", descripcion: "Web inmobiliaria con buscador de propiedades, fichas detalladas, mapa interactivo y calculadora hipotecaria.", demo: "https://chispakimnueve.wixsite.com/hogar-ideal", caracteristicas: ["buscador","mapa","galeria"] },
      { nombre: "NovaTech", rubro: "Tecnologia", descripcion: "Landing page para startup, producto innovador, sección “Cómo funciona”, precios y llamadas a la acción.", demo: "https://chispakimnueve.wixsite.com/novatech", caracteristicas: [] },
      { nombre: "Celebraciones Únicas", rubro: "Eventos", descripcion: "Sitio para eventos con galería de celebraciones, paquetes de servicios, testimonios y formulario de consulta.", demo: "https://chispakimnueve.wixsite.com/celebraciones", caracteristicas: ["galeria","portafolio"] }
    ];
    
    window.caracLabel = function(c) { 
      const labels = { galeria: "Galería", menu: "Menú Digital", reservas: "Reservas/Citas", mapa: "Mapa", catalogo: "Catálogo", carrito: "Carrito de Compras", blog: "Blog", foro: "Foro", donaciones: "Donaciones", portafolio: "Portafolio", buscador: "Buscador", tienda: "Tienda Online" };
      return labels[c] || c;
    }

    const catalogoListaContenedorGlobal = document.getElementById('catalogo-lista');
    const filtrosFormGlobal = document.getElementById('filtros-catalogo');
    const limpiarFiltrosBtnGlobal = document.getElementById('limpiar-filtros');
    const rubroTagsContainer = document.getElementById('rubro-tags');
    const caracTagsContainer = document.getElementById('carac-tags');

    const rubrosDisponibles = { "Restaurante": "Restaurante", "Tienda": "Tienda Minorista", "Salud": "Salud y Bienestar", "Servicios": "Servicios Profesionales", "Creativo": "Artistas y Creativos", "Educacion": "Educación y Cursos", "ONG": "ONG", "BienesRaices": "Bienes Raíces", "Tecnologia": "Startups y Tecnología", "Eventos": "Eventos" };
    const caracsDisponibles = { galeria: "Galería", menu: "Menú Digital", reservas: "Reservas/Citas", mapa: "Mapa", catalogo: "Catálogo", carrito: "Carrito de Compras", blog: "Blog", foro: "Foro", donaciones: "Donaciones", portafolio: "Portafolio", buscador: "Buscador", tienda: "Tienda Online"};

    function populateFilters() {
        if (rubroTagsContainer) {
            rubroTagsContainer.innerHTML = Object.entries(rubrosDisponibles).map(([value, label]) => `<span><input type="checkbox" name="rubro" value="${value}" id="rubro-${value}"><label for="rubro-${value}">${label}</label></span>`).join('');
        }
        if (caracTagsContainer) {
             caracTagsContainer.innerHTML = Object.entries(caracsDisponibles).map(([value, label]) => `<span><input type="checkbox" name="carac" value="${value}" id="carac-${value}"><label for="carac-${value}">${label}</label></span>`).join('');
        }
    }
    
    window.renderCatalogo = function() { 
        if (!catalogoListaContenedorGlobal) return; 
        const rubrosSeleccionados = filtrosFormGlobal ? Array.from(filtrosFormGlobal.querySelectorAll('input[name="rubro"]:checked')).map(cb => cb.value) : [];
        const caracsSeleccionadas = filtrosFormGlobal ? Array.from(filtrosFormGlobal.querySelectorAll('input[name="carac"]:checked')).map(cb => cb.value) : [];
        catalogoListaContenedorGlobal.innerHTML = ''; 
        const filtrados = catalogoData.filter(sitio => (rubrosSeleccionados.length === 0 || rubrosSeleccionados.includes(sitio.rubro)) && (caracsSeleccionadas.length === 0 || caracsSeleccionadas.every(carac => sitio.caracteristicas.includes(carac))));
        if (filtrados.length === 0) {
            catalogoListaContenedorGlobal.innerHTML = "<p style='color: #ddd; text-align: center; width: 100%; padding: 1rem 0;'>No hay sitios que cumplan con los filtros seleccionados.</p>"; 
            return;
        }
        filtrados.forEach(sitio => {
            const card = document.createElement('div');
            card.className = 'catalogo-card';
            const placeholderImageUrl = `https://placehold.co/400x250/2c2c2c/e91e63?text=${encodeURIComponent(sitio.nombre)}`;
            card.innerHTML = `
                <div class="catalogo-card-preview">
                    <iframe src="${sitio.demo}" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2>${sitio.nombre}</h2>
                <p>${sitio.descripcion}</p>
                <div class="caracteristicas">${sitio.caracteristicas.map(c => `<span class="carac">${caracLabel(c)}</span>`).join('')}</div>
                <a href="${sitio.demo}" class="btn-demo" target="_blank">Ver Demo</a>`;
            catalogoListaContenedorGlobal.appendChild(card);
        });
    }
    
    if (filtrosFormGlobal) {
        filtrosFormGlobal.addEventListener('change', renderCatalogo);
    }
    if (limpiarFiltrosBtnGlobal) {
        limpiarFiltrosBtnGlobal.addEventListener('click', () => {
          if(filtrosFormGlobal) {
            filtrosFormGlobal.reset();
            renderCatalogo();
          }
        });
    }
    const toggleFiltrosBtn = document.getElementById('toggle-filtros-btn');
    const filtrosContenedor = document.getElementById('filtros-contenedor');
    if (toggleFiltrosBtn && filtrosContenedor) {
      toggleFiltrosBtn.addEventListener('click', function() {
        filtrosContenedor.classList.toggle('visible');
        this.textContent = filtrosContenedor.classList.contains('visible') ? 'Ocultar Filtros' : 'Mostrar Filtros';
      });
    }
    
    // --- RENDERIZADO DE LA SECCIÓN DE TIENDA ---
    const tiendaProductosData = [
      { id: "tienda-asesoria", nombre: "Sesión de Asesoría Estratégica (1hr)", descripcionCorta: "Consultoría enfocada para despejar dudas y trazar un plan de acción digital.", precioOriginal: 1500, precioFinal: 1200, moneda: "MXN", disponibilidad: "Agenda tu cita" },
      { id: "tienda-landingpage", nombre: "Paquete Landing Page Impacto", descripcionCorta: "Diseño y desarrollo de una landing page optimizada para conversiones.", precioOriginal: null, precioFinal: 7500, moneda: "MXN", prefijoPrecio: "Desde ", disponibilidad: "Entrega en 2-3 semanas" },
      { id: "tienda-ecommerce", nombre: "Paquete E-commerce Emprendedor", descripcionCorta: "Tu tienda online básica lista para vender (hasta 20 productos).", precioOriginal: 22000, precioFinal: 18000, moneda: "MXN", prefijoPrecio: "Desde ", disponibilidad: "Entrega en 4-6 semanas" },
      { id: "tienda-redes-sociales", nombre: "Kit Inicio en Redes Sociales", descripcionCorta: "Creación y optimización de perfiles en 2 plataformas sociales clave.", precioOriginal: null, precioFinal: 3500, moneda: "MXN", disponibilidad: "Entrega en 1 semana" },
      { id: "tienda-mantenimiento", nombre: "Mantenimiento Web Esencial (Mensual)", descripcionCorta: "Actualizaciones, seguridad, backups y soporte básico para tu web.", precioOriginal: 2500, precioFinal: 2000, moneda: "MXN", sufijoPrecio: "/mes", disponibilidad: "Suscripción mensual" },
      { id: "tienda-seo-audit", nombre: "Auditoría SEO Completa", descripcionCorta: "Análisis exhaustivo de tu sitio web para identificar oportunidades de mejora en buscadores.", precioOriginal: 6000, precioFinal: 4800, moneda: "MXN", disponibilidad: "Reporte en 5-7 días" },
      { id: "tienda-branding", nombre: "Paquete de Branding Digital Inicial", descripcionCorta: "Creación de logo, paleta de colores y guía de estilo básica para tu marca.", precioOriginal: null, precioFinal: 9500, moneda: "MXN", prefijoPrecio: "Desde ", disponibilidad: "Entrega en 3-4 semanas" },
      { id: "tienda-social-media", nombre: "Gestión de Redes Sociales (Básico)", descripcionCorta: "Planificación y publicación de contenido para una red social (12 posts/mes).", precioOriginal: null, precioFinal: 8000, moneda: "MXN", sufijoPrecio: "/mes", disponibilidad: "Suscripción mensual" },
      { id: "tienda-cyber-analisis", nombre: "Análisis de Vulnerabilidades Web", descripcionCorta: "Identificamos y reportamos las brechas de seguridad en tu sitio web antes de que sean explotadas.", precioOriginal: 8500, precioFinal: 6999, moneda: "MXN", disponibilidad: "Reporte en 7-10 días" },
      { id: "tienda-cyber-hardening", nombre: "Paquete de Hardening para CMS", descripcionCorta: "Reforzamos la seguridad de tu WordPress/Joomla, implementando las mejores prácticas de protección.", precioOriginal: null, precioFinal: 5500, moneda: "MXN", prefijoPrecio: "Desde ", disponibilidad: "Implementación en 3-5 días" },
      { id: "tienda-cyber-consultoria", nombre: "Consultoría de Ciberseguridad (1hr)", descripcionCorta: "Una sesión personalizada para evaluar tu postura de seguridad y crear un plan de acción a tu medida.", precioOriginal: 2000, precioFinal: 1600, moneda: "MXN", disponibilidad: "Agenda tu sesión" }
    ];

    function renderizarProductosTienda() {
        const contenedorProductos = document.getElementById('tienda-productos-lista');
        if (!contenedorProductos) return;
        contenedorProductos.innerHTML = ''; 
        tiendaProductosData.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'tienda-producto-card';
            let precioHtml = '';
            if (producto.precioOriginal) {
                precioHtml += `<span class="precio-original">${producto.moneda} $${producto.precioOriginal.toLocaleString('es-MX')}</span>`;
            }
            precioHtml += `<span class="precio-final">${producto.prefijoPrecio || ''}${producto.moneda} $${producto.precioFinal.toLocaleString('es-MX')}${producto.sufijoPrecio || ''}</span>`;
            
            const nombreProductoEscapado = producto.nombre.replace(/'/g, "\\'");
            const imagenKey = tiendaMultimediaMap[producto.id];
            const imagenUrl = multimediaData[imagenKey] || 'https://placehold.co/300x170/2c2c2c/ffffff?text=Imagen+no+disponible';
            
            let mediaElement = `<img src="${imagenUrl}" alt="${producto.nombre}" class="producto-imagen" onerror="this.onerror=null;this.src='https://placehold.co/300x170/2c2c2c/ffffff?text=Imagen+no+disponible';">`;
            if (imagenUrl.endsWith('.mp4')) {
                mediaElement = `<video autoplay loop muted playsinline src="${imagenUrl}" class="producto-imagen"></video>`;
            }

            card.innerHTML = `
                ${mediaElement}
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="descripcion-corta">${producto.descripcionCorta}</p>
                    <div class="producto-precio">${precioHtml}</div>
                    <p class="disponibilidad"><em>${producto.disponibilidad}</em></p>
                    <button class="btn-producto-cta" onclick="handleLinkClick(event, 'contacto', '${nombreProductoEscapado}')">Contactar</button>
                </div>`;
            contenedorProductos.appendChild(card);
        });
    }

    // --- LÓGICA DEL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('profilingForm');
    const statusMessage = document.getElementById('form-status-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            data.access_key = 'b1d988a9-5fe0-4552-adb4-f622e2a2b105';
            data.subject = `Nuevo mensaje de contacto de: ${data.nombre || 'un visitante'}`;
            data.from_name = "Portafolio Sebastian Vernis";

            const jsonPayload = JSON.stringify(data);
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            statusMessage.className = '';
            statusMessage.textContent = '';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: jsonPayload
                });
                const result = await response.json();
                if (result.success) {
                    statusMessage.className = 'success';
                    statusMessage.textContent = '¡Gracias! Tu mensaje ha sido enviado exitosamente.';
                    contactForm.reset();
                } else {
                    statusMessage.className = 'error';
                    statusMessage.textContent = result.message || 'Hubo un error al enviar el mensaje.';
                }
            } catch (error) {
                statusMessage.className = 'error';
                statusMessage.textContent = 'Hubo un error de red. Por favor, revisa tu conexión.';
            } finally {
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Mensaje';
                }, 4000);
            }
        });
    }


    // --- INICIALIZACIÓN GENERAL ---
    renderizarInicio();
    populateFilters();
    renderizarProductosTienda();
    if(document.getElementById('catalogo-lista')) { 
        renderCatalogo(); 
    }

}); // Fin de DOMContentLoaded
