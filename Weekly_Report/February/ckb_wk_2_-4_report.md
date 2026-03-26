# Builder Track Weekly Report — Week 1

**Name:** Oluwaseun Ajao
**Week Ending:** 02-12-2026 - 02-26-2026

## Courses Completed

## Key Learnings

**Refresh my memenory on this topics:**

- Build DApp
    1. Transfer CKB
    2. Store Data on Cell
    3. Create a Fungible Token
    4. Create a DOB
    5. Build a Simple Lock

- ([CKB transaction structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md))

**Understand the following: It falls in two part, part 1 which talks about the core features and part 2 which talks about the extensions:**

1. Part 1: Core Features

    - Value storage which talks about how transaction destroys some outputs created in previous transactions and creates some new outputs. The transaction destroys the cells in `inputs` and creates the cells in `outputs`
    - Cell Data whcih talks about instead of holding the token value, CKB cell can store arbitrary data as well. The field `outputs_data` is a parallel array of outputs. The data of the i-th cell in `outputs` is the i-th item in `outputs_data`.
    - Code Locating: The cell has two fields which type is `Script`. The CKB VM will run the `lock` scripts of all the cells in inputs, and run the `type` scripts of all the cells in both inputs and outputs.
    - Lock Script: This talk about the every cell having a lock script. The lock script must run when the cell is used as an input in a transaction. When the script only appears in the outputs, it is not required to reveal the corresponding code in `cell_deps`. A transaction is valid only when all the lock scripts in the inputs exit normally. Since the script runs on inputs, it acts as a lock to control who can unlock and destroy the cell, as well as spend the capacity stored in the cell.
    - Type Script: Type script is similar to lock script, with two differences:

        1. Type script is optional.
        2. CKB run the type scripts in both inputs and outputs in a transaction.

2. Part 2: Extensions

    - Dep Group: Dep Group is a cell which bundles several cells as its members. When a dep group cell is used in cell_deps, it has the same effect as adding all its members into `cell_deps`.
    - Upgradable Script: Because a script locates its code via cell data hash, once a cell is created its associated script code cannot change, since it is known infeasible to find a different piece of code that has the same hash. However, sometimes we do want to change the code without modifiying the script refers to it.
    - Type ID: Type ID describes a way of using a special type script which can create a singleton type - there's only one live cell of this type. With Type ID nobody could create another code cell with the same type script hash, which makes it a useful companion to `Type` hash type.
    - Header Deps: Header Deps allows the script to read block headers. This feature has some limitation to ensure the transaction is determined.
    - Other Fields: The field since prevents a transaction been mined before a specific time. It already has its own RFC. The field version is reserved for future usage. It must equal 0 in current version.
    - Exceptions: There are two special transactions in the system.
    The first one is the cellbase, which is the first transaction in every block. The cellbase transaction has only one dummy input. In the dummy input, the previous_outpoint does not refer to any cell but set to a special value. The since must be set to the block number. The outputs of the cellbase are the reward and transaction fees for an older block in the chain. Cellbase is special because the output capacities do not come from inputs.

- ([CKB data structure basics)](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md))
**This section talks about the Data Structures of Nervos CKB, the following was treated**

    1. Cell
    2. Script
    3. Transaction
    4. Block

- ([Learnt about Mining)](https://docs.nervos.org/docs/mining/guide))
**Understand the steps involved**
    1. Research and Planning.
    2. Select Your Mining Hardware
    3. Select a Wallet
    4. Select a Mining Pool
    5. Set Up and Configure Your CKB Miner

## Project Progress

- Built an Inherit Timelock Vault ([Click here to view](https://inherit-vault.vercel.app/))

## Features

- Create a vault for any valid CKB address
- Choose an unlock condition by block height or timestamp
- Store owner name and memo on-chain inside the vault cell data
- View created vaults from a local owner index stored in `localStorage`
- Re-import a vault by transaction hash if the local index is lost
- Scan the chain for vaults created for the connected beneficiary wallet
- Verify a vault directly from its transaction hash and output index
- Claim a live vault once the unlock condition is satisfied
- Send optional "vault created" and "vault claimable" emails through a Vercel serverless function backed by Resend