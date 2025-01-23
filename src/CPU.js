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
         * Flags set dependent on the result of the last operation
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

    execute_opcode(opcode) {
        switch (opcode) {
            case 0x00:
                this.opcode_00();
                break;
            case 0x01:
                this.opcode_01();
                break;
            case 0x02:
                this.opcode_02();
                break;
            case 0x03:
                this.opcode_03();
                break;
            case 0x04:
                this.opcode_04();
                break;
            case 0x05:
                this.opcode_05();
                break;
            case 0x06:
                this.opcode_06();
                break;
            case 0x07:
                this.opcode_07();
                break;
            case 0x08:
                this.opcode_08();
                break;
            case 0x09:
                this.opcode_09();
                break;
            case 0x0A:
                this.opcode_0A();
                break;
            case 0x0B:
                this.opcode_0B();
                break;
            case 0x0C:
                this.opcode_0C();
                break;
            case 0x0D:
                this.opcode_0D();
                break;
            case 0x0E:
                this.opcode_0E();
                break;
            case 0x0F:
                this.opcode_0F();
                break;
            case 0x10:
                this.opcode_10();
                break;
            case 0x11:
                this.opcode_11();
                break;
            case 0x12:
                this.opcode_12();
                break;
            case 0x13:
                this.opcode_13();
                break;
            case 0x14:
                this.opcode_14();
                break;
            case 0x15:
                this.opcode_15();
                break;
            case 0x16:
                this.opcode_16();
                break;
            case 0x17:
                this.opcode_17();
                break;
            case 0x18:
                this.opcode_18();
                break;
            case 0x19:
                this.opcode_19();
                break;
            case 0x1A:
                this.opcode_1A();
                break;
            case 0x1B:
                this.opcode_1B();
                break;
            case 0x1C:
                this.opcode_1C();
                break;
            case 0x1D:
                this.opcode_1D();
                break;
            case 0x1E:
                this.opcode_1E();
                break;
            case 0x1F:
                this.opcode_1F();
                break;
            case 0x20:
                this.opcode_20();
                break;
            case 0x21:
                this.opcode_21();
                break;
            case 0x22:
                this.opcode_22();
                break;
            case 0x23:
                this.opcode_23();
                break;
            case 0x24:
                this.opcode_24();
                break;
            case 0x25:
                this.opcode_25();
                break;
            case 0x26:
                this.opcode_26();
                break;
            case 0x27:
                this.opcode_27();
                break;
            case 0x28:
                this.opcode_28();
                break;
            case 0x29:
                this.opcode_29();
                break;
            case 0x2A:
                this.opcode_2A();
                break;
            case 0x2B:
                this.opcode_2B();
                break;
            case 0x2C:
                this.opcode_2C();
                break;
            case 0x2D:
                this.opcode_2D();
                break;
            case 0x2E:
                this.opcode_2E();
                break;
            case 0x2F:
                this.opcode_2F();
                break;
            case 0x30:
                this.opcode_30();
                break;
            case 0x31:
                this.opcode_31();
                break;
            case 0x32:
                this.opcode_32();
                break;
            case 0x33:
                this.opcode_33();
                break;
            case 0x34:
                this.opcode_34();
                break;
            case 0x35:
                this.opcode_35();
                break;
            case 0x36:
                this.opcode_36();
                break;
            case 0x37:
                this.opcode_37();
                break;
            case 0x38:
                this.opcode_38();
                break;
            case 0x39:
                this.opcode_39();
                break;
            case 0x3A:
                this.opcode_3A();
                break;
            case 0x3B:
                this.opcode_3B();
                break;
            case 0x3C:
                this.opcode_3C();
                break;
            case 0x3D:
                this.opcode_3D();
                break;
            case 0x3E:
                this.opcode_3E();
                break;
            case 0x3F:
                this.opcode_3F();
                break;
            default:
                console.warn('[JSBoi] Unknown opcode: ' + opcode.toString(16));
                break;
        }
    }

    opcode_00() { }
    opcode_01() { }
    opcode_02() { }
    opcode_03() { }
    opcode_04() { }
    opcode_05() { }
    opcode_06() { }
    opcode_07() { }
    opcode_08() { }
    opcode_09() { }
    opcode_0A() { }
    opcode_0B() { }
    opcode_0C() { }
    opcode_0D() { }
    opcode_0E() { }
    opcode_0F() { }
    opcode_10() { }
    opcode_11() { }
    opcode_12() { }
    opcode_13() { }
    opcode_14() { }
    opcode_15() { }
    opcode_16() { }
    opcode_17() { }
    opcode_18() { }
    opcode_19() { }
    opcode_1A() { }
    opcode_1B() { }
    opcode_1C() { }
    opcode_1D() { }
    opcode_1E() { }
    opcode_1F() { }
    opcode_20() { }
    opcode_21() { }
    opcode_22() { }
    opcode_23() { }
    opcode_24() { }
    opcode_25() { }
    opcode_26() { }
    opcode_27() { }
    opcode_28() { }
    opcode_29() { }
    opcode_2A() { }
    opcode_2B() { }
    opcode_2C() { }
    opcode_2D() { }
    opcode_2E() { }
    opcode_2F() { }
    opcode_30() { }
    opcode_31() { }
    opcode_32() { }
    opcode_33() { }
    opcode_34() { }
    opcode_35() { }
    opcode_36() { }
    opcode_37() { }
    opcode_38() { }
    opcode_39() { }
    opcode_3A() { }
    opcode_3B() { }
    opcode_3C() { }
    opcode_3D() { }
    opcode_3E() { }
    opcode_3F() { }
}

export default CPU;
