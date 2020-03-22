import * as nunjucks from "nunjucks";
import * as path from "path";

export default class Nunjucks {

    private _nunjucks: any;
    private _nunjucksOptions: object;
    private _nunjucksEnvironment: nunjucks.Environment;

    public constructor(nunjucks: any, config: any) {
        this._nunjucks = nunjucks;
        this._nunjucksOptions = {
            autoescape: config.autoscape
        };
        this._nunjucksEnvironment = this._nunjucks.configure(
            path.join(path.resolve("."),
            config.views_path),
            this._nunjucksOptions
        );
        this.registerCustomFilters();
        return this._nunjucks;
    }

    public registerCustomFilters() {
        this._nunjucksEnvironment.addFilter('trans', (str: any) => {
           return str;
        });
    }
}
