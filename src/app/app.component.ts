import { Component } from '@angular/core';
import { Container, Main } from 'ng-particles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gk-portfolio';
  id = 'tsparticles';
    
    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = 'http://foo.bar/particles.json';
    
    /* or the classic JavaScript object */
    particlesOptions: any = {
      background: {
        color: {
          value: '#444'
        },
        image: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(54,42,57,1)  100%)',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover'
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble'
          }
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 4
          },
          grab: {
            distance: 400,
            links: {
              opacity: 0.5
            }
          }
        }
      },
      particles: {
        links: {
          color: {
            value: '#ffffff'
          },
          distance: 500,
          opacity: 0.4,
          width: 2
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200
            }
          },
          direction: 'none',
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out'
          }
        },
        number: {
          density: {
            enable: true
          },
          value: 15
        },
        opacity: {
          random: {
            enable: true
          },
          value: {
            min: 0.1,
            max: 0.5
          },
          animation: {
            speed: 1,
            minimumValue: 0.1
          }
        },
        size: {
          random: {
            enable: true
          },
          value: {
            min: 3,
            max: 7
          },
          animation: {
            speed: 40,
            minimumValue: 0.1
          }
        }
      }
    };

    particlesLoaded(container: Container): void {
    }
    
    particlesInit(main: Main ): void {
        
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }
}
