import { describe, it, expect } from 'bun:test'
import {
    convertInput,
    demoInput,
    diff,
    run,
    uniqueValues,
    valueTuplesFromArrays,
} from '.'

describe('Day 1 tests', () => {
    describe('convertInput', () => {
        it('Should convert the input', () => {
            const [first, second] = convertInput(demoInput)
            expect(first).toBeArrayOfSize(6)
            expect(second).toBeArrayOfSize(6)
            expect(first.every((a) => Number.isInteger(a))).toBeTrue()
            expect(second.every((a) => Number.isInteger(a))).toBeTrue()

            expect(first).toMatchObject([1, 2, 3, 3, 3, 4])
            expect(second).toMatchObject([3, 3, 3, 4, 5, 9])
        })
    })

    describe('uniqueValues', () => {
        it('should return a numeric array with unique values', () => {
            const input = [1, 1, 2, 3, 3, 4]
            const output = uniqueValues(input)
            expect(output).toMatchObject([1, 2, 3, 4])
        })
    })

    describe('diff', () => {
        it('should return the difference between values in a tuple', () => {
            const input = [1, 2]
            const output = diff(input)
            expect(output).toBe(1)
        })
    })

    describe('valueTuplesFromArrays', () => {
        it('Should error out if the arrays are not of the same length', () => {
            const arr1 = [1, 2, 3]
            const arr2 = [3, 4]

            expect(() => valueTuplesFromArrays(arr1, arr2)).toThrow()
        })

        it('Should return tuples of equal length arrays', () => {
            const arr1 = [1, 2, 3]
            const arr2 = [4, 5, 6]

            const result = valueTuplesFromArrays(arr1, arr2)
            expect(result).toMatchObject([
                [1, 4],
                [2, 5],
                [3, 6],
            ])
        })
    })

    describe('demo input', () => {
        it('Should return the sum of diffs', () => {
            const sum = run(demoInput)
            expect(sum).toBe(11)
        })
    })
})
