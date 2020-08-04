import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:recipe_app/models/recipe_bundle.dart';
import 'package:recipe_app/size_config.dart';

class RecipeBundleCard extends StatelessWidget {
  final RecipeBundle recipeBundle;
  final Function press;

  const RecipeBundleCard({Key key, this.recipeBundle, this.press})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    double defaultSize = SizeConfig.defaultSize;
    return GestureDetector(
      onTap: this.press,
      child: Container(
        decoration: BoxDecoration(
            color: this.recipeBundle.color,
            borderRadius: BorderRadius.circular(defaultSize * 1.8)),
        child: Row(
          children: <Widget>[
            Expanded(
              child: Padding(
                padding: EdgeInsets.all(defaultSize * 2),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Spacer(),
                    Text(
                      this.recipeBundle.title,
                      style: TextStyle(
                          fontSize: defaultSize * 2.2, color: Colors.white),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    SizedBox(
                      height: defaultSize * .5,
                    ),
                    Text(
                      this.recipeBundle.description,
                      style: TextStyle(color: Colors.white54),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    Spacer(),
                    buildInfoRow(defaultSize,
                        iconSrc: "assets/icons/pot.svg",
                        text: "${this.recipeBundle.recipes} Recipes"),
                    SizedBox(
                      height: defaultSize * .5,
                    ),
                    buildInfoRow(defaultSize,
                        iconSrc: "assets/icons/chef.svg",
                        text: "${this.recipeBundle.chefs} Chefs"),
                    Spacer(),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: defaultSize * .5,
            ),
            AspectRatio(
              aspectRatio: .71,
              child: Image.asset(
                this.recipeBundle.imageSrc,
                fit: BoxFit.cover,
                alignment: Alignment.centerLeft,
              ),
            )
          ],
        ),
      ),
    );
  }

  Row buildInfoRow(double defaultSize, {String iconSrc, text}) {
    return Row(
      children: <Widget>[
        SvgPicture.asset(iconSrc),
        SizedBox(
          width: defaultSize,
        ),
        Text(
          text,
          style: TextStyle(color: Colors.white),
        )
      ],
    );
  }
}
