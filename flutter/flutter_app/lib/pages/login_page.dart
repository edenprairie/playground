import 'package:flutter/material.dart';
import 'package:flutterapp/pages/home_page.dart';
import 'package:flutterapp/utils/constants.dart';

class LoginPage extends StatefulWidget {
  static const String routeName = "/login";
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final formKey = GlobalKey<FormState>();

  final _usernameController = TextEditingController();

  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Page"),
      ),
      body: Stack(
        fit: StackFit.expand,
        children: <Widget>[
        Image.asset(
          "assets/bg.jpeg",
          fit: BoxFit.cover,
          color: Colors.black.withOpacity(0.7),
          colorBlendMode: BlendMode.darken,
        ),
        Center(
          child: SingleChildScrollView(
          child: Form(
            key: formKey,
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(32.0), 
                child: Column(children: <Widget>[
                  TextFormField(
                    controller: _usernameController,
                    keyboardType: TextInputType.emailAddress,
                    // validator: (s){} ,
                    decoration: InputDecoration(
                      hintText: "Enter email",
                      labelText: "Username"
                    ),
                  ),
                  SizedBox(height: 16,),
                  TextFormField(
                    controller: _passwordController,
                    keyboardType: TextInputType.text,
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: "Enter password",
                      labelText: "Password"
                    ),
                  ),
                  SizedBox(height: 16,),
                  RaisedButton(
                    onPressed: (){
                      // if (formKey.currentState.validate()) {
                        // Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()));
                        Constants.prefs.setBool("loggedIn", true);
                        Navigator.pushNamed(context, HomePage.routeName);
                      // }
                    },
                    child: Text("Sign In"),
                    color: Colors.blue,
                  ),
                ],),
              ),
            )
          ),
      ),
        ),
      ],)
    );
  }
}