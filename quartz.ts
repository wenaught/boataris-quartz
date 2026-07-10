import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { FileTrieNode } from "./quartz/util/fileTrie"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node: FileTrieNode) => {
    const filteredNodes = node.displayName.toLowerCase() == "заклинания" ? [node, ...node.children] : []
    return !filteredNodes.includes(node)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
