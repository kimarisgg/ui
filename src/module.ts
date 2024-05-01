import { defineNuxtModule, createResolver, addImportsDir, installModule, addComponentsDir } from "@nuxt/kit"
import { name, version } from "../package.json"

export interface ModuleOptions {
  /**
   * @default 'u'
   */
  prefix?: string

  /**
   * @default false
   */
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "ui",
    compatibility: {
      nuxt: "^3.11.0"
    }
  },
  defaults: {
    prefix: "U"
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve("./runtime")
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias["#ui"] = runtimeDir

    await installModule("@unocss/nuxt", {
      preflight: true
    })
    await installModule("nuxt-lucide-icons")

    await addComponentsDir({
      path: resolve(runtimeDir, "components", "elements"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    })

    await addComponentsDir({
      path: resolve(runtimeDir, "components", "forms"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    })

    await addComponentsDir({
      path: resolve(runtimeDir, "components", "layout"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    })

    await addComponentsDir({
      path: resolve(runtimeDir, "components", "overlay"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    })

    // addImportsDir(resolve(runtimeDir, "composables"))
  }
})
