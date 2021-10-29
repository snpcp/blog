(function() {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [
		
		{
			title: '博客介绍',
			href: '/md/index',
			icon: 'index'
		}, 
		
		{
			title: '关于我',
			href: '/md/about',
			icon: 'index'
		}, 

		{
			title: '操作系统',
			childList: [
			{
				title: 'Linux',
				childList: [
				{
					title: '磁盘',
					childList: [
					{
						title: '如何挂载磁盘',
						href: '/md/操作系统/Linux/磁盘/如何挂载磁盘',
					}
					]
				},
				{
					title: '进程',
					childList: [
					{
						title: '进程与线程的区别',
						href: '/md/操作系统/Linux/进程/进程与线程的区别',
					}
					]
				}
				]
			}
			]
		},

		{
			title: '框架-工具-软件',
			childList: [
			{
				title: 'wireshark',
				childList: [
				{
					title: 'wireshark抓包分析',
					href: '/md/框架-工具-软件/wireshark/wireshark抓包分析',
				}
				]
			}
			]
		},

		{
			title: '网络',
			childList: [
			{
				title: 'HTTP',
				childList: [
				{
					title: '1.1',
					childList: [
					{
						title: '协议规范',
						href: '/md/网络/HTTP/1.1/协议规范',
					}
					]
				}, 
				{
					title: '2.0',
					childList: [
					{
						title: '协议规范',
						href: '/md/网络/HTTP/2.0/协议规范',
					}
					]
				}
				]
			}
			]
		}


		]
	};
})()