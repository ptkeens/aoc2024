/**
 * https://adventofcode.com/2024/day/1
 */

import { splitStringsFromInput, stripInput } from '../../util'

export const demoInput = stripInput(`
3   4
4   3
2   5
1   3
3   9
3   3`)

type Input = string
type Output = [number, number][]

export const valueTuplesFromArrays = (arr1: number[], arr2: number[]) => {
    if (arr1.length != arr2.length) {
        throw new Error('Arrays must be of identical length!')
    }

    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push([arr1[i], arr2[i]])
    }

    return result
}

export const uniqueValues = (a: number[]): number[] => {
    const set = new Set<number>()
    for (const val of a) {
        if (!set.has(val)) {
            set.add(val)
        }
    }
    return Array.from(set)
}

export const sorter = (a: number, b: number): number => a - b
export const convertInput = (input: Input): [number[], number[]] => {
    const split = splitStringsFromInput(input)
    const extracted = split.reduce(
        (acc: { first: number[]; second: number[] }, row) => {
            const [first, second] = row.split(/\s+/)
            return {
                first: [...acc.first, parseInt(first.trim())],
                second: [...acc.second, parseInt(second.trim())],
            }
        },
        {
            first: [],
            second: [],
        }
    )

    return [extracted.first.sort(sorter), extracted.second.sort(sorter)]
}

export const max = (arr: number[]) => arr.slice().sort(sorter).pop()
export const min = (arr: number[]) => arr.slice().sort(sorter).shift()

export const diff = (input: number[]): number => max(input)! - min(input)!

export const run = (input: string) => {
    const [first, second] = convertInput(input)
    const tuples = valueTuplesFromArrays(
        uniqueValues(first),
        uniqueValues(second)
    )
    const total = tuples.reduce((acc, tup) => {
        return acc + diff(tup)
    }, 0)

    return total
}

export default () => {
    const result = run(demoInput)
    console.log(`Result of testMain: ${result}`)
}
