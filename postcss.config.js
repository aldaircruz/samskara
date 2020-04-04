//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/samskara.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  PostCSS run control for samskara Ghost theme
//                       |

module.exports = {
    plugins: [
        // require('@fullhuman/postcss-purgecss')({
        //     content: [ './*.hbs', './partials/*.hbs' ],
        //     whitelist: [],
        // }),
        require('autoprefixer'),
        require('cssnano')
    ]
};