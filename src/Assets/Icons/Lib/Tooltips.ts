import { IconName } from '@fortawesome/fontawesome-svg-core'
import { CustomIconFactoryKeys } from 'Assets/Icons/Lib/CustomIconsLib'

export const Tooltips : Partial<Record<IconName | CustomIconFactoryKeys, string>> = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',
  times: 'Fechar',

  edit: 'Editar',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
  trash: 'Deletar',

  utensils: 'Comida',
  'glass-whiskey': 'Bebida',
  'wine-glass-alt': 'Bebida Alcoolica',
  'ellipsis-v': 'Opções',
  'ellipsis-h': 'Opções',

  'money-bill': 'Valor',
  'calendar-minus': 'Data',
  'stopwatch-20': 'Usos',
  'tachometer-alt': 'Distância',
  pix: 'pix',
}
