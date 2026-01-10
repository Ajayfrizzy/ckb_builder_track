## Builder Track Weekly Report — Week 2

**Name:** Oluwaseun Ajao
**Week Ending:** 01-14-2026

---

### Courses Completed


-  **Computation Structures:**

  - Began exploring [MIT 6.004: Computation Structures](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/) to support low-level understanding relevant to CKB VM.
  - Objectives :
    - Ultimately understand the **RISC-V** ISA and what makes the use of this ISA in the CKB-VM a unique design choice.
    - Explore why adopting a general-purpose instruction set like RISC-V can offer greater flexibility, verifiability, and toolchain support compared to custom VMs used by other blockchains.
  - ([My First Testnet](https://pudge.explorer.nervos.org/transaction/0xb5cb150d77af234811837747bb129f22ff3cf4497b0c12547096677b3a66df54))
  - ([My second Testnet](https://testnet.explorer.nervos.org/transaction/0x4156dd113565318bbd305ca89d36e8a9c7517b2facb8e83f3e94914f27428974))

---

### Key Learnings

- **Rust programming**
  - **Ownership model**: How Rust handles memory safety via unique ownership
  - **References and borrowing**: Differentiating mutable and immutable references, dereferencing, and the concept of "borrowing instead of copying"
  - **Stack vs Heap vs Binary**: Gained intuition for how Rust stores variables, and how large/unsized data is moved to the heap, while constant and static variables are stored inside the compiled binary.
  - **Pattern matching and control flow**: Learned to match over multiple variables, use `if let`, `match`, and create clean conditional logic
  - **Collections**: Used `Vec` and `String`, understanding heap allocation and methods like `push`, `pop`, and indexing
  - **Rust Macros**: Identified macros like `vec![]` and `println!` and how they differ from regular functions

####   

- **MIT 6.004: Computation Structures**
  - **Basics of information** : 
    - Shannon's entropy as a measure of the average information provided by observations from a given distribution.
    - Fixed-length encodings: encoding positive integers (binary, hexadecimal bases), encoding signed integers (two's complement), encoding characters (ASCII).
    - Error detection and correction, the Hamming distance.
  - **The digital abstraction** : 
    - Using voltages digitally: a 0 bit is represented by voltages below a threshold, a 1 bit is represented by voltages above a (higher) threshold. The case for noise margins.
  - **CMOS**:
    - Physical and electrical view: why they can be modeled as simple voltage-controlled switches.
    - Physical implementation of simple combinational gates (NAND, NOR) using CMOS.
    - Timing issues: propagation and contamination delays.
  - **Combinational logic** :
    - Truth tables, Karnaugh maps.
    - MUX (multiplexer) as an implementation of boolean functions.
    - ROM (read-only memory) as an implementation of multiple boolean output functions (Address => entry).



### Practical Progress

- Completed several **Rustlings exercises and quizzes**, debugging issues such as unused imports, scope errors, and macro usage.
- Practiced reading and interpreting **assembly-level ideas** from C code.

---

###
