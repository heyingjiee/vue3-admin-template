import type { RouteRecordRaw } from 'vue-router'

const constantRoute: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      hiddenMenuItem: true
    },
    component: () => import('@/views/LoginView.vue')
  },
  {
    name: 'Home',
    path: '/',
    redirect: '/index',
    meta: {
      title: '',
      hiddenMenuItem: true
    },
    component: () => import('@/layout/IndexLayout.vue'),
    children: [
      {
        name: 'Index',
        path: '/index',
        meta: {
          title: '首页',
          icon: 'House',
          hiddenMenuItem: false
        },
        component: () => import('@/views/Home/IndexView.vue')
      }
    ]
  },
  {
    name: 'Screen',
    path: '/screen',
    meta: {
      title: '数据大屏',
      icon: 'DataAnalysis',
      hiddenMenuItem: false
    },
    component: () => import('@/views/Screen/ScreenView.vue')
  },
  {
    name: 'ACL',
    path: '/acl',
    redirect: '/acl/user-manager',
    meta: {
      title: '权限管理',
      icon: 'Lock',
      hiddenMenuItem: false
    },
    component: () => import('@/layout/IndexLayout.vue'),
    children: [
      {
        name: 'UserManager',
        path: '/acl/user-manager',
        meta: {
          title: '用户管理',
          icon: 'User',
          hiddenMenuItem: false
        },
        component: () => import('@/views/ACL/UserManager.vue')
      },
      {
        name: 'RoleManager',
        path: '/acl/role-manager',
        meta: {
          title: '角色管理',
          icon: 'Suitcase',
          hiddenMenuItem: false
        },
        component: () => import('@/views/ACL/RoleManager.vue')
      },
      {
        name: 'MenuManager',
        path: '/acl/menu-manager',
        meta: {
          title: '菜单管理',
          icon: 'Document',
          hiddenMenuItem: false
        },
        component: () => import('@/views/ACL/MenuManager.vue')
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '404',
      hiddenMenuItem: true
    },
    component: () => import('@/views/NotFoundPage.vue')
  },
  {
    name: 'Any',
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404',
      hiddenMenuItem: true
    },
    component: () => import('@/views/NotFoundPage.vue')
  }
]

export default constantRoute
