import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { FileTrieNode } from "./quartz/util/fileTrie"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node: FileTrieNode) => {
    const omit = "заклинания"
    return omit != node.displayName.toLowerCase()
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
