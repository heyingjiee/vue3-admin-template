// import mockJS from 'mockjs'

//使用mockJS生成的100条数据
// const userList = mockJS.mock({
//   //mockjs文档地址：http://mockjs.com/examples.html#Name
//   'data|100': [
//     //100条数据
//     {
//       cname: '@cname', //中文名
//       'id|+1': 1, //递增的id
//       time: '@time', //'00:14:47'
//       data: '@date' //'1980-09-20'
//     }
//   ]
// })

export default [
  {
    //登录接口
    url: '/dev/api/login',
    method: 'post',
    response: ({ body }) => {
      //body 请求体
      console.log('body', body)
      return {
        code: 0,
        data: {
          token: '123456'
        },
        msg: 'ok'
      }
    }
  },
  {
    //获取用户信息
    url: '/dev/api/get-user-info',
    method: 'post',
    response: ({ body }) => {
      //body 请求体
      if (body.token) {
        return {
          code: 0,
          message: 'ok',
          data: {
            routes: [
              'aaa',
              'User',
              'Category',
              'Discount',
              'ActivityEdit',
              'CouponRule',
              'Product',
              'Activity',
              'CouponAdd',
              'Trademark',
              'test1',
              'Attr',
              'ActivityAdd',
              'Emperor',
              'CouponEdit',
              'OrderShow',
              '111',
              'Permission',
              'Spu',
              'UserList',
              'ClientUser',
              'Order',
              '33',
              "t't",
              'aa',
              'Coupon',
              'zaixiang',
              'permision',
              'Acl',
              'ActivityRule',
              'Role',
              'RoleAuth',
              '1',
              '222',
              'Refund',
              '1223',
              'OrderSetting',
              'x',
              'OrderList',
              'Sku'
            ],
            buttons: [
              'cuser.detail',
              'cuser.update',
              'cuser.delete',
              'btn.User.add',
              'btn.User.remove',
              'btn.User.update',
              'btn.User.assgin',
              'btn.Role.assgin',
              'btn.Role.add',
              'btn.Role.update',
              'btn.Role.remove',
              'btn.Permission.add',
              'btn.Permission.update',
              'btn.Permission.remove',
              'btn.Activity.add',
              'btn.Activity.update',
              'btn.Activity.rule',
              'btn.Coupon.add',
              'btn.Coupon.update',
              'btn.Coupon.rule',
              'btn.OrderList.detail',
              'btn.OrderList.Refund',
              'btn.UserList.lock',
              'btn.Category.add',
              'btn.Category.update',
              'btn.Category.remove',
              'btn.Trademark.add',
              'btn.Trademark.update',
              'btn.Trademark.remove',
              'btn.Attr.add',
              'btn.Attr.update',
              'btn.Attr.remove',
              'btn.Spu.add',
              'btn.Spu.addsku',
              'btn.Spu.update',
              'btn.Spu.skus',
              'btn.Spu.delete',
              'btn.Sku.updown',
              'btn.Sku.update',
              'btn.Sku.detail',
              'btn.Sku.remove',
              'btn.all',
              'btn.test.2',
              'aaabbb',
              '',
              'OrderList'
            ],
            roles: ['超级管理员'],
            name: 'admin',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
          },
          ok: true
        }
      }
    }
  },
  {
    //退出登录
    url: '/dev/api/login-out',
    method: 'post',
    response: ({ body }) => {
      //body 请求体
      if (body.token) {
        return {
          code: 0,
          data: null,
          msg: 'ok'
        }
      }
    }
  }
]
