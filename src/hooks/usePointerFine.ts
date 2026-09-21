import { useMediaQuery } from './useMediaQuery'

export function usePointerFine() {
  return useMediaQuery('(hover: hover) and (pointer: fine)')
}
