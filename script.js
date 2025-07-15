      // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Portfolio Section
        const portfolioGrid = document.querySelector('.portfolio-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        // Portfolio projects data
        const projects = [
            {
                title: "LED Board Installation",
                category: "led",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eac8621-5910-4686-95f7-d1f4657ea811.png", 
                        alt: "LED board installation at a shopping mall displaying colorful advertisements",
                        desc: "We installed a 50-sqm LED board at a prominent shopping mall location, featuring high-resolution display technology for maximum impact."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efec531d-dc99-4023-8b85-bd8d22fb391d.png", 
                        alt: "Close-up view of LED board components showing technical specifications",
                        desc: "Detailed technical specifications of our custom LED board solution, engineered for durability and optimal visibility."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac1e12bf-412d-4c79-80a6-7ca986581073.png", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: "Our LED board installation at night, creating a vibrant focal point for the commercial district."
                    }
                ]
            },
            {
                title: "ACP Work",
                category: "acp",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c410fef0-bf1b-4ef4-a3fc-77878b711867.png", 
                        alt: "ACP façade installation at an educational institution's main building",
                        desc: "Completed ACP cladding for a prestigious school, featuring custom color selections to match their brand identity."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4a46d38-a3dc-47d3-a4be-1b5fc03c4e4b.png", 
                        alt: "Detailed view of ACP panel joints and architectural elements",
                        desc: "Precision engineering of ACP panels ensuring perfect alignment and weather resistance."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c24339f-1826-4a58-883b-3a9a01646a3b.png", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    }
                ]
            },
            {
                title: "E-Commerce Website",
                category: "web",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee2fdba3-cf75-458a-9544-1b30724494d2.png", 
                        alt: "Homepage of an elegant e-commerce website with featured products",
                        desc: "Modern, responsive e-commerce platform designed for optimal user experience and conversions."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c06e3649-5460-4f6c-82e0-bdd97a7258ab.png", 
                        alt: "Product showcase page with detailed descriptions and pricing",
                        desc: "Product pages featuring high-quality imagery and comprehensive product information."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e67be63-7ea2-4c1d-a4b6-191b4ca84b3b.png", 
                        alt: "Mobile view of checkout process showing seamless experience",
                        desc: "Optimized mobile checkout flow ensuring high conversion rates across all devices."
                    }
                ]
            },
            {
                title: "Mobile Banking App",
                category: "mobile",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d3afbeb-4688-4078-9c7a-96e9c6ef943a.png", 
                        alt: "Mobile app dashboard showing account summary and quick actions",
                        desc: "Intuitive dashboard design providing users with clear financial overviews."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1faa714e-621c-4968-8ddc-9634ef1ee22c.png", 
                        alt: "Transaction details screen with categorization and charts",
                        desc: "Detailed transaction analytics helping users better understand their spending."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/294a772b-a11a-4d03-b580-96855403f2b9.png", 
                        alt: "Biometric login screen demonstrating secure authentication",
                        desc: "Advanced security features including facial recognition and fingerprint login."
                    }
                ]
            },
            {
                title: "Brand Identity Design",
                category: "design",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9965294e-becc-4c7f-a4b5-a447dc25346d.png", 
                        alt: "Logo design variations showing color and typography options",
                        desc: "Comprehensive brand identity system with versatile logo applications."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b2699b7-f37b-4a4e-a4d9-cdbf502be463.png", 
                        alt: "Brand collateral including business cards and stationary",
                        desc: "Printed materials maintaining perfect brand consistency across touchpoints."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e9a5260-3c65-409f-92b2-96f0e93b1f81.png", 
                        alt: "Digital applications of brand identity across various platforms",
                        desc: "Digital brand implementation ensuring recognition across all online platforms."
                    }
                ]
            },
            {
                title: "Digital Marketing Campaign",
                category: "marketing",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ba0349d-4ba0-4b16-8519-4915ebb49161.png", 
                        alt: "Social media campaign visuals showing different ad creatives",
                        desc: "Multi-platform social media campaign driving engagement and conversions."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c773f7dd-0a5f-40b1-a05a-a63929bb1a4d.png", 
                        alt: "Analytics dashboard showing campaign performance metrics",
                        desc: "Data-driven campaign optimization based on real-time performance analytics."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/859443a2-9b88-4c4b-998d-32d8ddb03bf1.png", 
                        alt: "Email marketing templates with responsive design",
                        desc: "Custom email marketing templates designed for high open and click-through rates."
                    }
                ]
            },

        
            {
                title: "LED Board Installation",
                category: "led",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eac8621-5910-4686-95f7-d1f4657ea811.png", 
                        alt: "LED board installation at a shopping mall displaying colorful advertisements",
                        desc: "We installed a 50-sqm LED board at a prominent shopping mall location, featuring high-resolution display technology for maximum impact."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efec531d-dc99-4023-8b85-bd8d22fb391d.png", 
                        alt: "Close-up view of LED board components showing technical specifications",
                        desc: "Detailed technical specifications of our custom LED board solution, engineered for durability and optimal visibility."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac1e12bf-412d-4c79-80a6-7ca986581073.png", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: "Our LED board installation at night, creating a vibrant focal point for the commercial district."
                    }
                ]
            },

             {
                title: "LED Board Installation",
                category: "led",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eac8621-5910-4686-95f7-d1f4657ea811.png", 
                        alt: "LED board installation at a shopping mall displaying colorful advertisements",
                        desc: "We installed a 50-sqm LED board at a prominent shopping mall location, featuring high-resolution display technology for maximum impact."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efec531d-dc99-4023-8b85-bd8d22fb391d.png", 
                        alt: "Close-up view of LED board components showing technical specifications",
                        desc: "Detailed technical specifications of our custom LED board solution, engineered for durability and optimal visibility."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac1e12bf-412d-4c79-80a6-7ca986581073.png", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: "Our LED board installation at night, creating a vibrant focal point for the commercial district."
                    }
                ]
            },

             {
                title: "LED Board Installation",
                category: "led",
                images: [
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eac8621-5910-4686-95f7-d1f4657ea811.png", 
                        alt: "LED board installation at a shopping mall displaying colorful advertisements",
                        desc: "We installed a 50-sqm LED board at a prominent shopping mall location, featuring high-resolution display technology for maximum impact."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efec531d-dc99-4023-8b85-bd8d22fb391d.png", 
                        alt: "Close-up view of LED board components showing technical specifications",
                        desc: "Detailed technical specifications of our custom LED board solution, engineered for durability and optimal visibility."
                    },
                    { 
                        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac1e12bf-412d-4c79-80a6-7ca986581073.png", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: "Our LED board installation at night, creating a vibrant focal point for the commercial district."
                    }
                ]
            }
        ];
        
        // Display projects
        function displayProjects(filter = 'all') {
            portfolioGrid.innerHTML = '';
            
            const filteredProjects = filter === 'all' ? 
                projects : projects.filter(project => project.category === filter);
                
            filteredProjects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.className = 'portfolio-item';
                projectItem.dataset.category = project.category;
                
                projectItem.innerHTML = `
                    <img src="${project.images[0].src}" alt="${project.images[0].alt}">
                    <div class="portfolio-overlay">
                        <h3>${project.title}</h3>
                        <p>${project.images[0].desc}</p>
                    </div>
                `;
                
                projectItem.addEventListener('click', () => openProjectModal(project));
                portfolioGrid.appendChild(projectItem);
            });
        }
        
        // Filter projects
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                displayProjects(btn.dataset.filter);
            });
        });
        
        // Portfolio Modal
        const portfolioModal = document.querySelector('.portfolio-modal');
        const modalSlider = document.querySelector('.modal-slider');
        const modalNav = document.querySelector('.modal-nav');
        const modalClose = document.querySelector('.modal-close');
        
        function openProjectModal(project) {
            modalSlider.innerHTML = '';
            modalNav.innerHTML = '';
            
            project.images.forEach((image, index) => {
                // Add slide
                const slide = document.createElement('div');
                slide.className = 'modal-slide';
                
                slide.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                    <h3>${project.title}</h3>
                    <p>${image.desc}</p>
                `;
                
                modalSlider.appendChild(slide);
                
                // Add navigation dot
                const navItem = document.createElement('div');
                navItem.className = 'modal-nav-item';
                if (index === 0) navItem.classList.add('active');
                
                navItem.addEventListener('click', () => {
                    goToSlide(index);
                });
                
                modalNav.appendChild(navItem);
            });
            
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        modalClose.addEventListener('click', () => {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        portfolioModal.addEventListener('click', (e) => {
            if (e.target === portfolioModal) {
                portfolioModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        function goToSlide(index) {
            const slides = document.querySelectorAll('.modal-slide');
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            
            modalSlider.style.transform = `translateX(-${index * 100}%)`;
            
            document.querySelectorAll('.modal-nav-item').forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }
        
        // Display initial projects
        displayProjects();
        
        // Testimonials Section
        const testimonials = [
            {
                quote: "Black Team transformed our online presence completely. Their website redesign increased our conversions by 120% within the first month.",
                name: "Sarah Johnson",
                role: "CEO, TechSolutions Inc.",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b83ef967-c768-4224-8271-54df9306b7b8.png"
            },
            {
                quote: "The mobile app developed by Black Team exceeded all our expectations. It's intuitive, beautiful, and performs flawlessly.",
                name: "Michael Chen",
                role: "Director, Financial Services",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0652ce2-55c6-4d02-8ab0-557c1ee058e0.png"
            },
            {
                quote: "Outstanding work on our ACP installation. They delivered on time, within budget, and the quality is exceptional.",
                name: "Emily Rodriguez",
                role: "Principal, Maplewood School",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ee95514-89e2-4add-b833-f8b9b951fee5.png"
            },
            {
                quote: "Our LED display project was complex, but Black Team managed everything perfectly from concept to installation.",
                name: "David Wilson",
                role: "Marketing Director, Retail Group",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d019499-43e4-4062-a58d-b91095ce66dd.png"
            },
            {
                quote: "Working with Black Team was a game-changer for our brand. Their strategic consultation was worth every penny.",
                name: "Jessica Lee",
                role: "Founder, Lifestyle Brand",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d40210f7-7e60-4f6b-8539-c94304560699.png"
            }
        ];
        
        const testimonialsSlider = document.querySelector('.testimonials-slider');
        const sliderDots = document.querySelector('.slider-nav');
        let currentTestimonial = 0;
        
        function displayTestimonials() {
            testimonialsSlider.innerHTML = '';
            
            testimonials.forEach((testimonial, index) => {
                const testimonialItem = document.createElement('div');
                testimonialItem.className = `testimonials-slide ${index === currentTestimonial ? 'active' : ''}`;
                
                testimonialItem.innerHTML = `
                    <div class="client-img">
                        <img src="${testimonial.img}" alt="Portrait of ${testimonial.name}, ${testimonial.role}">
                    </div>
                    <p class="client-quote">"${testimonial.quote}"</p>
                    <h4 class="client-name">${testimonial.name}</h4>
                    <p class="client-role">${testimonial.role}</p>
                `;
                
                testimonialsSlider.appendChild(testimonialItem);
            });
            
            // Update dots
            sliderDots.innerHTML = '';
            testimonials.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `slider-dot ${index === currentTestimonial ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    currentTestimonial = index;
                    displayTestimonials();
                });
                sliderDots.appendChild(dot);
            });
        }
        
        function rotateTestimonials() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            displayTestimonials();
        }
        
        // Display initial testimonials
        displayTestimonials();
        
        // Rotate testimonials every 5 seconds
        setInterval(rotateTestimonials, 5000);
        
        // Contact Form Submission
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
        
        // Add animation on scroll
        function animateOnScroll() {
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial styles for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);