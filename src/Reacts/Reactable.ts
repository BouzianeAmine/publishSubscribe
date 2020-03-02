import { React } from "./React";

export abstract class Reactable {
    reactions: Array<React> = [];
    reaction(react: React) {
        this.reactions.push(react);
    };
}