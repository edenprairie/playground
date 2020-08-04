import 'package:flutter/material.dart';
import 'package:recipe_app/components/my_bottom_nav_bar.dart';
import 'package:recipe_app/constants.dart';
import 'package:recipe_app/screens/profile/components/body.dart';
import 'package:recipe_app/size_config.dart';

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: kPrimaryColor,
        leading: SizedBox(),
        centerTitle: true,
        title: Text("Profile"),
        actions: <Widget>[
          FlatButton(
            onPressed: () {},
            child: Text(
              "Edit",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: SizeConfig.defaultSize * 1.6,
                  fontWeight: FontWeight.bold),
            ),
          )
        ],
      ),
      bottomNavigationBar: MyBottomNavBar(),
      body: Body(),
    );
  }
}
