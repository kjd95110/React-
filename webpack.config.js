const path = require('path');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve:{
       extensions: ['.js','.jsx']
    },
    entry:{
        // app:['./client.jsx','WordRelay.jsx'], 
        app:['./client'], 
        // client.jsx에서 WordRelay.jsx를 호출하므로 WordRelay.jsx생략가능하고 resolve에서 확장자 지정해주므로 확장자 생략가능함.

    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets:[
                    [
                        '@babel/preset-env',
                        {
                            targets:{
                                browsers:['> 5% in KR','last 2 chrome versions'],
                            },

                        },
                    ],
                    '@babel/preset-react'], //IE 지원

                plugins:['@babel/plugin-proposal-class-properties']
            },
        }],
    },
    output:{
        path: path.join(__dirname,'dist'),  //현재폴더 __dirname 안에 dist가 된다.
        filename: 'app.js'
    }
};


/* 

3대 포커스 entry and module and  output 이 가장 중요
추가로  plugin 있음.

webpack 커맨드라인에서 실행안될때 2가지방법있음
package.json파일에
1.scripts:{
    "dev":"webpack"
}

c:\>npm run dev

2.제어판 시스템 들어가서 환경변수 path 에 지정

3.c:\>npx webpack

*/