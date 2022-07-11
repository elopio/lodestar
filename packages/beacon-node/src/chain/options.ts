import {SAFE_SLOTS_TO_IMPORT_OPTIMISTICALLY} from "@lodestar/params";
import {defaultOptions as defaultValidatorOptions} from "@lodestar/validator";
import {ForkChoiceOpts} from "./forkChoice/index.js";

// eslint-disable-next-line @typescript-eslint/ban-types
export type IChainOptions = BlockProcessOpts &
  ForkChoiceOpts & {
    blsVerifyAllMainThread?: boolean;
    blsVerifyAllMultiThread?: boolean;
    disableArchiveOnCheckpoint?: boolean;
    persistInvalidSszObjects?: boolean;
    persistInvalidSszObjectsDir?: string;
    defaultFeeRecipient: string;
  };

export type BlockProcessOpts = {
  /**
   * Do not use BLS batch verify to validate all block signatures at once.
   * Will double processing times. Use only for debugging purposes.
   */
  disableBlsBatchVerify?: boolean;
  /**
   * Override SAFE_SLOTS_TO_IMPORT_OPTIMISTICALLY
   */
  safeSlotsToImportOptimistically: number;
};

export const defaultChainOptions: IChainOptions = {
  blsVerifyAllMainThread: false,
  blsVerifyAllMultiThread: false,
  disableBlsBatchVerify: false,
  proposerBoostEnabled: true,
  safeSlotsToImportOptimistically: SAFE_SLOTS_TO_IMPORT_OPTIMISTICALLY,
  defaultFeeRecipient: defaultValidatorOptions.defaultFeeRecipient,
};
