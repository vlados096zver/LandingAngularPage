import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowSubmenu = false;
  isShowMenu = false;
  activeSelection: string = '';
  menu: any[] = [
    {
      point: 'Demo',
      key: 'demo',
      isOpen: false,
      submenu: [
        {
          link: 'Homepage One',
        },
        {
          link: 'Homepage Two',
        }
      ]
    },
    {
      point: 'About',
    },
    {
      point: 'Pages',
      key: 'pages',
      isOpen: false,
      submenu: [
        {
          link: 'About us',
        },
        {
          link: 'Team',
        }
      ]
    },
    {
      point: 'Road map',
    },
    {
      point: 'Team',
    },
    {
      point: 'Contact',
    },
  ];

  openLink(e: any, key: string) {
    e.preventDefault();
    if (window.innerWidth <= 960) {
      this.isShowSubmenu  = !this.isShowSubmenu;
      this.activeSelection = key;
    }
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

}
