/*
 * @rlanz/lemonsqueezy
 *
 * (c) Romain Lanz
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { stubsRoot } from './stubs/main.js'
import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  /**
   * Define environment variables
   */
  await codemods.defineEnvVariables({ LEMONSQUEEZY_API_KEY: '<your_lemon_squeezy_api_key>' })

  /**
   * Define environment variables validations
   */
  await codemods.defineEnvValidations({
    variables: {
      LEMONSQUEEZY_API_KEY: 'Env.schema.string()',
    },
    leadingComment: 'Variables for configuring @rlanz/lemon-squeezy package',
  })
}
