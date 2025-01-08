# TypeScript Type Error: 'string[]' is not assignable to type 'string'
This repository demonstrates a common TypeScript error: attempting to pass an array of strings to a function expecting a single string argument.
The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides the corrected version.
The error arises because the `greeter` function is explicitly typed to accept a single string (`person: string`) but receives an array of strings (`string[]`). TypeScript's type system catches this incompatibility at compile time, preventing runtime errors.
The solution involves either modifying the `greeter` function to accept an array, or changing how the function is called to pass a single string.  The provided solution showcases both methods.