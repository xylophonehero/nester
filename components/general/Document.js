import { Document, Page, Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer'
// import logo from "../../assets/images/logo.png"
import "twin.macro"

Font.register({
  family: 'Roboto', fonts: [
    { src: "/Roboto-Regular.ttf" },
    { src: "/Roboto-Bold.ttf", fontWeight: 700 },
  ]
});

const data = {
  title: "Mr",
  firstName: "Nick",
  secondName: "Worrall",
  firstLineAddress: "123 Fake Street",
  town: "Springfield",
  postCode: "ABC 123",
  date: "07/08/2021",
  accountNumber: "12345678",
  items: [
    {
      date: "18/07/2021",
      description: "New car",
      reference: "AHJ152367",
      amount: 1000,
    },
    {
      date: "19/07/2021",
      description: "Another new car",
      reference: "AHJ15231",
      amount: 2000,
    },
  ]
}

const columnSmallWidth = "15%"
const columnLargeWidth = "35%"

const styles = StyleSheet.create({
  page: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.2,
  },
  section: {
    heigth: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    flex: "1 0 auto",
    fontFamily: "Roboto",
  },
  addressText: {
    fontSize: 10,
    textAlign: "right",
    color: "#666666",
    marginBottom: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainBody: {
    fontSize: 11,
    margin: 36,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColSmall: {
    width: "15%",
  },
  tableColLarge: {
    width: "35%",
  },
  tableCell: {
    margin: 4,
    marginBottom: 12,
    fontSize: 10,
  }
});

const itemTotal = (items) =>
{
  return items.reduce((a, c) => a + c.amount, 0)
}

const formatCurrency = (amount) =>
{
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount)
}

const formatDate = (dateString) =>
{
  const [year, month] = dateString.split("-")
  const date = new Date(Date.UTC(year, month - 1))
  return new Intl.DateTimeFormat('en-GB', { month: "long" }).format(date)
}

const MyDocument = ({ months }) =>
{
  const startMonth = formatDate(months.startMonth)
  const endMonth = formatDate(months.endMonth)
  if (!startMonth || !endMonth) return null

  return (
    <Document
      title={`${data.firstName} ${data.secondName} Statement: ${startMonth}-${endMonth}`}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.addressText}>
            {[
              "info@nester.com",
              "0203 983 0707",
              "30 Moorgate, London",
              "EC2R 6PJ"
            ].join("\n")}
          </Text>
          <Image
            src="/logo.png"
            alt="logo"
            style={{ maxWidth: 360, margin: "auto", marginBottom: 36, marginTop: 0 }}
          />
          <Text style={styles.title}>
            Your Statement
          </Text>
          <View style={styles.mainBody}>
            <Text style={{ marginBottom: 24 }}>
              {[
                `${data.firstName} ${data.secondName}`,
                data.firstLineAddress,
                data.town,
                data.postCode
              ].join("\n")}
              {/* {`${data.firstName} ${data.secondName}\n`} */}
            </Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <View style={{ flex: "3 0 auto" }}>
                <Text>{`Dear ${data.title} ${data.secondName},`}</Text>
              </View>
              <View style={{ flex: "1 0 auto" }}>
                <Text style={{ marginBottom: 8 }}>{data.date}</Text>
                <Text>{data.accountNumber}</Text>
              </View>
            </View>
            <Text style={{ marginBottom: 24 }}>
              {`Please see below your statement for the time period of ${startMonth}-${endMonth}. If something looks incorrect on your statement, contact us to correct this.`}
            </Text>
            <View style={styles.table}>
              {/* TableHeader */}
              <View style={{ ...styles.tableRow, fontWeight: "bold" }}>
                <View style={[styles.tableCol, styles.tableColSmall]}>
                  <Text style={styles.tableCell}>Date:</Text>
                </View>
                <View style={[styles.tableCol, styles.tableColLarge]}>
                  <Text style={styles.tableCell}>Description:</Text>
                </View>
                <View style={[styles.tableCol, styles.tableColLarge]}>
                  <Text style={styles.tableCell}>Reference:</Text>
                </View>
                <View style={[styles.tableCol, styles.tableColSmall]}>
                  <Text style={styles.tableCell}>Amount:</Text>
                </View>
              </View>
              {data.items.map((item) => <View key={item.reference} style={styles.tableRow}>
                <View style={{ ...styles.tableCol, width: columnSmallWidth }}>
                  <Text style={styles.tableCell}>{item.date}</Text>
                </View>
                <View style={{ ...styles.tableCol, width: columnLargeWidth }}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={{ ...styles.tableCol, width: columnLargeWidth }}>
                  <Text style={styles.tableCell}>{item.reference}</Text>
                </View>
                <View style={{ ...styles.tableCol, width: columnSmallWidth }}>
                  <Text style={styles.tableCell}>{formatCurrency(item.amount)}</Text>
                </View>
              </View>)}
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCol, width: "85%" }}>
                  <Text style={styles.tableCell}>Balance</Text>
                </View>
                <View style={{ ...styles.tableCol, width: columnSmallWidth }}>
                  <Text style={styles.tableCell}>{formatCurrency(itemTotal(data.items))}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default MyDocument
