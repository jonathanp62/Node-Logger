/**
 * (#)logger.mjs    1.0.0   09/08/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
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
