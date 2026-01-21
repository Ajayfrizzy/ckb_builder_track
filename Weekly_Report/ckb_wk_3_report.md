# Builder Track Weekly Report — Week 3

**Name:** Oluwaseun Ajao
**Week Ending:** 01-21-2026

## Courses Covered

- Validation Model
- Script Basics
- UDT
- WebAssembly on CKB
- Debugging
- Type ID
- Advanced Duktape Examples
- Performant WASM
- Cycle Reductions in Duktape Script
- Language Choices

## 1. **Serialization**

- Learned the **Molecule format** for encoding data structures.
- Understood fixed vs dynamic types, how headers & offsets work, and how it applies to `transaction`, `script`, and `witness` data.
- Practical impact: this clarified **how CKB calculates hashes and validates tx structure**.

## 2. **VM Syscalls**

- Learned how RISC-V scripts interact with blockchain state using syscalls like:
  - `ckb_load_cell`, `ckb_load_transaction`, `ckb_load_witness`, etc.
- Practiced **writing RISC-V assembly** to load witness/tx/cell data from VM.
- Understood **partial loading**, `CKB_SOURCE_INPUT` vs `CKB_SOURCE_GROUP_INPUT`.

## 3. **CKB-VM**

- Understood CKB-VM's architecture:
- Learned about **dynamic linking**, **code memory execution rules**, and ELF structure for script binaries.
- Key concept: code reuse via external cells (e.g. dynamic linking of token logic).

## 4. **UDT (sudt) Operations Tutorial**

- Understand how SUDT works
- Create a cell with SUDT type script and anyone-can-pay lock script.
0 Create another `empty-sudt-acp` cell with different address

## Key Learnings

- Deepened mastery of CKB’s **execution model** and the separation between:
  - Transaction structure (RFC 0022)
  - VM interaction (RFC 0009)
  - Script lifecycle (compile, hash, deploy, use)
- Internalized **how Molecule serialization** impacts hash calculation & script behavior.
