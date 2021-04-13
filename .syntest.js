module.exports = {
    seed: 'test',
    population_size: 10,
    max_depth: 5,

    // mutation chances
    resample_gene_chance: 0.01,
    delta_mutation_chance: 0.8,
    sample_func_as_arg: 0.5,
    explore_illegal_values: false,

    algorithm: "DynaMOSA",
    stopping_criteria: [
        {
            criterion: "generation_limit",
            limit: 100
        },
        {
            criterion: "time_limit",
            limit: 60 * 15
        },
    ],

    probe_objective: true,

    // logging
    console_log_level: "info",
    log_to_file: ["info", "warn", "error"],
    exclude: [
        "ConvertLib.sol",
        "CourtFarming_HTStake_utils.sol",
        "XSwapProxyV1_utils.sol",
        "SimplePriceOracle_utils.sol",
        "MIMOToken_utils.sol",
        "CurveAdapterPriceOracle_utils.sol",
        "PlasmaswapPair_utils.sol",
        "EdenCoin_utils.sol",
        "Controller_utisl.sol",
        "AntiSFI_utils.sol",
        "Hold_utils.sol",
        "TetherToken_utils.sol",
        "TokenDispatch_utils.sol",
        "FrogDAOGovernanceRewards_utils.sol",
        "YieldFarmLP2_utils.sol",
        "UNIWHALE_ERC20_utils.sol",
        "SALESCONTRACT_utils.sol",
        "AavePoolReward_utils.sol",
        "SSTRewards_utils.sol",
        "FairStockEquity_utils.sol",
        "BAE_utils.sol",
        "MisesLegacyPool_utils.sol",
        "StakingDextoken_utils.sol",
        "GardenContractV2_utils.sol",
        "ANRXToken_utils.sol",
        "JGNRewards_utils.sol",
        "afiController_utils.sol",
        "Cryptoz_utils.sol",
        "Rexona_utils.sol",
        "BTCParamV2_utils.sol",
        "LUP_utils.sol",
        "CryptoGhost_utils.sol",
        "RootChain_utils.sol",
        "GFC_utils.sol"
    ]
}

