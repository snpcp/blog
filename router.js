(function() {
	window.enums = window.enums || {};
	window.enums.sidebarConstant = {
		id: 'sidebar_js',
		list: [
		
		{
			title: '前言',
			href: '/md/index',
			icon: 'index'
		}, 
		
		{
			title: '操作系统',
			childList: [
			
			{
				title: '综述',
				href: '/md/操作系统/main'
			},

			{
				title: '磁盘',
				childList: [
				{
					title: '如何挂载磁盘',
					href: '/md/操作系统/磁盘/如何挂载磁盘',
				}
				]
			},

			{
				title: '进程',
				childList: [
				{
					title: '进程与线程的区别',
					href: '/md/操作系统/进程/进程与线程的区别',
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
						href: '/md/网络/HTTP/1_1/协议规范',
					}
					]
				}, 
			
				{
					title: '2.0',
					childList: [
					{
						title: '协议规范',
						href: '/md/网络/HTTP/2_0/协议规范',
					}
					]
				}
			
				]
			}

			]
		},

		{
			title: '工具',
			childList: [
			
			{
				title: 'wireshark',
				childList: [
				{
					title: 'wireshark抓包分析',
					href: '/md/工具/wireshark/wireshark抓包分析',
				}
				]
			}

			]
		}

		]
	};
})()