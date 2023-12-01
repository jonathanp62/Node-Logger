/**
 * (#)logger.mjs    1.0.0   09/08/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

export const error = 'ERROR';
export const warning = 'WARNING';
export const info = 'INFO';

/**
 * The log function.
 *
 * @param   {String} message
 * @param   {String} level
 */
export function log(message, level = info) {
    console.log(`${level}: ${message}`);
}
