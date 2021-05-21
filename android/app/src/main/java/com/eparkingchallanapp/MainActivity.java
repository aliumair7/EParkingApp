package com.eparkingchallanapp;
import com.facebook.react.ReactActivity;
import android.content.Intent;
import com.reactnative.ivpusic.imagepicker.patch30277.PickerModule30277Workaround;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
     return "EPARKINGCHALLANAPP";
  }
    private final PickerModule30277Workaround mPickerModule30277Workaround = new PickerModule30277Workaround();

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        mPickerModule30277Workaround.onActivityResultTriggered(getReactInstanceManager(), requestCode, resultCode, data);
    }

    @Override
    protected void onResume() {
        super.onResume();
        mPickerModule30277Workaround.onActivityResume(this, getReactInstanceManager());
    }

    @Override
    protected void onStop() {
        super.onStop();
        mPickerModule30277Workaround.onActivityStop(getReactInstanceManager());
    }
   
}
