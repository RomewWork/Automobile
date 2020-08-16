//主入口

const express = require('express');
//文件模块：直接require引入就能用
const {
    PORT
} = require('./config.json');

// console.log(PORT);

//开启服务器
const app = express(); //返回对象app
let allRouter = require('./router'); //这里可以写index。也可以不写，因为index是默认的。导入模块

//开启静态资源服务器
app.use(express.static('./'));

app.use(allRouter); //引入总的路由，allRouter是一个中间件

//路由的分配

//监听端口
app.listen(PORT, () => console.log('服务器已开启，请访问localhost:10086'));

// supervisor
// users
// goods

/*数据库表名
/////////////////
用户信息          user
购物车              cartshop
收藏夹              collection
订单                 order
安全预警仪       safetywarninginstrument
安全座椅           safetyseat
玻璃水              bathofglass
车蜡                  carwax
车载生活电        onboardlivingelectricity
打气泵               blastpump
电源                   powersupply
防盗设备            antitheftequipment
改装配件            refittingaccessories
功能精品            functionalproducts
挂失摆件            lossreportingaccessories
行车记录仪         tachograph
紧急救援            emergencyrescue
颈枕腰靠            neckpillowlumbarsupport
净化器               purifier
蓝牙设备            bluetoothdevices
冷暖箱                heatingandcoolingbox
凉垫                    coolingmat
轮胎                    tyre
内饰精品             interiorquality
清洁剂                cleaningagent
四季垫                fourseasonsmat
吸尘器                vacuumcleaner
洗车机                carwashingmachine
洗车配件            carwashingaccessories
香水                   perfume
自驾装备            selfdrivingequipment
*/