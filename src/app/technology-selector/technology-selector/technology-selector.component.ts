import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DisplayIcon, EnumDictionary, IconImageType, IconType, Technology } from 'src/models';

@Component({
  selector: 'app-technology-selector',
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss']
})
export class TechnologySelectorComponent implements OnInit {

  @Output()
  selectedFilter: EventEmitter<Technology[]> = new EventEmitter();

  iconImgType = IconImageType;
  technologies: EnumDictionary<Technology, { icon: DisplayIcon, selected: boolean }> = {
    [Technology.Unity]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "unity" }, selected: false },
    [Technology.TypeScript]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.ExternalLink, iconHTMLString: "devicon-typescript-plain" }, selected: false},
    [Technology.React]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "react" }, selected: false},
    [Technology.Python]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "python" }, selected: false},
    [Technology.NodeJS]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "node-js" }, selected: false},
    [Technology.JavaScript]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "js-square" }, selected: false},
    [Technology.Cpp]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.ExternalLink, iconHTMLString: "devicon-cplusplus-plain" }, selected: false},
    [Technology.CSharp]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.ExternalLink, iconHTMLString: "devicon-csharp-plain" }, selected: false},
    [Technology.Bootstrap]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "bootstrap" }, selected: false},
    [Technology.Angular]: {icon: { iconType: IconType.Brand, iconImageType: IconImageType.FortAwesome, iconHTMLString: "angular" }, selected: false},
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.technologies)
  }

  buttonClicked(iconClicked: Technology){
    this.technologies[iconClicked].selected = !this.technologies[iconClicked].selected;
    var filtered = Object.entries(this.technologies).filter(([k,v]) => v.selected).map(([k,v]) => k as Technology);
    this.selectedFilter.emit(filtered);
  }

}
