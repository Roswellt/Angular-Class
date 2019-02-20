import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    
    @HostBinding('class.open') isActive = false;

    @HostListener('click') toggleDropdown() {
        this.isActive = !this.isActive;
    }
}