# Builder Track Weekly Report — Week 1

**Name:** Oluwaseun Ajao
**Week Ending:** 03-05-2026 - 03-26-2026

## Courses Completed

## Key Learnings

**Refresh my memenory on this topics:**

- Smart Contract Basics

1. Intro to Script
2. Program Languages for Script
3. Invoke Scripts via Syscalls
4. Regulate Scripts via Cycle Limits
5. VM Selection
6. VM Version History
7. Type ID for Upgradable Scripts
8. Spawn: Direct Cross-Script Calls
9. Inter-Process Communication (IPC) in Scripts
10. Debug Scripts
11. Upgrade Scripts
12. Common Error Codes
13. Script Testing Guide
14. Fuzzing CKB Scripts

- ([Nervos: An In-Depth Overview of a Blockchain Network Built for Modularity](https://www.nervos.org/knowledge-base/nervos_overview_of_a_layered_blockchain))
**Undestand that**
Nervos is a modular blockchain network built from the ground up to ensure outstanding security, decentralization, flexibility, and interoperability on the base layer and unparalleled scalability on the upper layers. The Nervos Layer 1, called the Common Knowledge Base (CKB), leverages Proof-of-Work for consensus, a novel generalized UTXO model for accounting, and a RISC-V instruction set-based virtual machine for transaction and smart contract execution.

**Modular vs. Monolithic Blockchains**
To understand Nervos’ design and value proposition, it’s first worth looking at the key problem all blockchains inherently face and the two design approaches they typically pursue to solve it.
The three main tasks blockchains perform include:

1. Executing transactions, which refers to how nodes process pending transactions and progress the state of the blockchain. This process occurs in a so-called “execution environment,” which typically includes a virtual computer like Ethereum’s Virtual Machine (EVM) or Nervos’ CKB-VM.
2. Guaranteeing data availability, which means making all transaction-related data available to all nodes in the blockchain network. This is crucial because it allows all network participants to independently verify transactions and compute the blockchain’s state without needing to trust each other.
3. Achieving consensus on the true state of the blockchain, which is necessary because blockchains fundamentally represent widely distributed databases that must be synchronized, independently verified, and trusted by all database holders. If network participants can’t agree on the correct state of the database in real time, then the blockchain is effectively useless.

**Security and Decentralization**
Picking the desired consensus mechanism is one of the first architectural decisions blockchains make when bootstrapping. Consensus mechanisms represent formalized protocols or rules that blockchains utilize to achieve sustained agreement on the correct state of the ledger among participating nodes.
The critical thing to note here is that—while all consensus mechanisms effectively leverage the same “carrot and stick” incentive model—the game-theoretical results they manifest concerning security and decentralization aren’t the same.

**Flexibility and Interoperability**
Beyond decentralization and security, the ideal base layer for an adequately designed modular blockchain must be highly flexible and interoperable. In this context, flexibility implies a highly generalized or “abstract” blockchain architecture that allows developers to build more comprehensive system and application primitives by default or without requiring core protocol updates or hard forks. Interoperability refers to the blockchain’s ability to communicate and connect with other heterogeneous blockchains, Layer 2 networks, or even Web2 systems. These two features combined ensure that the modular blockchain’s Layer 1 remains future-proof, which—due to the challenges of hard forking—is among the most desirable properties any blockchain network can have.

**Scalability**
Nervos’ fundamental value proposition lies in its layered or modular architecture that allows it to scale to millions of transactions per second through many diverse Layer 2 networks without sacrificing security or decentralization. This is because Nervos’ Layer 1, the CKB, is designed primarily for state verification, whereas Layer 2 networks are used for computation or state generation.

**A Breakthrough in Tokenomics**
The key objective of tokenomics—the science of designing the underlying economics of blockchain systems—is to secure long-term sustainability.

**CKB’s Tokenomic Design**
Concretely, CKB employs an innovative tokenomic model designed for long-term sustainability that is independent of transaction demand and has sound value-capture properties for all stakeholders. It solves the incentive-misalignment issue prevalent in other blockchains by combining two token supply sources, the base and secondary issuance, with an inflation shelter.

## Project Progress(Participated in Hackathon)

- Built a PactAgent  ([Click here to view](https://www.pactagent.online/))

PactAgent is a milestone-based escrow and payout application for Nervos CKB. A client creates a work agreement, splits the budget into milestones, funds the agreement from a connected wallet, and a worker submits proof for each milestone. A background agent then watches the agreement lifecycle and advances it toward payout, refund, expiry, or dispute handling.

PactAgent allows two participants to coordinate work and payment through a milestone contract flow:

1. The client connects a CCC-compatible wallet and signs an authentication challenge.
2. The client creates a milestone agreement with:
   - title and description
   - worker address
   - optional worker Fiber public key
   - dispute window and deadline
   - proof type
   - reviewer mode
   - payout network
   - one or more milestones with fixed amounts
3. The client funds the agreement on CKB.
4. The worker submits proof for the active milestone.
5. The agent validates the next step and moves the agreement into review.
6. Depending on reviewer mode, the agent or client approves payout, or a dispute is opened.
7. Settlement is attempted over Fiber when configured, otherwise on CKB L1.
8. After a milestone is paid, the next one becomes active until the agreement is complete.