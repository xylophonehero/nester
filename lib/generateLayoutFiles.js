const fs = require("fs")

const getLayout = async () => {
  try {
    const headerRes = await fetch("http://3.250.103.203:1337/header")
    const header = await headerRes.json()
  
    const footerRes = await fetch("http://3.250.103.203:1337/footer")
    const footer = await footerRes.json()
    return {header, footer}
  } catch (error) {
    console.error("Failed fetching layout data")
  }
}


module.exports = async () => {
  console.info("Getting layout files")
  // fetch from wherever you've stored the layout
  const layout = await getLayout();
  if (!layout.header || !layout.footer){
    console.error("No layout data")
    return
  } 
  // save the result the public folder
  fs.writeFileSync('public/header.json', JSON.stringify(layout.header));
  fs.writeFileSync('public/footer.json', JSON.stringify(layout.footer));
  console.info("Saved layout files")
};