import type { FormRules } from 'element-plus'
export interface RulesComm extends FormRules {
  // @ts-ignore
  key: string
}
export interface Options {
  label: string
  value: string
  disabled?: boolean
}
export interface FormItem {
  label?: string
  labelWidth?: string
  required?: boolean
  rules?: FormRules
  error?: string
  showMessage?: boolean
  inlineMessage?: boolean
  size?: string
  showLabel?: boolean
}
export interface FormList {
  name: string
  type: string
  control: any // 当前type表单控件所有props
  item?: FormItem // formItem组件所有props
  config: any // 其他配置信息
  rulesComm?: string[] // 全局选择的
  customRules?: any // 自定义检验规则,这个规则会合并进item.rules
  columns?: any // 布局字段
  tableData?: any // 子表时
  options?: Options[] // radio,checkbox,select选项
}
export interface FormData {
  list: FormList[]
  form: any // form所有props
  rulesComm?: RulesComm[] // 为多个控件添加相关的检验规则
  style?: string // 表单css样式，相当于scope
  hideField?: string[] // 使用v-if隐藏的字段，用于交互
  submitBtn?: any // 用于内部提交的表单按钮
}
