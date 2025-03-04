export class SidebarItem {
    private label: string;
    private link: string;
    private items?: SidebarItem[];

    constructor(config: {
        label: string;
        link: string;
        items?: SidebarItem[];
    }) {
        this.label = config.label;
        this.items = config.items;
        this.link = config.link;
    }

    // 判断是否是分组（有子项目）
    isGroup(): boolean {
        return !!this.items && this.items.length > 0;
    }

    isNotGroup(): boolean {
        return !this.isGroup();
    }

    getLabel(): string {
        return this.label;
    }

    getLink(): string {
        return this.link;
    }

    getItems(): SidebarItem[] {
        return this.items || [];
    }

    getItemsIncludingSelf(): SidebarItem[] {
        return [this.toLinkItem(), ...this.getItems()];
    }

    // 将 Group Item 转换为 Link Item
    toLinkItem(): SidebarItem {
        return new SidebarItem({
            label: this.label,
            link: this.getLink(),
        });
    }
} 