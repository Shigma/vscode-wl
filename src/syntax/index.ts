import mergeSyntax from './mergeSyntax'
import MacroParser from './macroParser'
import Traverser from './traverser'

export {
  mergeSyntax,
  MacroParser,
  Traverser,
}

export type Captures = Record<string, {
  name?: string
  patterns?: SlotRule[]
}>

export interface Rule {
  match?: string
  begin?: string
  end?: string
  name?: string
  contentName?: string
  include?: string
  captures?: Captures
  beginCaptures?: Captures
  endCaptures?: Captures
  patterns?: SlotRule[]
}

export type SlotRule = Rule | string

export interface Syntax {
  _name: string
  repository: Record<string, Rule>
}

export interface BaseSyntax extends Syntax {
  patterns: Rule[]
  _plugins: string[]
}

export type Repository = Record<string, Rule>
