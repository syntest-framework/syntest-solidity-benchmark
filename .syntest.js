module.exports = {
    seed: 'test',
    population_size: 20,
    max_depth: 5,

    // mutation chances
    resample_gene_chance: 0.01,
    delta_mutation_chance: 0.8,
    sample_func_as_arg: 0.5,
    explore_illegal_values: false,

    algorithm: "MOSA",
    stopping_criteria: [
        {
            criterion: "generation_limit",
            limit:50
        },
        {
            criterion: "time_limit",
            limit: 1000 * 60 * 10
        },
        {
            criterion: "coverage",
            limit: 100
        }
    ],

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
        //"KayboMon_utils.sol",
        "Controller_utisl.sol",
        "AntiSFI_utils.sol"
    ]
}

