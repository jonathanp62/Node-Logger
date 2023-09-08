/**
 * (#)app.mjs   1.0.0   09/08/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import {error, log, warning} from "./logger.mjs";

/**
 * The main function.
 */
function main() {
    log("Starting logger");
    log("A warning to all", warning);
    log("An error", error);
    log("Stopping logger");
}

main();
