import {
    defineConfig,
    presetAttributify,
    presetWind3,
    presetWind4,
    presetIcons,
    presetWebFonts,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    presets: [
        presetAttributify({}),

        /** presetWind4 内部已集成 CSS 重置包，可通过 preflights.reset 来配置启动或关闭 CSS 重置（默认启用）   */
        presetWind4({}),

        /** 使用默认的图标集，或需要什么再去 @iconify/json 单独下载 */
        presetIcons({
            warn: true, // -- 当缺少的图标匹配时触发警告
            unit: 'em', // -- default em
        }),

        presetWebFonts({
            // -- Tip: 将 presetWebFonts 与 PresetWind4 一起使用时，fontFamily 主题键不再受支持，需要通过该 themeKey 手动配置
            themeKey: 'font',
            // -- 指定网络字体提供者
            provider: 'google',
            /** 字体配置 key:value
             *  key:用于生成的类名 -- 如: sans → .font-sans
             *  value:指定对应的字体或字体列表（可传入多种类型） -- Tip:配置的字体名称需要在对应的网络字体提供中存在对应字体
             *      - string:字体名称，传入改方式
             *      - array:[字体名称,字体名称:字重,...]
             *      - array_object:[{ name:字体名称, ... }] - 对象中国可显示的配置一些默认的字体样式（不会继承默认字体）
             *  https://unocss.nodejs.cn/presets/web-fonts
             */
            fonts: {
                sans: 'Roboto',
                mono: ['Fira Code', 'Fira Mono:400,700'],
                lato: [
                    {
                        name: 'Lato',
                        weights: ['400', '700'],
                        italic: true,
                    },
                ],
            },
        }),
    ],

    rules: [
        [
            /^clamp-(\d+)$/,
            ([, d]) => ({
                display: '-webkit-box',
                '-webkit-box-orient': ' vertical',
                '-webkit-line-clamp': d,
                overflow: 'hidden',
            }),
        ],
        [
            /^sd-(\d+)-(\d+)$/,
            ([, d, a]) => ({
                'box-shadow': `0 0 ${d}px rgba(0, 0, 0, 0.${a})`,
            }),
        ],
        [
            /^text-primary$/,
            (_, { theme }) => {
                if (theme.colors['primary']) return { color: theme.colors['primary'] }
            },
        ],
        // ...
    ],

    shortcuts: [
        { 'flex-c': 'flex justify-center items-center' },
        { 'flex-bc': ' flex justify-between items-center' },
        { 'flex-ac': 'flex justify-around items-center' },
        // ....
    ],

    theme: {
        colors: {
            primary: '#00a8cf',
            // bg_color: 'var(--el-bg-color)',
            // primary: 'var(--el-color-primary)',
            // text_color_primary: 'var(--el-text-color-primary)',
            // text_color_regular: 'var(--el-text-color-regular)',
        },
    },
})
