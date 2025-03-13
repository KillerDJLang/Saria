import { inject, injectable } from "tsyringe";
//Spt Classes
import type { VFS } from "@spt/utils/VFS";
//Custom Classes
import type { configFile } from "../models/Interfaces";
//Modules
import path from "node:path";
import JSON5 from "json5";

@injectable()
export class ConfigManager {
    constructor(@inject("VFS") protected sptFs: VFS) {}

    /**
     * Parses the main mod config using the configFile interface.
     *
     * @returns The parsed modConfig file for use.
     */
    public modConfig(): configFile {
        const modConfig = JSON5.parse(this.sptFs.readFile(path.resolve(__dirname, "../../config.json5"))) as configFile;

        return modConfig;
    }
}
