// assets
import { IconBrandChrome, IconHelp, IconLogout ,IconUser,IconFileReport,IconBrandCashapp,IconListCheck,IconCalendar,IconUsersGroup} from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp, IconLogout,IconUser,IconFileReport,IconBrandCashapp,IconListCheck,IconCalendar,IconUsersGroup};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id:'task',title:'Tasks', type:'item',url:'/task-schedule',icon:IconListCheck,breadcrumbs:false
    },
    {
      id:'activity-management',title:'Activity' ,type:'item',url:'/activity',icon:icons.IconCalendar,breadcrumbs:false
    },
    
    {
      id:'expense',title:'Expense',type:'item',url:'/expense',icon:IconBrandCashapp,breadcrumbs:false
    },
  
    { 
      id: 'my-team', title: 'My Team', type: 'item', url: '/my-team', icon: icons.IconUsersGroup, breadcrumbs: false },
    
    
    {
      id:'report',title:'Report',type:'item',url:'/report',icon:IconFileReport,breadcrumbs:false
    },
    {
      id:'myprofile',title:'My Profile' ,type:'item',url:'/my-profile',icon:IconUser,breadcrumbs:false
    },
    {
      id:'logout',title:'Logout',type:'item',url:'/logout',icon:IconLogout,breadcrumbs:false
    }
  ]
};

export default other;
