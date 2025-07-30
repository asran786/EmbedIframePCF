import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class EmbedIframePCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private container: HTMLDivElement;
  private currentCode: string = "";

  init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {
    this.container = container;
    this.currentCode = context.parameters.embedCode.raw || "";
    this.render();
  }

  updateView(context: ComponentFramework.Context<IInputs>): void {
    this.currentCode = context.parameters.embedCode.raw || "";
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `<div style="width:100%;height:auto;overflow:hidden;">${this.currentCode}</div>`;
  }

  getOutputs(): IOutputs {
    return { embedCode: this.currentCode };
  }

  destroy(): void {
    // No cleanup necessary
  }
}
