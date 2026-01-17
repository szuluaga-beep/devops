import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DevOpsStage {
  id: string;
  name: string;
  emoji: string;
  title: string;
  description: string;
  details: string[];
  color: string;
  cx: number;
  cy: number;
}

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './devops.html',
  styleUrl: './devops.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevopsComponent {
  selectedStage = signal<string>('plan');

  stages: DevOpsStage[] = [
    {
      id: 'plan',
      name: 'Plan',
      emoji: '📋',
      title: 'Planificación',
      description: 'Definir objetivos, requisitos y estrategia del proyecto',
      details: [
        'Reuniones de equipo',
        'Definición de requisitos',
        'Análisis de arquitectura',
        'Estimación de tareas'
      ],
      color: '#3b82f6',
      cx: 500,
      cy: 80
    },
    {
      id: 'code',
      name: 'Code',
      emoji: '💻',
      title: 'Desarrollo',
      description: 'Desarrollo del código fuente utilizando buenas prácticas',
      details: [
        'Escritura de código',
        'Code review',
        'Git version control',
        'Pair programming'
      ],
      color: '#10b981',
      cx: 780,
      cy: 140
    },
    {
      id: 'build',
      name: 'Build',
      emoji: '🔨',
      title: 'Construcción',
      description: 'Automatizar la compilación y construcción del proyecto',
      details: [
        'Compilación del código',
        'Generación de artefactos',
        'Build automation',
        'Artifact storage'
      ],
      color: '#f59e0b',
      cx: 850,
      cy: 380
    },
    {
      id: 'test',
      name: 'Test',
      emoji: '🧪',
      title: 'Pruebas',
      description: 'Ejecutar pruebas automatizadas para asegurar calidad',
      details: [
        'Pruebas unitarias',
        'Pruebas de integración',
        'Pruebas E2E',
        'Análisis de cobertura'
      ],
      color: '#8b5cf6',
      cx: 700,
      cy: 520
    },
    {
      id: 'release',
      name: 'Release',
      emoji: '🚀',
      title: 'Lanzamiento',
      description: 'Preparar la versión para producción',
      details: [
        'Versionado de releases',
        'Release notes',
        'Tag en repositorio',
        'Documentación'
      ],
      color: '#ec4899',
      cx: 450,
      cy: 560
    },
    {
      id: 'deploy',
      name: 'Deploy',
      emoji: '📦',
      title: 'Despliegue',
      description: 'Desplegar la aplicación a servidores de producción',
      details: [
        'Despliegue automatizado',
        'Blue-green deployment',
        'Canary releases',
        'Rollback capability'
      ],
      color: '#ef4444',
      cx: 200,
      cy: 480
    },
    {
      id: 'operate',
      name: 'Operate',
      emoji: '⚙️',
      title: 'Operación',
      description: 'Mantener la aplicación en producción',
      details: [
        'Gestión de recursos',
        'Administración de usuarios',
        'Cambios operacionales',
        'Mantenimiento'
      ],
      color: '#06b6d4',
      cx: 130,
      cy: 240
    },
    {
      id: 'monitor',
      name: 'Monitor',
      emoji: '👁️',
      title: 'Monitoreo',
      description: 'Supervisar rendimiento y disponibilidad',
      details: [
        'Monitoreo de métricas',
        'Alertas automáticas',
        'Recolección de logs',
        'APM y tracing'
      ],
      color: '#6366f1',
      cx: 220,
      cy: 80
    }
  ];

  selectStage(stageId: string) {
    this.selectedStage.set(stageId);
  }

  getSelectedStage() {
    return this.stages.find(s => s.id === this.selectedStage());
  }
}
