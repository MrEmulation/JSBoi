// src/CPU.js

import Clock from './Clock';
import MMU from './MMU';

/**
 * The Gameboy CPU is a Z80 (8-bit) chip.
 */
class CPU {
    constructor() {
        this.clock = new Clock();
        this.mmu = new MMU();
        
        // Basic registers
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.h = 0;
        this.l = 0;

        // Special purpose register
        /*
         * Flags set dependant on the result of the last operation
         *  0x80 - produced 0
         *  0x40 - was a subtraction
         *  0x20 - lower half of the byte overflowed 15
         *  0x10 - overflowed 255 or underflowed 0 for additions/subtractions
         */
        this.f = 0;

        // Program counter
        this.pc = 0;

        // Stack pointer
        this.sp = 0;
    }
}

export default CPU;
