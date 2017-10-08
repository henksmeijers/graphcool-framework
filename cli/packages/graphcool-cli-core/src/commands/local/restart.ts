import { Command, flags, Flags } from 'graphcool-cli-engine'
import { InvalidProjectError } from '../../errors/InvalidProjectError'
import Docker from './Docker'

export default class Restart extends Command {
  static topic = 'local'
  static command = 'restart'
  static description = 'Restart an already initialized local Graphcool instance'
  static flags: Flags = {
    name: flags.string({
      char: 'n',
      description: 'Name of the new instance',
      defaultValue: 'dev'
    }),
  }
  async run() {
    const docker = new Docker(this.out, this.config, this.flags.name)
    await docker.restart()
  }
}