import { useState, type ReactElement, type ReactNodeArray, type ReactPortal } from 'react'
import CombinedSelect from '@ui/design-system/controls/CombinedSelect'

const BRANDS = [
  {
    label: 'Mitsubishi',
    code: 'Mitsubishi',
  },
  {
    label: 'Subaru',
    code: 'Subaru',
  },
  {
    label: 'Toyota',
    code: 'Toyota',
  },
  {
    label: 'Другая марка',
    code: 'dm',
  },
]

const MODELS = [
  {
    label: 'Lancer',
    code: 'Lancer',
  },
  {
    label: 'Impreza',
    code: 'Impreza',
  },
  {
    label: 'Camry',
    code: 'Camry',
  },
  {
    label: 'Другая модель',
    code: 'dm',
  },
]

const TYPES = [
  {
    label: 'Легковое ТС',
    code: 'lts',
  },
  {
    label: 'Грузовое ТС',
    code: 'gts',
  },
]

const POWERS = [
  {
    label: '150 л. с.',
    code: '150',
  },
  {
    label: '160 л. с.',
    code: '160',
  },
  {
    label: '170 л. с.',
    code: '170',
  },
]

const hideValueByCondition = {
  /**
   * Скрываем в селекте значение поля brand в случае, если выбран custom-brand -
   * другая марка введена вручную и надпись "Другая марка", выбранная в поле brand должна быть скрыта.
   * Аналогично для "Другая модель"
   */
  brand: (fields: CombinedSelectField[]) =>
    Boolean(fields.find(f => f.name === 'custom-brand')?.value),
  model: (fields: CombinedSelectField[]) =>
    Boolean(fields.find(f => f.name === 'custom-model')?.value),
} as any

function Sandbox(args: typeof sandboxDefaultProps) {
  const { fields } = args

  const [fieldsState, setFieldsState] = useState(fields)

  const [locked, setLocked] = useState(false)

  const onFieldChange = (field, newValue) => {
    return new Promise<void>(res => {
      setLocked(true)
      setTimeout(() => {
        const currentFieldIndex = fieldsState.findIndex(f => f.name === field.name)
        let nextFieldName = fieldsState[currentFieldIndex + 1]?.name

        if (field.name === 'brand' && newValue !== 'dm') {
          nextFieldName = fieldsState[currentFieldIndex + 2]?.name
        }

        if (field.name === 'model' && newValue !== 'dm') {
          nextFieldName = fieldsState[currentFieldIndex + 2]?.name
        }

        const newFields = fieldsState.map((f, index) => {
          if (f.name === field.name) {
            const isCreated = newValue && !f.items?.find(i => i.code === newValue)

            const newItems =
              isCreated && f.items ? [...f.items, { code: newValue, label: newValue }] : f.items

            return { ...f, value: newValue, items: newItems }
          }

          if (!newValue && index > currentFieldIndex) {
            return { ...f, value: null, items: [] }
          }

          if (f.name === 'custom-brand' && field.name === 'brand') {
            return { ...f, hidden: newValue !== 'dm' }
          }

          if (f.name === 'custom-model' && (field.name === 'model' || field.name === 'brand')) {
            return { ...f, hidden: newValue !== 'dm' }
          }

          if (f.name === 'model' && field.name === 'brand' && newValue === 'dm') {
            return { ...f, items: MODELS, value: 'dm' }
          }

          if (nextFieldName && nextFieldName === f.name) {
            switch (f.name) {
              case 'model':
                return { ...f, items: MODELS }
              case 'power':
                return { ...f, items: POWERS }
              case 'type':
                return { ...f, items: TYPES }
              default:
                return f
            }
          }

          return f
        })

        setFieldsState(newFields)
        setLocked(false)
        res()
      }, 1000)
    })
  }

  return (
    <div style={{ width: '440px', padding: '180px 32px' }}>
      <CombinedSelect {...args} fields={fieldsState} locked={locked} onChange={onFieldChange} />
    </div>
  )
}

export default Sandbox

export const defaultSelectsProps = {
  creatable: false,
  disabled: false,
  locked: false,
  hidden: false,
  showTooltip: false,
  scrollTopOffset: 0,
}

const sandboxDefaultProps = {
  id: 'car-brand-model-17',
  name: 'car-brand-model',
  caption: 'Марка, модель, мощность',
  placeholder: 'Выберите',
  hideValueByCondition,
  errors: [],
  hint: 'Выбор автомобиля - важный шаг перед оформлением страховки на него',
  fields: [
    {
      name: 'brand',
      caption: 'Марка',
      items: BRANDS,
      value: null,
      placeholder: 'Выберите марку ТС',
    },
    {
      name: 'custom-brand',
      caption: 'Марка',
      items: [],
      value: null,
      placeholder: 'Введите название марки',
    },
    { name: 'model', caption: 'Модель', items: [], value: null, placeholder: 'Выберите модель ТС' },
    {
      name: 'custom-model',
      caption: 'Модель',
      items: [],
      value: null,
      placeholder: 'Введите название модели',
    },
    {
      name: 'power',
      caption: 'Мощность',
      items: [],
      value: null,
      placeholder: 'Укажите мощность двигателя',
    },
    { name: 'type', caption: 'Тип', items: [], value: null, placeholder: 'Выберите тип ТС' },
  ],
  ...defaultSelectsProps,
  creatable: true,
}

Sandbox.defaultProps = sandboxDefaultProps

interface CombinedItem {
  [key: string]: unknown
  fieldName: string
  code: string | number
  label: string
  tooltip: string
  disabled: boolean
  isSelected: boolean
  isCreatable: boolean
}

interface CombinedSelectField {
  [key: string]: unknown
  items?: CombinedItem[]
  placeholder?: string
  creatable?: boolean
  searchable?: boolean
  searchInDropdown?: boolean
  notFoundMessage?: string
  async?: boolean
  clearable?: boolean
  checkboxOptions?: boolean
  pickAllOptions?: boolean
  showAllSelectedLabel?: boolean
  debounceTimer?: number | null
  acyncSearchMessage?: string
  onOptionsSearch?: (query: string) => Promise<void | CombinedItem[]>
  optionsLoadingErrorMessage?: string
  useFullItem?: false
  optionsTitle?: string
  isMulti?: false
  value?: string | number | null
  autoComplete?: 'on' | 'off'
  onChange?: (props: unknown, newValue: string | number | null) => void | Promise<void>
  onEditStart?: (props: unknown) => void | Promise<void>
  onEditEnd?: (props: unknown) => void | Promise<void>
  showValueInInput?: boolean
  isCombined?: boolean
  autoOpenNextStep?: boolean
  inputDisabled?: boolean
  caption: string
  status?: 'success' | 'error' | null
  scrollTopBreakpoint?: '' | 'mobile' | 'tablet' | 'desktop'
  scrollTopOffset?: number
  screenWidthShortcut?: '' | 'mobile' | 'tablet' | 'desktop'
  name: string
  hidden?: boolean
  disabled?: boolean
  locked?: boolean
  id?: string
  className?: string
  errors?: string[]
  errorIcon?: string | number | boolean | {} | ReactElement | ReactNodeArray | ReactPortal | null
  hint?: string | number | boolean | {} | ReactElement | ReactNodeArray | ReactPortal | null
  tooltip?: string
  showTooltip?: boolean
  onTooltipClick?: (props: unknown) => void
}
