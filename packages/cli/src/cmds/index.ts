import {ICliCommand} from "../util";
import {IGlobalArgs} from "../options";
import {account} from "./account";
import {beacon} from "./beacon";
import {dev} from "./dev";
import {init} from "./init";
import {validator} from "./validator";
import {lightclient} from "./lightclient";
import {validatorMonitor} from "./validatorMonitor";

export const cmds: Required<ICliCommand<IGlobalArgs, Record<never, never>>>["subcommands"] = [
  beacon,
  validator,
  lightclient,
  validatorMonitor,
  account,
  init,
  dev,
];
