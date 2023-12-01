/**
 * (#)app.mjs   1.0.0   09/08/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
