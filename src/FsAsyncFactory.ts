import * as BB from 'bluebird'
import * as fs from 'fs'

export class FsAsyncFactory {

    public static getFsAsync(): any {

        if (this.fsAsync === null) {
            this.fsAsync = BB.promisifyAll(fs)
        }

        return this.fsAsync
    }

    private static fsAsync: any = null

}

export default FsAsyncFactory
