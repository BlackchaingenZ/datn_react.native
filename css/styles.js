import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Tạo nền mờ cho các phần tử
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#0066cc',
    marginTop: 10,
  },
  // Kiểu dáng cho logo
  logo: {
    width: 100, // Kích thước logo
    height: 100,
    marginBottom: 20, // Khoảng cách dưới logo
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#f7fafc',
  //   padding: 20,
  // },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBillText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  billContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  address: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  invoiceId: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  invoiceIdHighlight: {
    color: 'red',
    fontWeight: 'bold',
  },
  billDetails: {
    marginVertical: 20,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  table: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rowLabel: {
    fontSize: 14,
    flex: 1,
  },
  rowDetail: {
    fontSize: 14,
    flex: 2,
  },
  rowValue: {
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
  highlightValue: {
    fontWeight: 'bold',
    color: 'red',
  },
  paymentStatus: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
