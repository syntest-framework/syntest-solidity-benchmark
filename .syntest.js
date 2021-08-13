module.exports = {
    // seed: 'test',
    population_size: 10,
    max_depth: 5,

    // mutation chances
    resample_gene_chance: 0.01,
    delta_mutation_chance: 0.8,
    sample_func_as_arg: 0.5,
    explore_illegal_values: false,

    algorithm: "DynaMOSA",
    search_time: 300,
    total_time: 60,
    iteration_budget: 1000,

    probe_objective: true,
    modifier_extraction: true,
    constant_pool: true,
    constant_pool_probability: 0.5,

    // logging
    console_log_level: "info",
    log_to_file: ["info", "warn", "error"],
    exclude: [
        "./contracts/ConvertLib.sol",
        "./contracts/CourtFarming_HTStake_utils.sol",
        "./contracts/CourtFarming_RoomLPStake_utils.sol",
        "./contracts/SimplePriceOracle_utils.sol",
        "./contracts/MIMOToken_utils.sol",
        "./contracts/CurveAdapterPriceOracle_utils.sol",
        "./contracts/PlasmaswapPair_utils.sol",
        "./contracts/EdenCoin_utils.sol",
        "./contracts/Controller_utisl.sol",
        "./contracts/AntiSFI_utils.sol",
        "./contracts/Hold_utils.sol",
        "./contracts/TetherToken_utils.sol",
        "./contracts/TokenDispatch_utils.sol",
        "./contracts/FrogDAOGovernanceRewards_utils.sol",
        "./contracts/YieldFarmLP2_utils.sol",
        "./contracts/UNIWHALE_ERC20_utils.sol",
        "./contracts/SALESCONTRACT_utils.sol",
        "./contracts/AavePoolReward_utils.sol",
        "./contracts/SSTRewards_utils.sol",
        "./contracts/FairStockEquity_utils.sol",
        "./contracts/BAE_utils.sol",
        "./contracts/MisesLegacyPool_utils.sol",
        "./contracts/StakingDextoken_utils.sol",
        "./contracts/GardenContractV2_utils.sol",
        "./contracts/ANRXToken_utils.sol",
        "./contracts/JGNRewards_utils.sol",
        "./contracts/afiController_utils.sol",
        "./contracts/Cryptoz_utils.sol",
        "./contracts/Rexona_utils.sol",
        "./contracts/BTCParamV2_utils.sol",
        "./contracts/LUP_utils.sol",
        "./contracts/CryptoGhost_utils.sol",
        "./contracts/RootChain_utils.sol",
        "./contracts/GFC_utils.sol"
    ],
    include: ["./contracts/**/*.sol"]
}

