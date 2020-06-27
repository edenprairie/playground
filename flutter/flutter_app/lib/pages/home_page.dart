import 'package:flutter/material.dart';
import 'package:flutterapp/pages/login_page.dart';
import 'package:flutterapp/utils/constants.dart';

import '../drawer.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget{
  static const String routeName = '/home';
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  
  // var myText = "Change The Name";
  // TextEditingController _nameController = TextEditingController();
  var url = "https://jsonplaceholder.typicode.com/photos";
  var data;

  @override void initState() {
    super.initState();
    fetchData();
  }
  
  fetchData() async {
    var res = await http.get(url);
    data = jsonDecode(res.body);
    setState(() {
      
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text("Awesome App"),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.exit_to_app,),
            onPressed: (){
              Constants.prefs.setBool("loggedIn", false);
              // Navigator.pop(context);
              Navigator.pushReplacementNamed(context, LoginPage.routeName);
            },
          )
        ],
      ),
      body: data != null 
        // ? GridView.builder(
          // gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
          ? ListView.builder(
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(data[index]["title"]),
              subtitle: Text("ID: ${data[index]["id"]}"),
              leading: Image.network(data[index]["url"]),
            );
          },
          itemCount: data.length,
          ) 
        : Center(
        child: CircularProgressIndicator(),
      ),
      drawer: MyDrawer(),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          // myText = _nameController.text;
          setState(() {
            
          });
        },
        child: Icon(Icons.send),
      ),
    );
  }

}
