import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#757575',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: 'rgb(125,125,235)',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  or: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 15,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: 'rgb(125,125,235)',
    marginLeft: 5,
  },
  recover: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  recoverText: {
    color: 'rgb(125,125,235)',
  },
});
