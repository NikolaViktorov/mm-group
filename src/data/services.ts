import {
  Paintbrush,
  BrickWall,
  Trees,
  Construction,
  Truck,
  Package,
  Hammer,
  House,
} from 'lucide-react'

import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 1,
    title: 'Вътрешни ремонти',
    description:
      'Цялостни решения за обновяване и завършване на вътрешни пространства.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
    icon: Paintbrush,
    items: [
      'Гипсокартон',
      'Плочки',
      'Мазилки и замазки',
      'Шпакловки',
      'Окачени тавани',
      'Редене на паркет',
      'Монтиране на врати',
    ],
  },
  {
    id: 2,
    title: 'Грубо строителство',
    description:
      'Основни строителни дейности за изграждането на стабилни конструкции.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
    icon: BrickWall,
    items: [
      'Зидария',
      'Полагане на бетон',
      'Направа на кофражи',
      'Връзване на арматура',
    ],
  },
  {
    id: 3,
    title: 'Озеленяване',
    description:
      'Оформяне, обновяване и поддръжка на зелени пространства.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85',
    icon: Trees,
    items: [
      'Полагане на трева',
      'Засаждане на дървета',
      'Премахване на дървета',
    ],
  },
  {
    id: 4,
    title: 'Услуги с механизация',
    description:
      'Изкопни дейности и събаряне с помощта на строителна механизация.',
    image:
      'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=85',
    icon: Construction,
    items: [
      'Събаряне на стари постройки и сгради',
      'Изкопни дейности',
    ],
  },
  {
    id: 5,
    title: 'Транспортни услуги',
    description:
      'Организиране и извършване на транспорт на различни видове товари.',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=85',
    icon: Truck,
    items: [
      'Превоз на всякакъв вид товари',
    ],
  },
  {
    id: 6,
    title: 'Хамалски услуги',
    description:
      'Помощ при пренасяне, товарене и разтоварване на различни товари.',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=85',
    icon: Package,
    items: [
      'Хамалски услуги',
    ],
  },
  {
    id: 7,
    title: 'Къртене и почистване',
    description:
      'Дейности по къртене, почистване и извозване на строителни отпадъци.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
    icon: Hammer,
    items: [
      'Къртене',
      'Почистване',
      'Извозване',
    ],
  },
  {
    id: 8,
    title: 'Външни изолации',
    description:
      'Решения за външна изолация и подобряване на енергийната ефективност.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    icon: House,
    items: [
      'Външни изолации',
    ],
  },
]
