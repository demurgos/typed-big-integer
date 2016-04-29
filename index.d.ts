declare let bigInt: bigInt.StaticBigInt;

declare namespace bigInt {
  type NumOrInt = number | bigInt.BigInt; // Private alias for legibility

  /**
   * BigInt
   *
   * Method Chaining
   * Note that bigInt operations return new bigInts, which allows you to chain methods
   */
  export interface BigInt {
    /**
     * abs()
     *
     * Returns the absolute value of a bigInt.
     *
     * - bigInt(-45).abs() => 45
     * - bigInt(45).abs() => 45
     */
    abs(): BigInt;

    /**
     * add(number)
     *
     * Performs addition.
     *
     * - bigInt(5).add(7) => 12
     *
     * @param number
     */
    add(number: NumOrInt): BigInt;

    /**
     * and(number)
     *
     * Performs the bitwise AND operation. The operands are treated as if they were represented using two's complement
     * representation.
     *
     * - bigInt(6).and(3) => 2
     * - bigInt(6).and(-3) => 4
     */
    and(number: NumOrInt): BigInt;

    /**
     * compare(number)
     *
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0. If the first number is
     * greater, it returns 1. If the first number is lesser, it returns -1.
     *
     * - bigInt(5).compare(5) => 0
     * - bigInt(5).compare(4) => 1
     * - bigInt(4).compare(5) => -1
     */
    compare(number: NumOrInt): number;

    /**
     * compareAbs(number)
     *
     * Performs a comparison between the absolute value of two numbers.
     *
     * - bigInt(5).compareAbs(-5) => 0
     * - bigInt(5).compareAbs(4) => 1
     * - bigInt(4).compareAbs(-5) => -1
     */
    compareAbs(number: NumOrInt): number;

    /**
     * compareTo(number)
     *
     * Alias for the compare method.
     */
    compareTo(number: NumOrInt): number

    /**
     * divide(number)
     *
     * Performs integer division, disregarding the remainder.
     *
     * - bigInt(59).divide(5) => 11
     */
    divide(number: NumOrInt): BigInt;

    /**
     * divmod(number)
     *
     * Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder
     * will match the sign of the dividend.
     *
     * - bigInt(59).divmod(5) => {quotient: bigInt(11), remainder: bigInt(4) }
     * - bigInt(-5).divmod(2) => {quotient: bigInt(-2), remainder: bigInt(-1) }
     */
    divmod(number: NumOrInt): {quotient: BigInt, remainder: BigInt}; // TODO: define a DivmodResult interface

    /**
     * eq(number)
     *
     * Alias for the equals method.
     */
    eq(number: NumOrInt): boolean;

    /**
     * equals(number)
     *
     * Checks if two numbers are equal.
     *
     * - bigInt(5).equals(5) => true
     * - bigInt(4).equals(7) => false
     */
    equals(number: NumOrInt): boolean;

    /**
     * geq(number)
     *
     * Alias for the greaterOrEquals method.
     */
    geq(number: NumOrInt): boolean;

    /**
     * greater(number)
     *
     * Checks if the first number is greater than the second.
     *
     * - bigInt(5).greater(6) => false
     * - bigInt(5).greater(5) => false
     * - bigInt(5).greater(4) => true
     */
    greater(number: NumOrInt): boolean;

    /**
     * greaterOrEquals(number)
     *
     * Checks if the first number is greater than or equal to the second.
     *
     * - bigInt(5).greaterOrEquals(6) => false
     * - bigInt(5).greaterOrEquals(5) => true
     * - bigInt(5).greaterOrEquals(4) => true
     */
    greaterOrEquals(number: NumOrInt): boolean;

    /**
     * gt(number)
     *
     * Alias for the greater method.
     */
    gt(number: NumOrInt): boolean;

    /**
     * isDivisibleBy(number)
     *
     * Returns true if the first number is divisible by the second number, false otherwise.
     *
     * - bigInt(999).isDivisibleBy(333) => true
     * - bigInt(99).isDivisibleBy(5) => false
     */
    isDivisibleBy(number: NumOrInt): boolean;

    /**
     * isEven()
     *
     * Returns true if the number is even, false otherwise.
     *
     * - bigInt(6).isEven() => true
     * - bigInt(3).isEven() => false
     */
    isEven(): boolean;

    /**
     * isNegative()
     *
     * Returns true if the number is negative, false otherwise. Returns false for 0 and -0.
     *
     * - bigInt(-23).isNegative() => true
     * - bigInt(50).isNegative() => false
     */
    isNegative(): boolean;

    /**
     * isOdd()
     *
     * Returns true if the number is odd, false otherwise.
     *
     * bigInt(13).isOdd() => true
     * bigInt(40).isOdd() => false
     */
    isOdd(): boolean;

    /**
     * isPositive()
     *
     * Return true if the number is positive, false otherwise. Returns false for 0 and -0.
     *
     * - bigInt(54).isPositive() => true
     * - bigInt(-1).isPositive() => false
     */
    isPositive(): boolean;

    /**
     * isPrime()
     *
     * Returns true if the number is prime, false otherwise.
     *
     * - bigInt(5).isPrime() => true
     * - bigInt(6).isPrime() => false
     */
    isPrime(): boolean;

    /**
     * isProbablePrime([iterations])
     *
     * Returns true if the number is very likely to be positive, false otherwise. Argument is optional and determines
     * the amount of iterations of the test (default: 5). The more iterations, the lower chance of getting a false
     * positive. This uses the Fermat primality test.
     *
     * - bigInt(5).isProbablePrime() => true
     * - bigInt(49).isProbablePrime() => false
     * - bigInt(1729).isProbablePrime(50) => false
     *
     * Note that this function is not deterministic, since it relies on random sampling of factors, so the result for
     * some numbers is not always the same. Carmichael numbers are particularly prone to give unreliable results.
     *
     * For example, bigInt(1729).isProbablePrime() returns false about 76% of the time and true about 24% of the time.
     * The correct result is false.
     */
    isProbablePrime(iterations?: number): boolean; // TODO: check the argument's type, maybe it's NumOrInt

    /**
     * isUnit()
     *
     * Returns true if the number is 1 or -1, false otherwise.
     *
     * - bigInt.one.isUnit() => true
     * - bigInt.minusOne.isUnit() => true
     * - bigInt(5).isUnit() => false
     */
    isUnit(): boolean;

    /**
     * isZero()
     *
     * Return true if the number is 0 or -0, false otherwise.
     *
     * - bigInt.zero.isZero() => true
     * - bigInt("-0").isZero() => true
     * - bigInt(50).isZero() => false
     */
    isZero(): boolean;

    /**
     * leq(number)
     *
     * Alias for the lesserOrEquals method.
     */
    leq(number: NumOrInt): boolean;

    /**
     * lesser(number)
     *
     * Checks if the first number is lesser than the second.
     *
     * - bigInt(5).lesser(6) => true
     * - bigInt(5).lesser(5) => false
     * - bigInt(5).lesser(4) => false
     */
    lesser(number: NumOrInt): boolean;

    /**
     * lesserOrEquals(number)
     *
     * Checks if the first number is less than or equal to the second.
     *
     * - bigInt(5).lesserOrEquals(6) => true
     * - bigInt(5).lesserOrEquals(5) => true
     * - bigInt(5).lesserOrEquals(4) => false
     */
    lesserOrEquals(number: NumOrInt): boolean;

    /**
     * lt(number)
     *
     * Alias for the lesser method.
     */
    lt(number: NumOrInt): boolean;

    /**
     * minus(number)
     *
     * Alias for the subtract method.
     *
     * - bigInt(3).minus(5) => -2
     */
    minus(number: NumOrInt): BigInt;

    /**
     * mod(number)
     *
     * Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the
     * sign of the dividend.
     *
     * - bigInt(59).mod(5) => 4
     * - bigInt(-5).mod(2) => -1
     */
    mod(number: NumOrInt): BigInt;

    /**
     * modPow(exp, mod)
     *
     * Takes the number to the power exp modulo mod.
     *
     * - bigInt(10).modPow(3, 30) => 10
     */
    modPow(exp: NumOrInt, mod: NumOrInt): BigInt;

    /**
     * multiply(number)
     *
     * Performs multiplication.
     *
     * - bigInt(111).multiply(111) => 12321
     */
    multiply(number: NumOrInt): BigInt;

    /**
     * neq(number)
     *
     * Alias for the notEquals method.
     */
    neq(number: NumOrInt): BigInt;

    /**
     * next()
     *
     * Adds one to the number.
     *
     * - bigInt(6).next() => 7
     */
    next(): BigInt;

    /**
     * not()
     *
     * Performs the bitwise NOT operation. The operands are treated as if they were represented using two's complement
     * representation.
     *
     * - bigInt(10).not() => -11
     * - bigInt(0).not() => -1
     */
    not(): BigInt;

    /**
     * notEquals(number)
     *
     * Checks if two numbers are not equal.
     *
     * - bigInt(5).notEquals(5) => false
     * - bigInt(4).notEquals(7) => true
     */
    notEquals(number: NumOrInt): boolean;

    /**
     * or(number)
     *
     * Performs the bitwise OR operation. The operands are treated as if they were represented using two's complement
     * representation.
     *
     * - bigInt(13).or(10) => 15
     * - bigInt(13).or(-8) => -3
     */
    or(number: NumOrInt): boolean;

    /**
     * over(number)
     *
     * Alias for the divide method.
     *
     * - bigInt(59).over(5) => 11
     */
    over(number: NumOrInt): BigInt;

    /**
     * plus(number)
     *
     * Alias for the add method.
     *
     * bigInt(5).plus(7) => 12
     */
    plus(number: NumOrInt): BigInt;

    /**
     * pow(number)
     *
     * Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1.
     *
     * - bigInt(16).pow(16) => 18446744073709551616
     */
    pow(number: NumOrInt): BigInt;

    /**
     * prev(number)
     *
     * Subtracts one from the number.
     *
     * - bigInt(6).prev() => 5
     */
    prev(number: NumOrInt): BigInt;

    /**
     * remainder(number)
     *
     * - Alias for the mod method.
     */
    remainder(number: NumOrInt): BigInt;

    /**
     * shiftLeft(n)
     *
     * Shifts the number left by n places in its binary representation. If a negative number is provided, it will shift
     * right. Throws an error if n is outside of the range [-9007199254740992, 9007199254740992].
     *
     * - bigInt(8).shiftLeft(2) => 32
     * - bigInt(8).shiftLeft(-2) => 2
     */
    shiftLeft(n: number): BigInt; // TODO: check the argument's type, maybe it's NumOrInt

    /**
     * shiftRight(n)
     *
     * Shifts the number right by n places in its binary representation. If a negative number is provided, it will
     * shift left. Throws an error if n is outside of the range [-9007199254740992, 9007199254740992].
     *
     * - bigInt(8).shiftRight(2) => 2
     * - bigInt(8).shiftRight(-2) => 32
     */
    shiftRight(n: number): BigInt; // TODO: check the argument's type, maybe it's NumOrInt

    /**
     * square()
     *
     * Squares the number
     *
     * bigInt(3).square() => 9
     */
    square(): BigInt;

    /**
     * subtract(number)
     *
     * Performs subtraction.
     *
     * bigInt(3).subtract(5) => -2
     */
    subtract(number: NumOrInt): BigInt;

    /**
     * times(number)
     *
     * Alias for the multiply method.
     *
     * bigInt(111).times(111) => 12321
     */
    times(number: NumOrInt): BigInt;

    /**
     * toJSNumber()
     *
     * Converts a bigInt into a native Javascript number. Loses precision for numbers outside the range
     * [-9007199254740992, 9007199254740992].
     *
     * - bigInt("18446744073709551616").toJSNumber() => 18446744073709552000
     */
    toJSNumber(): number;

    /**
     * xor(number)
     *
     * Performs the bitwise XOR operation. The operands are treated as if they were represented using two's complement
     * representation.
     *
     * - bigInt(12).xor(5) => 9
     * - bigInt(12).xor(-5) => -9
     */
    xor(number: NumOrInt): BigInt;

    /**
     * Override Methods
     */

    /**
     * toString(radix = 10)
     *
     * Converts a bigInt to a string. There is an optional radix parameter (which defaults to 10) that converts the number to the given radix. Digits in the range 10-35 will use the letters a-z.
     *
     * - bigInt("1e9").toString() => "1000000000"
     * - bigInt("1e9").toString(16) => "3b9aca00"
     *
     * Note that arithmetical operators will trigger the valueOf function rather than the toString function. When converting a bigInteger to a string, you should use the toString method or the String function instead of adding the empty string.
     *
     * - bigInt("999999999999999999").toString() => "999999999999999999"
     * - String(bigInt("999999999999999999")) => "999999999999999999"
     * - bigInt("999999999999999999") + "" => 1000000000000000000
     *
     * Bases larger than 36 are supported. If a digit is greater than or equal to 36, it will be enclosed in angle brackets.
     *
     * - bigInt(567890).toString(100) => "<56><78><90>"
     *
     * Negative bases are also supported.
     *
     * - bigInt(12345).toString(-10) => "28465"
     *
     * Base 1 and base -1 are also supported.
     *
     * - bigInt(-15).toString(1) => "-111111111111111"
     * - bigInt(-15).toString(-1) => "101010101010101010101010101010"
     *
     * Base 0 is only allowed for the number zero.
     *
     * - bigInt(0).toString(0) => 0
     * - bigInt(1).toString(0) => Error: Cannot convert nonzero numbers to base 0.
     *
     * @param radix
     */
    toString(radix: number): string; // TODO: check the argument's type, maybe it's NumOrInt

    /**
     * valueOf()
     *
     * Converts a bigInt to a native Javascript number. This override allows you to use native arithmetic operators without explicit conversion:
     *
     * bigInt("100") + bigInt("200") === 300; //true
     */
    valueOf(): number;
  }
  
  export interface StaticBigInt {
    /**
     * bigInt(number, [base])
     *
     * You can create a bigInt by calling the bigInt function. You can pass in
     *
     * - a string, which it will parse as an bigInt and throw an "Invalid integer" error if the parsing fails.
     * - a Javascript number, which it will parse as an bigInt and throw an "Invalid integer" error if the parsing
     * fails.
     * - another bigInt.
     *
     * nothing, and it will return bigInt.zero.
     *
     * If you provide a second parameter, then it will parse number as a number in base base. Note that base can be any
     * bigInt (even negative or zero). The letters "a-z" and "A-Z" will be interpreted as the numbers 10 to 35. Higher
     * digits can be specified in angle brackets (< and >).
     *
     * @param number
     * @param base
     */
    (number?: string | NumOrInt, base?: number | bigInt.BigInt): BigInt;

    /**
     * Constants
     *
     * There are three named constants already stored that you do not have to construct with the bigInt function
     * yourself:
     *
     * - bigInt.one, equivalent to bigInt(1)
     * - bigInt.zero, equivalent to bigInt(0)
     * - bigInt.minusOne, equivalent to bigInt(-1)
     *
     * The numbers from -999 to 999 are also already prestored and can be accessed using bigInt[index], for example:
     *
     * - bigInt[-999], equivalent to bigInt(-999)
     * - bigInt[256], equivalent to bigInt(256)
     */
    one: BigInt;
    zero: BigInt;
    minusOne: BigInt;
    // TODO: Add support for prestored values

    /**
     * gcd(a, b)
     *
     * Finds the greatest common denominator of a and b.
     *
     * - bigInt.gcd(42,56) => 14
     */
    gcd(a: NumOrInt, b: NumOrInt): BigInt;

    /**
     * isInstance(x)
     *
     * Returns true if x is a BigInteger, false otherwise.
     *
     * - bigInt.isInstance(bigInt(14)) => true
     * - bigInt.isInstance(14) => false
     */
    isInstance(x: any): boolean;

    /**
     * lcm(a,b)
     *
     * Finds the least common multiple of a and b.
     *
     * bigInt.lcm(21, 6) => 42
     */
    lcm(a: NumOrInt, b: NumOrInt): BigInt;

    /**
     * max(a,b)
     *
     * Returns the largest of a and b.
     *
     * - bigInt.max(77, 432) => 432
     */
    max(a: NumOrInt, b: NumOrInt): BigInt;

    /**
     * min(a,b)
     *
     * Returns the smallest of a and b.
     *
     * - bigInt.min(77, 432) => 77
     *
     * @param a
     * @param b
     */
    min(a: NumOrInt, b: NumOrInt): BigInt;

    /**
     * randBetween(min, max)
     *
     * Returns a random number between min and max.
     *
     * - bigInt.randBetween("-1e100", "1e100")=> (for example)
     *     8494907165436643479673097939554427056789510374838494147955756275846226209006506706784609314471378745
     *
     * @param min
     * @param max
     */
    randBetween(min: NumOrInt, max: NumOrInt): BigInt;
  }
}

export = bigInt;
