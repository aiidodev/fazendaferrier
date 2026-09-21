import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { hasWebGL, prefersReducedMotion } from '../../utils/motion'
import { cn } from '../../utils/cn'

export type FieldMode = 'field' | 'cattle' | 'crop' | 'poultry'

const LABELS: Record<string, string> = {
  gado: 'Gado · pecuária',
  ave: 'Ave · granja',
  planta: 'Planta · lavoura',
}

function bronze() {
  return new THREE.MeshStandardMaterial({
    color: '#8a7354',
    metalness: 0.55,
    roughness: 0.38,
    emissive: '#2a1c10',
    emissiveIntensity: 0.12,
  })
}

function hide() {
  return new THREE.MeshStandardMaterial({
    color: '#3d3428',
    metalness: 0.4,
    roughness: 0.5,
  })
}

function moss() {
  return new THREE.MeshStandardMaterial({
    color: '#4a5a3c',
    metalness: 0.08,
    roughness: 0.72,
  })
}

function gold() {
  return new THREE.MeshStandardMaterial({
    color: '#9c8454',
    metalness: 0.7,
    roughness: 0.32,
  })
}

function makeCow() {
  const group = new THREE.Group()
  group.name = 'gado'
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.95, 6, 12), bronze())
  body.rotation.z = Math.PI / 2
  body.position.y = 0.62
  group.add(body)
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.42), hide())
  head.position.set(0.78, 0.78, 0)
  group.add(head)
  ;[-0.14, 0.14].forEach((z) => {
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.22, 6), gold())
    horn.position.set(0.7, 1.02, z)
    horn.rotation.z = -0.4
    group.add(horn)
  })
  const positions: [number, number][] = [
    [-0.28, 0.18],
    [-0.28, -0.18],
    [0.28, 0.18],
    [0.28, -0.18],
  ]
  positions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.55, 8), hide())
    leg.position.set(x, 0.28, z)
    group.add(leg)
  })
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (mesh.isMesh) {
      mesh.castShadow = false
      mesh.userData.kind = 'gado'
    }
  })
  group.userData.kind = 'gado'
  return group
}

function makeBird(x: number) {
  const group = new THREE.Group()
  group.name = 'ave'
  group.position.set(x, 0.22, 1.1)
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), gold())
  body.scale.set(1.2, 0.85, 1)
  group.add(body)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), bronze())
  head.position.set(0.16, 0.12, 0)
  group.add(head)
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 6), hide())
  beak.rotation.z = -Math.PI / 2
  beak.position.set(0.26, 0.1, 0)
  group.add(beak)
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (mesh.isMesh) mesh.userData.kind = 'ave'
  })
  group.userData.kind = 'ave'
  return group
}

function makePlant(x: number, z: number, h: number) {
  const group = new THREE.Group()
  group.name = 'planta'
  group.position.set(x, 0, z)
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, h, 6), moss())
  stem.position.y = h / 2
  group.add(stem)
  for (let i = 0; i < 4; i += 1) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6, 0, Math.PI), moss())
    leaf.scale.set(1.6, 0.25, 0.8)
    leaf.position.set(Math.cos((i * Math.PI) / 2) * 0.12, h * 0.45 + i * 0.12, Math.sin((i * Math.PI) / 2) * 0.12)
    leaf.rotation.z = 0.5
    group.add(leaf)
  }
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (mesh.isMesh) mesh.userData.kind = 'planta'
  })
  group.userData.kind = 'planta'
  return group
}

function makeGrass(count: number) {
  const geo = new THREE.ConeGeometry(0.04, 0.28, 4)
  const mat = moss()
  const mesh = new THREE.InstancedMesh(geo, mat, count)
  const dummy = new THREE.Object3D()
  for (let i = 0; i < count; i += 1) {
    dummy.position.set((Math.random() - 0.5) * 6.5, 0.12, (Math.random() - 0.5) * 4.2)
    dummy.rotation.y = Math.random() * Math.PI
    dummy.scale.set(1, 0.6 + Math.random() * 1.2, 1)
    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
  }
  mesh.userData.kind = 'planta'
  return mesh
}

type LivingFieldProps = {
  mode?: FieldMode
  className?: string
}

export function LivingField({ mode = 'field', className }: LivingFieldProps) {
  const host = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('Mova o mouse · clique no 3D')
  const enabled = typeof window !== 'undefined' && hasWebGL() && !prefersReducedMotion()

  useEffect(() => {
    const el = host.current
    if (!el || !enabled) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog('#0b1611', 8, 16)

    const camera = new THREE.PerspectiveCamera(34, el.clientWidth / el.clientHeight, 0.1, 40)
    camera.position.set(4.6, 2.4, 6.4)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight('#6b5a45', 0.7))
    const key = new THREE.DirectionalLight('#f0e6d4', 1.35)
    key.position.set(4, 6, 3)
    scene.add(key)
    const fill = new THREE.PointLight('#9c8454', 6, 12)
    fill.position.set(-3, 2, 4)
    scene.add(fill)

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(7, 48),
      new THREE.MeshStandardMaterial({ color: '#1c1812', roughness: 0.92, metalness: 0.05 }),
    )
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    const world = new THREE.Group()
    scene.add(world)

    const mobile = window.matchMedia('(max-width: 768px)').matches
    if (mode === 'field' || mode === 'crop') {
      world.add(makeGrass(mobile ? 28 : 70))
      world.add(makePlant(-1.8, -0.6, 1.1))
      world.add(makePlant(1.6, 0.4, 1.35))
      world.add(makePlant(0.4, -1.4, 0.9))
    }
    if (mode === 'field' || mode === 'cattle') {
      const cow = makeCow()
      cow.position.set(-0.4, 0, 0)
      world.add(cow)
    }
    if (mode === 'field' || mode === 'poultry') {
      world.add(makeBird(1.35))
      world.add(makeBird(1.85))
    }

    const ray = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const mouse = { x: 0, y: 0 }

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }

    const onClick = () => {
      ray.setFromCamera(pointer, camera)
      const hits = ray.intersectObjects(world.children, true)
      const kind = hits[0]?.object.userData.kind as string | undefined
      if (kind && LABELS[kind]) {
        setLabel(LABELS[kind])
        gsap.fromTo(camera.position, { z: camera.position.z }, { z: 5.4, duration: 0.8, ease: 'power3.out' })
      }
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)

    let frame = 0
    const tick = () => {
      frame = requestAnimationFrame(tick)
      world.rotation.y += (mouse.x * 0.35 - world.rotation.y) * 0.04
      world.rotation.x += (-mouse.y * 0.12 - world.rotation.x) * 0.04
      fill.intensity = 5.2 + Math.sin(performance.now() / 900) * 1.2
      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
      renderer.dispose()
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh
        if (mesh.isMesh) {
          mesh.geometry.dispose()
          const mat = mesh.material
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
          else mat.dispose()
        }
      })
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [enabled, mode])

  if (!enabled) {
    return (
      <div className={cn('flex items-center justify-center bg-forest-deep text-sand', className)}>
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase">Campo em imagem · 3D reservado ao desktop</p>
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      <div ref={host} className="h-full w-full" data-cursor="EXPLORAR" data-cursor-kind="image" />
      <p className="pointer-events-none absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.28em] text-gold uppercase md:left-10">
        {label}
      </p>
    </div>
  )
}
