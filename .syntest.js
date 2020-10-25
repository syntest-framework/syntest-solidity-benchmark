module.exports = {
    search: {
        seed: 'test',
        population_size: 3,
        max_depth: 5,

        // mutation chances
        resample_gene_chance: 0.01,
        delta_mutation_chance: 0.8,
        sample_func_as_arg: 0.5,

        algorithm: "NSGA2",
        stopping_criteria: [
            {
                criterion: "generation_limit",
                limit: 10
            },
            {
                criterion: "time_limit",
                limit: 1000 * 60 * 5
            },
            {
                criterion: "coverage",
                limit: 100
            }
        ],

        // logging
        console_log_level: "debug",
        log_to_file: ["info", "warn", "error"]
    },
}