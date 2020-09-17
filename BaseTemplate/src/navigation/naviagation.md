# Navigating in React Native
It all starts with <b>`createAppContainer`</b> where most people usually place their <b>`createStackNavigator`</b> or other navigator codes into the <b>`createAppContainer`</b>.

If you look at <b>`routes.js`</b> in under <b>`navigation`</b> folder, you would be able to see where I created my stack navigator and calling it <b>`RootStack`</b> or <b>`Root`</b> which I followed other people's coding practice. Basically it's suppose to mean that this navigator is the main navigator or the first layer before you add more sub navigator onto the application itself.

Currently, my <b>`RootStack`</b> is pointing to <b>`Login.js`</b> which I will intend to change it to something else, just hadn't thought about the name yet. In <b>`Login.js`</b> I created a bottom navigator which is basically the seond layer I was talking about previously. I also pointed all the tabs to the respective js files to show how the navigation works in the second layer.

