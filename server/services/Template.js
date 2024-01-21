import fs from "fs";
import path from "path";

class Template {
  static async build() {
    // Get the directory of the current module
    console.log(process.cwd());
    let rootFiles = fs.readFileSync(path.join(process.cwd()));
    for (let file of rootFiles) console.log(file);
    const templateComponents = fs.readdirSync(
      path.join(process.cwd(), "components/template")
    );
    return templateComponents;
  }
}

export default Template;
