import nunjucks from "nunjucks";
import path from "path";

export default class Nunjucks {

    private _nunjucks: any;
    private _nunjucksOptions: any;
    private _nunjucksEnvironment: any;

    public constructor(nunjucks: nunjucks, config: any) {
        this._nunjucks = nunjucks;
        this._nunjucksOptions = {
            autoscape: config.autoscape
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
